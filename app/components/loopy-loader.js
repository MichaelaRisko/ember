import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    loadData() {
      const newStart = moment(new Date(this.get('start_date'))).format('MM-DD-YYYY ') + this.get('start_time');
      const newEnd = moment(new Date(this.get('end_date'))).format('MM-DD-YYYY ') + this.get('end_time');
      const url = `/${newStart}/to/${newEnd}`;
      // this.transitionTo(url);
      // this.sendAction("action", url);
      this.get('load')(url);
    },
  },
});
