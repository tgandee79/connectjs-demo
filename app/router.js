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
  this.route('message');
  this.route('thread');
  this.route('settings', function() {
    this.route('account');
    this.route('password');
  });
  this.route('profile');
  this.route('bootstrap', function(){
    this.route('grid');
    this.route('media-block');
    this.route('table');
    this.route('buttons');
    this.route('forms');
    this.route('cards');
    this.route('alerts');
    this.route('utilities');
    this.route('type');
    this.route('spacing');
  });

});

export default Router;
