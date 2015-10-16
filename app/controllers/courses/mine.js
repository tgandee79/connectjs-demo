import Ember from 'ember';

export default Ember.Controller.extend({
  filteredCourses: function(){
    return this.get('model').filterBy('is_mine', true);
  }.property('model')
});
