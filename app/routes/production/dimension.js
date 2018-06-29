import Ember from 'ember';

export default Ember.Route.extend({
  // mystore: Ember.inject.service(),
  model(params) {
    // return Ember.$.getJSON('/data/production.json'...).then(...);
    // return this.modelFor('production')
      // .findBy('DimensionID', parseInt(params.dimension_id));
    return this.get('mystore').dimension(params.dimension_id);
  }
});
