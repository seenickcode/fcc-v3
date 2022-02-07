import sanityClient from "@sanity/client";
import type { Course, Post } from "../../cms/schema";

export const sanity = sanityClient({
  projectId: import.meta.env.PUBLIC_SANITY_ID.toString(),
  dataset: import.meta.env.PUBLIC_SANITY_DATASET.toString(),
  apiVersion: "2021-07-23",
  useCdn: true,
});

export const blogPosts = {
  async all(): Promise<Post[]> {
    const q = "*[_type == 'post'] | order(_createdAt desc) {slug, title}";
    try {
      return await sanity.fetch<Post[]>(q);
    } catch (err) {
      console.error("sanity failed fetching posts", err);
      return [];
    }
  },
  async allSlugs(): Promise<Post[]> {
    const q = "*[_type == 'post']  | order(_createdAt desc) {slug}";
    try {
      return await sanity.fetch<Post[]>(q);
    } catch (err) {
      console.error("sanity failed fetching posts", err);
      return [];
    }
  },
  async fetchBySlug(slug: string): Promise<Post> {
    const q = `*[_type == 'post' && slug.current == '${slug}'][0]`;
    try {
      return await sanity.fetch<Post>(q);
    } catch (err) {
      console.error("sanity failed fetching post by slug", err);
      return null;
    }
  },
};
