import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    //return Ember.$.getJSON("/data/production.json"...).then(...);
    return this.modelFor('production').findBy('DimensionID', parseInt(params.dimension_id))
  }
});
