import { type SchemaTypeDefinition } from 'sanity'
import profile from './schemas/profile'
import intro from './schemas/intro'
import about from './schemas/about'
import projectHeading from './schemas/projectHeading'
import projects from './schemas/projects'
import skills from './schemas/skills'
import experience from './schemas/experience'
import contact from './schemas/contact'
import experienceHeading from './schemas/experienceHeading'
import footer from './schemas/footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    intro, 
    about, 
    projectHeading,
    projects, 
    skills, 
    experienceHeading,
    experience, 
    contact,
    footer,
  ],
}
