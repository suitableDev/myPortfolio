import { defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },
  ],
});
