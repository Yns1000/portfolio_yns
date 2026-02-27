import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'localeString',
      description: 'e.g. Software Engineer, Apprenti Ingénieur',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Lens, France'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isCurrent',
      title: 'I currently work here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
      hidden: ({ document }) => document?.isCurrent === true,
    }),
    defineField({
      name: 'description',
      title: 'Description & Achievements',
      type: 'localeText',
      description: 'Use basic markdown (dashes -) to make bullet points like in Projects.',
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'whiteBackground',
      title: 'White Background on Logo',
      type: 'boolean',
      description: 'Turn this on if the logo text is black and invisible in dark mode.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Helps ordering the timeline manually. Higher number = appears first.',
      initialValue: 0
    }),
  ],
  preview: {
    select: {
      title: 'role.en',
      subtitle: 'company',
      media: 'logo',
    },
  },
})
