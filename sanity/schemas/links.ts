import { defineType } from 'sanity';

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: 'hash',
        title: 'Hash',
        type: 'string',
      },
  ],
});
