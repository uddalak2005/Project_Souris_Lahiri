export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            description: 'Describe the image for accessibility',
        },
    ],
    // Singleton: Only one document allowed
    __experimental_actions: ['update', 'publish'],
}