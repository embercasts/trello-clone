import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleForm() {
      this.set('showForm', true);
    },

    save(ev) {
      ev.preventDefault();

      this.onsubmit(this.list, this.title);
      this.set('title', '');
      this.set('showForm', false);
    }
  }
});
