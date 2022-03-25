export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "meta_description",
      title: "SEO Meta Description",
      type: "string",
    },
    {
      name: "meta_keywords",
      title: "SEO Meta Keywords",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "body",
    },
  },
};
