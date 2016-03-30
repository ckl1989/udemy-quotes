import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions:{
        postQuotes : function(){
              var txt= this.get('quoteText');

              this.get('store').findRecord('user',1).then((user)=> {
                  var quoteData={
                    text:txt,
                    user:user,
                    createdDate: new Date()
                  };

                      var newQuote = this.get('store').createRecord('quote',quoteData);
                      return newQuote.save();
                    });
            }
        }
});
