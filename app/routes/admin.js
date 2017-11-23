import Ember from 'ember';

// var transitionAfterConfirmation = function(target){
//   var defaultEvent = Ember.Route.transitionTo(target),
//       event = function(stateManager, context){
//           if( confirm("Really go?")){
//               defaultEvent(stateManager,context);
//           }
//       };

//   event.transitionTarget = target;

//   return event;
// };
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
	},


	// async afterModel(post) {
	// 			console.log('DDDD' ,this.get('post'))

	// 	// this.set('post', (await post));
	// 	// console.log(this.get('post'))
	// }

});
