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
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Email address where contact forms will be sent',
    }),
    defineField({
      name: 'cvFrUrl',
      title: 'CV (French) URL or Path',
      type: 'string',
      description: 'Link to your French CV (e.g. /cv-fr.pdf). Leave empty to hide the button.',
    }),
    defineField({
      name: 'cvEnUrl',
      title: 'CV (English) URL or Path',
      type: 'string',
      description: 'Link to your English CV (e.g. /cv-en.pdf). Leave empty to hide the button.',
    }),
  ],
})
