import { defineType } from 'sanity';

export default defineType({
  name: 'headings',
  title: 'Headings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  {
    name: 'description',
    title: 'Description',
    type: 'array',
    of: [{ type: 'block' }],
  },
  ],
});
