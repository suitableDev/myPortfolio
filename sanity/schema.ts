import { type SchemaTypeDefinition } from 'sanity'
import profile from './schemas/profile'
import links from './schemas/links'
import intro from './schemas/intro'
import about from './schemas/about'
import projects from './schemas/projects'
import skills from './schemas/skills'
import experience from './schemas/experience'
import contact from './schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    links,
    intro, 
    about, 
    projects, 
    skills, 
    experience, 
    contact
  ],
}
