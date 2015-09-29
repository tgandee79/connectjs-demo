import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('listing');
  this.route('detail', function() {
    this.route('edit');
  });
});

export default Router;
