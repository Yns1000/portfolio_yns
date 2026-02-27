import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill / Language',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'localeString',
      description: 'e.g. Français, English, React',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Language', value: 'language' },
          { title: 'Technical', value: 'technical' },
          { title: 'Soft Skill', value: 'soft' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Proficiency Level',
      type: 'localeString',
      description: 'For languages: Natif, Bilingue, Intermédiaire. For tech: Expert, Advanced.',
    }),
    defineField({
      name: 'badge',
      title: 'Special Badge (Optional)',
      type: 'string',
      description: 'e.g. TOEIC 900+, Mention Bien',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'category',
    },
  },
})
