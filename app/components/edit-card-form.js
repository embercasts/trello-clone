import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(ev) {
      ev.preventDefault();

      this.onsubmit(this.list, this.title);
    }
  }
});
