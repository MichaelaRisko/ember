import Ember from 'ember';

export default Ember.Object.extend({
  boards: Ember.computed('BoardsSum', function() {
    return this.get('BoardsSum');
  }),
  boardsfeet: Ember.computed.alias('BoardFeetSum')
});
