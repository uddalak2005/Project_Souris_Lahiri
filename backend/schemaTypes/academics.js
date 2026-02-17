export default {
    name: 'academics',
    title: 'Academics',
    type: 'document',
    fields: [
        {
            name: 'degree',
            title: 'Degree / Course',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'institution',
            title: 'Institution',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'yearStart',
            title: 'Year Start',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'yearEnd',
            title: 'Year End',
            type: 'string',
            initialValue: 'Present',
        },
    ],
}
