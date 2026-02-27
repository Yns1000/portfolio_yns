import { defineType, defineField } from 'sanity'

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
  { id: 'ar', title: 'Arabic' }
]

export const localeString = defineType({
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? undefined : 'translations'
    })
  )
})

export const localeText = defineType({
  title: 'Localized Text',
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'text',
      fieldset: lang.isDefault ? undefined : 'translations'
    })
  )
})
