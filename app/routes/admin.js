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
	// async afterModel(post) {
	// 			console.log('DDDD' ,this.get('post'))

	// 	// this.set('post', (await post));
	// 	// console.log(this.get('post'))
	// }

});
