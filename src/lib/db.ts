import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Course, Post } from "../../cms/schema";

const isProd = JSON.parse(import.meta.env.PUBLIC_IS_PROD.toString());

export const sanity = sanityClient({
  projectId: import.meta.env.PUBLIC_SANITY_ID.toString(),
  dataset: import.meta.env.PUBLIC_SANITY_DATASET.toString(),
  apiVersion: "2021-07-23",
  useCdn: isProd,
});

export const sanityBuilder = imageUrlBuilder(sanity);

export const courses = {
  async all(): Promise<Course[]> {
    const q =
      "*[_type == 'course'] | order(seq_number) {slug, name, blurb, thumbnail_url, description, level, price, modules}"; // , lessons}";
    try {
      return await sanity.fetch<Course[]>(q);
    } catch (err) {
      console.log("sanity failed fetching all courses", err);
      return [];
    }
  },
  async allSlugs(): Promise<Course[]> {
    const q = "*[_type == 'course']  | order(seq_number) {slug}";
    try {
      return await sanity.fetch<Course[]>(q);
    } catch (err) {
      console.error("sanity failed fetching courses", err);
      return [];
    }
  },
  async fetchBySlug(slug: string): Promise<Course> {
    const q = `*[_type == 'course' && slug.current == '${slug}'][0]`;
    try {
      const course = await sanity.fetch<Course>(q);
      if (!course) {
        throw new Error(`sanity course with slug ${slug} not found`);
      }
      return course;
    } catch (err) {
      console.log("sanity failed fetching course", err);
      return null;
    }
  },
};
