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
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
        name: 'date',
        title: 'date',
        type: 'string',
        //could change to date type down the line...
      },

  ],
});
