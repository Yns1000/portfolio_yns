import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import experience from './experience'
import education from './education'
import skill from './skill'
import association from './association'
import hobby from './hobby'
import { localeString, localeText } from './localeString'
import palette from './palette'

import settings from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, experience, education, skill, association, hobby, localeString, localeText, settings, palette],
}
