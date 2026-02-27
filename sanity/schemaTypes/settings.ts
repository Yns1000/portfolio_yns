import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings & Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Portfolio Settings',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Your GitHub profile link',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      description: 'Your LinkedIn profile link',
    }),
  ],
})
