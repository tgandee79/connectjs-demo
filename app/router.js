import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('course');
  this.route('courses', function() {
    this.route('mine');
    this.route('all');
    this.route('materials', function() {
      this.route('edit');
    });
  });
  this.route('topics', function() {
    this.route('topic');
  });
  this.route('messages', function() {
    this.route('new');
  });
  this.route('thread');
  this.route('settings', function() {
    this.route('account');
    this.route('password');
  });
  this.route('profile');
});

export default Router;
