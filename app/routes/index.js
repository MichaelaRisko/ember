import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  beforeModel() {
    // this.transitionTo('production', "yesterday", "today");
    this.transitionTo('production', 
      moment(new Date()).format('MM-DD-YYYY') + ' 05:00',
      moment(new Date()).format('MM-DD-YYYY') + ' 15:00'
    );
  }
});
