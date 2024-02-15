import {defineType} from 'sanity';

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Some text',
            type: 'array',
            of: [{ type: 'block' }]
        },
  ]
});