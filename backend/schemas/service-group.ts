import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service-group',
  title: 'Service Group',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
