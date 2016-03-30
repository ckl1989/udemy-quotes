import Ember from 'ember';

export default Ember.Component.extend({
    quoteSorting: ['id:desc'],
    sortedQuotes: Ember.computed.sort('quotes', 'quoteSorting')
});
