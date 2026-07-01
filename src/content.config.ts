import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

export const collections = {
  projects: projectsCollection,
};
