import {defineType} from 'sanity';

export default defineType({
  name: "imageTest",
  title: "Image test",
  type: "document",
  fields: [
      {
          name: 'pic',
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