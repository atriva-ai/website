import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.string(),         // ISO date
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      image: z.string().optional()
    })
  }),
  pages: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      hero: z.boolean().default(false)
    })
  })
};
