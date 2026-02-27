import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'association',
  title: 'Association / Social',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Your Role',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Link',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Link',
      type: 'url',
    }),
    defineField({
      name: 'donationUrl',
      title: 'Donation / Pot Commun Link',
      type: 'url',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color (Hex)',
      type: 'string',
      description: 'e.g. #0ea5e9 for Sky Blue. Defaults to theme primary if left empty.',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color (Hex)',
      type: 'string',
      description: 'e.g. #ffffff for White. Defaults to theme primary-foreground if left empty.',
    }),
  ],
})
