import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hobby',
  title: 'Hobby & Interest',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hobby Title',
      type: 'localeString',
      description: 'e.g. Muay Thai, Volley-ball',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name (Lucide React)',
      type: 'string',
      description: 'Find icons at https://lucide.dev/icons (Use PascalCase, e.g. "Gamepad2", "Swords", "ChefHat")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colSpan',
      title: 'Size (Columns Span)',
      type: 'number',
      description: 'Make it take 1 or 2 blocks of width.',
      options: {
        list: [
          { title: 'Normal (1 column)', value: 1 },
          { title: 'Wide (2 columns)', value: 2 },
        ],
      },
      initialValue: 1,
      validation: (Rule) => Rule.required(),
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
      title: 'title.en',
      subtitle: 'iconName',
    },
  },
})
