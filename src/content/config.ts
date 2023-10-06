import { defineCollection, z } from 'astro:content'

export const collections = {
    event: defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.date(),
            summary: z.string().max(200),
            image: z.string()
        })
    })
}