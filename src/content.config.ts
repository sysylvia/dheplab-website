import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('DHEPLab'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // For Substack cross-posts
    substackUrl: z.string().url().optional(),
  }),
});

// Team members collection
const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    bio: z.string(),
    order: z.number().default(99),
    links: z.object({
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
      scholar: z.string().url().optional(),
      orcid: z.string().url().optional(),
    }).optional(),
    education: z.array(z.string()).optional(),
    active: z.boolean().default(true),
  }),
});

// Research areas/projects collection
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['clinical-ai', 'value-based-care', 'digital-health-policy']),
    status: z.enum(['active', 'completed', 'planned']).default('active'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    fundingSources: z.array(z.string()).optional(),
    collaborators: z.array(z.string()).optional(),
    publications: z.array(z.string()).optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
  }),
});

// Publications collection (auto-synced from Semantic Scholar)
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    abstract: z.string().optional(),
    citation: z.string().optional(),
    semanticScholarId: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// News/announcements collection
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    category: z.enum(['award', 'publication', 'event', 'media', 'announcement']).optional(),
  }),
});

export const collections = {
  blog,
  team,
  research,
  publications,
  news,
};
