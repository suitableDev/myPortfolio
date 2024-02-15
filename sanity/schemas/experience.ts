import { defineType } from 'sanity';

export default defineType({
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
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      options: {
        storeSvg: true
      }
    },
    {
        name: 'date',
        title: 'date',
        type: 'string',
      },
  ],
});
