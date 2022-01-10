export default {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'blurb',
            title: 'Blurb',
            type: 'string',
        },
        {
            name: 'level',
            title: 'Level',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'markdown',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'stripe_test_sku',
            title: 'Stripe Test SKU',
            type: 'string',
        },
        {
            name: 'stripe_prod_sku',
            title: 'Stripe Prod SKU',
            type: 'string',
        },
        {
            name: 'theme_color',
            title: 'Theme Color',
            type: 'string',
        },
        {
            name: 'theme_accent_color',
            title: 'Theme Accent Color',
            type: 'string',
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
        {
            name: 'modules',
            title: 'Modules',
            type: 'array',
            of: [{ type: 'module' }],
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
    ],

    preview: {
        select: {
            title: 'name',
        },
    },
}
