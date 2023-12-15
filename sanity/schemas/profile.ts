import { defineType } from 'sanity';

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "profile",
      title: "Profile Name",
      type: "string",
    },
    {
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
              title: 'Alt text',
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
    },
    {
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
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
      },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'location',
                  title: 'Location',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'array',
                  of: [{ type: 'block' }],
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'iconPicker',
                  options: {
                    storeSvg: true,
                  },
                },
                {
                  name: 'date',
                  title: 'Date',
                  type: 'string',
                  // could change to date type down the line...
                },
              ],
            },
          ],
        },
      ],
    }
    
    
  ]
});
