import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table'],
  boards: Ember.computed.mapBy('model', 'boards'),
  total_boards: Ember.computed.sum('boards'),
  max_boards: Ember.computed.max('boards'),
  boardfeets: Ember.computed.mapBy('model', 'boardsfeet'),
  total_boardfeet: Ember.computed.sum('boardfeets'),
  max_boardfeet: Ember.computed.max('boardfeets'),
});
