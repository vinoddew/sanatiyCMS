export default {
  name: 'player',
  title: 'Player',
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
      type: 'string',
    },
    {
      name: 'game',
      title: 'Game',
      type: 'reference',
      to: {type: 'game'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],

  preview: {
    select: {
      title: 'name',
      game: 'game.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {game} = selection
      return Object.assign({}, selection, {
        subtitle: game && `by ${game}`,
      })
    },
  },
}
