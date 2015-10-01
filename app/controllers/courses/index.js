import Ember from 'ember';

export default Ember.Controller.extend({
  filter: true,
  actions: {
    filterCourse: function(shouldFilter){
      this.set('filter', shouldFilter);
    }
  }
});
