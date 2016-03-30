import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login:function(){
            var username = this.get('username');
            var password = this.get('password');

            if (username==='john@ember.com' && password==='pass'){
                this.transitionToRoute('home');
            }
            else{
                this.set('errorMsg', 'Invalid username/password');
            }
        }
    }
});
