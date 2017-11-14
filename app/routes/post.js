import Ember from 'ember';




export default Ember.Route.extend({

	model(params) {
		console.log(params.post_id ,  this.get('store').findAll('post'))

        return this.get('store').findRecord('post', params.post_id).then((result)=>{
            console.log(result)
        });
	}
});
