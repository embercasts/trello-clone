export default function(server) {
  server.create('card', {
    title: 'Hello Ember',
    list: 'Coding'
  });

  server.create('card', {
    title: 'Learn Ember',
    list: 'Coding'
  });

  server.create('card', {
    title: 'Check out Embercasts',
    list: 'Web'
  });
}
