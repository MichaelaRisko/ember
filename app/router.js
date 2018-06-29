import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('production', {path: "/:start/to/:end"}, function() {
    this.route('dimension', {path: "/dimension/:dimension_id"});
  });
});

export default Router;
