/*
 * @file: Add reading time
 */
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // data.astro.frontmatter.minutesRead = i18next.t('blog.readingTime', {
    //   minutes: Math.round(readingTime.minutes),
    // });
    data.astro.frontmatter.minutesRead = Math.round(readingTime.minutes);
  };
}
