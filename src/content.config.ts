import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    eyebrow: z.string().default('Case study'),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
    tags: z.array(z.string()),
    cardTags: z.array(z.string()),
    cardDescription: z.string(),
    role: z.string(),
    focus: z.string(),
    status: z.string(),
    inquirySubject: z.string(),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative().default(0)
  })
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    metaDescription: z.string(),
    theme: z.string(),
    order: z.number().int().nonnegative().default(0)
  })
});

export const collections = { projects, writing };
