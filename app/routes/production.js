import Ember from 'ember';
import Production from '../models/production';
import moment from 'moment';
const Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({

  model(params){
  /*
  return{
    "ProductName":"Ponderosa",
    "DimensionName":"1\" X4\" X 14'",
    "BoardsSum": 20,
    "BoardFeetSum": 10000
  }
  */
  this.set('params', params);
  return new Promise(function(resolve){
    setTimeout(function(){
      let data = Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
      data.then(function(data){
        let records = [];
        data.forEach(function(item){
          records.push( Production.create(item));
        });
        resolve(records);
      })
    }, 400);
  });
},

setupController(controller, model) {
  this._super(controller, model);
  let params = this.get('params');

  controller.set('start', params.start);
  controller.set('end', params.end);

  controller.set('start_date', moment(new Date(params.start)).format('MM/DD/YYYY'));
  controller.set('end_date', moment(new Date(params.end)).format('MM/DD/YYYY'));
  controller.set('start_time', moment(new Date(params.start)).format('HH:mm'));
  controller.set('end_time', moment(new Date(params.end)).format('HH:mm'));
},

actions: {
  loadData: function(){
    this.transitionTo(url);
  }
}


});
