import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    hasSpanish: z.boolean().optional().default(false),
    isSpanish: z.boolean().optional().default(false),

    //Astro
    nextSlug: z.string().optional(),
    nextTitle: z.string().optional(),
    prevSlug: z.string().optional(),
    prevTitle: z.string().optional(),
  }),
})
export const collections = {
  posts: postsCollection,
}
