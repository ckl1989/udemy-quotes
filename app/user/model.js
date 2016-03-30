import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr('string'),
    //numberOfQuotes: DS.attr('number'),
    //numberOfFollowing: DS.attr('number'),
    //numberOfFollowers: DS.attr('number'),

    numberOfQuotes: Ember.computed('quotes', function(){
       return this.get('quotes').get('length'); 
    }),

    numberOfFollowing: Ember.computed('following', function(){
       return this.get('following').get('length'); 
    }),

    numberOfFollowers: Ember.computed('followers', function(){
       return this.get('followers').get('length'); 
    }),

    aboutMe: DS.attr('string'),
    quotes: DS.hasMany('quote', {async:true}),

    following: DS.hasMany('user', {inverse: 'followers', async:true}),
    followers: DS.hasMany('user', {inverse: 'following', async:true})
});
