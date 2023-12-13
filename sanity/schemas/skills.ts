import { defineType } from 'sanity';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
});
