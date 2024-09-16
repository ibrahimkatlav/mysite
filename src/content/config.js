import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	schema: z.object({
	  title: z.string(),
	  description: z.string().optional(),
	  date: z.date().optional(),
	  updateDate: z.date().optional(),
	  image: z.string().optional(),
	  categories: z.array(z.string()).default(["all"]),
	  featured: z.boolean().optional(),
	  draft: z.boolean().optional(),
	  tarih: z.string().optional(),
	  guncellemetarihi: z.string().optional(),
	  arsiv: z.boolean().optional(),
	  extensions: ['.md', '.mdx'], // Include .mdx
	  
	}),
  });

export const collections = {
	post: postCollection,
};
