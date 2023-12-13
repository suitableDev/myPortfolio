import { defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },
  ],
});
