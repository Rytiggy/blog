import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return {
			photos:[],
			steps:[],
			ingredients:[],
			tags:[],
			singleVal:'',
			secondVal:'',
		}
	}
});
