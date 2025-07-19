/*
 * @Author: kim
 * @Description: rss 提要
 */
import rss from '@astrojs/rss';
import { experimental_AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getCollection, render } from 'astro:content';
import { getContainerRenderer as mdxContainerRenderer } from "@astrojs/mdx";
import sanitizeHtml from 'sanitize-html';
import slateConfig from '~@/slate.config';

export async function GET(context) {
  const blog = await getCollection('post');
  const renderers = await loadRenderers([mdxContainerRenderer()]);
  const container = await experimental_AstroContainer.create({
    renderers,
  });

  const postItems = await Promise.all(blog
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate - a.data.pubDate)
    .map(async (post) => {
      const { Content } = await render(post);
      const htmlStr = await container.renderToString(Content);

      return {
        link: `/blog/${post.slug}/`,
        title: post.data.title,
        content: sanitizeHtml(htmlStr, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),
        ...post.data,
      }
    }));

  const rssOptions = {
    stylesheet: '/pretty-feed-v3.xsl',
    title: slateConfig.title,
    description: slateConfig.description,
    site: context.site,
    trailingSlash: false,
    items: postItems,
  }

  if(slateConfig.follow) {
    rssOptions.customData = `<follow_challenge>
      <feedId>${slateConfig.follow.feedId}</feedId>
      <userId>${slateConfig.follow.userId}</userId>
    </follow challenge>`;
  }

  return rss(rssOptions);
}
