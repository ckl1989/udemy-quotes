import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        var foundModel = Ember.RSVP.hash({
            user: this.store.findRecord('user', 1),
            quotes: this.store.findAll('quote')
        });
        return foundModel;
    }
});
