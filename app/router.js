import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('post', { path: 'post/:id' });
  this.route('admin');
  this.route('about');
});

export default Router;
