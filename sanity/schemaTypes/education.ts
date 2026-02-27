import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree / Program',
      type: 'localeString',
      description: 'e.g. Master en Génie Informatique, Baccalauréat',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'school',
      title: 'School / Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isCurrent',
      title: 'I currently study here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      hidden: ({ document }) => document?.isCurrent === true,
    }),
    defineField({
      name: 'description',
      title: 'Description & Courses',
      type: 'localeText',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Higher number = appears first.',
      initialValue: 0
    }),
  ],
  preview: {
    select: {
      title: 'degree.en',
      subtitle: 'school',
    },
  },
})
