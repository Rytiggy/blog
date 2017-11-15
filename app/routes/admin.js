import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return {
			images:[],
			steps:[],
			photos:[],
			ingredients:[],
			tags:[],
			singleVal:"",
		}
	}
});
