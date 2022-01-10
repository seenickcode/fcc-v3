export default {
    name: 'module',
    title: 'Module',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'thumbnail_url',
            title: 'Thumbnail URL',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'markdown',
        },
        {
            name: 'seq_number',
            title: 'Sequence Number',
            type: 'number',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'lessons',
            title: 'Lessons',
            type: 'array',
            of: [{ type: 'lesson' }],
        },
        // TODO how to query? this guide is hard to follow because
        // it doesn't show the schema and realistic situation (using _ref)
        // https://www.sanity.io/docs/how-queries-work
        // {
        //     name: 'lessons',
        //     title: 'Lessons',
        //     type: 'array',
        //     of: [{ type: 'reference', to: [{ type: 'lesson' }] }],
        // },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}
