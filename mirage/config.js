export default function() {
  this.get('/cards');
  this.post('/cards');
  this.get('/cards/:id');
  this.patch('/cards/:id'); // or this.patch
  this.del('/cards/:id');

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
