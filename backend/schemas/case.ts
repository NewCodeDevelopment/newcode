import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'case',
  title: 'Case',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'client',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short',
      title: 'Short',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'main',
      title: 'Main Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problem',
      title: 'Problem Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'reference',
      to: [{type: 'sector'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{type: 'service'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productUrl',
      title: 'Product URL',
      type: 'url',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'short',
      media: 'bannerImage',
    },
  },
})
