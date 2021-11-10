export default {
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
  },
}
