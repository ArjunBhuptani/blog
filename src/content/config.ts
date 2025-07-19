import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
      /** Title */
      title: z.string(),
      /** Description */
      description: z.string().optional(),
      /** Tags */
      tags: z.array(z.string()).optional(),
      /** Whether it's a draft */
      draft: z.boolean().optional(),
      /** Publish date (required when not draft) */
      pubDate: z.coerce.date().optional(),
    })
    .refine(
      (data) => {
        // If it is a draft, then pubDate is not required; otherwise, it is mandatory.
        if (data.draft === true) {
          return true;
        }
        return data.pubDate !== undefined;
      },
      {
        message: 'When draft is false, publicDate is required',
        path: ['publicDate'],
      },
    ),
});

export const collections = { post: postCollection };
