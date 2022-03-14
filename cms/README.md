# Sanity.io

## Making schema changes

Any updates to sanity.io schemas will need codegen, which will re-generate `cms/schema.ts`. More info [here](https://www.sanity.io/plugins/sanity-codegen)

1. Edit `schemas/schema
2. In the project root, run `npx sanity-codegen`
3. Ensure the new changes look ok in the studio: `cd cms && sanity start`
4. To deploy the schema, run `sanity deploy`

#### Additional Plugins/Features Used

- [Markdown plugin](https://www.sanity.io/plugins/sanity-plugin-markdown)
- [Data Studio Spaces](https://www.sanity.io/docs/spaces)
- [Codegen](https://www.sanity.io/plugins/sanity-codegen) (we use this at root project level, not via the `cms` dir)

Use your Github login.

[Manage projects](https://www.sanity.io/manage)

You can either run `sanity start` or use [Sanity Studio](https://fluttercrashcourse.sanity.studio/desk) can be used to manage content.

[Query playground](https://www.sanity.io/docs/the-vision-plugin) how-to.

#### Example Query

Input the following at [](https://groq.dev/):

`https://o8uzmguj.api.sanity.io/v1/data/query/production?query=*[_type == 'post']`

[Query cheat sheet](https://www.sanity.io/docs/query-cheat-sheet)
