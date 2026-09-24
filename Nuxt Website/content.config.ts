import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        dateCreated: z.date()
      }),
      indexes: [
        { columns: ['date'] },
      ]
    })
  }
});