import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cards', function() {
    this.route('detail', { path: '/:cardId/detail' });
  });
});

export default Router;
