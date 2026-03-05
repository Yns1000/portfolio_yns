import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'palette',
  title: 'Color Palette',
  type: 'document',
  fieldsets: [
    { name: 'light', title: 'Light Mode Colors', options: { collapsible: true, collapsed: false } },
    { name: 'dark', title: 'Dark Mode Colors', options: { collapsible: true, collapsed: false } }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Palette Name (e.g. Cyberpunk, Minimalist)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    
    // LIGHT MODE
    defineField({ name: 'light_background', title: 'Background', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_foreground', title: 'Foreground (Text)', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_primary', title: 'Primary', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_primary_foreground', title: 'Primary Foreground', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_muted', title: 'Muted', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_muted_foreground', title: 'Muted Foreground', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_border', title: 'Border', type: 'color', fieldset: 'light' }),
    defineField({ name: 'light_card', title: 'Card Background', type: 'color', fieldset: 'light' }),
    
    // DARK MODE
    defineField({ name: 'dark_background', title: 'Background', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_foreground', title: 'Foreground (Text)', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_primary', title: 'Primary', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_primary_foreground', title: 'Primary Foreground', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_muted', title: 'Muted', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_muted_foreground', title: 'Muted Foreground', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_border', title: 'Border', type: 'color', fieldset: 'dark' }),
    defineField({ name: 'dark_card', title: 'Card Background', type: 'color', fieldset: 'dark' }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'light_primary.hex',
    },
  },
})
