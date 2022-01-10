export default {
    name: 'lesson',
    title: 'Lesson',
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
            name: 'video_id',
            title: 'Video ID',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'show_notes',
            title: 'Show Notes',
            type: 'markdown',
        },
        {
            name: 'public',
            title: 'Is Public',
            type: 'boolean',
        },
        {
            name: 'duration_mins',
            title: 'Duration (Minutes part)',
            type: 'number',
        },
        {
            name: 'duration_secs',
            title: 'Duration (Seconds part)',
            type: 'number',
        },
        {
            name: 'thumbnail_url',
            title: 'Thumbnail URL',
            type: 'string',
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
            title: 'title',
        },
    },
}
