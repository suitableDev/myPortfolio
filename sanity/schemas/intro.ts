import {defineType} from 'sanity';

export default defineType({
  name: "intro",
  title: "Intro",
  type: "document",
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
                name: 'alt',
                title:'Alt text',
                type: 'string',
            }
          ]
        },
        {
            name: 'text',
            title: 'Some text',
            type: 'array',
            of: [{ type: 'block' }]
        }
  ]
});