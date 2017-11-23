import Ember from 'ember';

export default Ember.Component.extend({
	steps: false,
	ingredients: false,
	tags: false,
	photos: false,
	singleVal:'',
	secondVal:'',

	didRender() {
		if(this.get('type') === 'photos'){
			this.set('photos' , true)
		}
		if(this.get('type') === 'steps'){
			this.set('steps' , true)
		}
		if(this.get('type') === 'ingredients'){
			this.set('ingredients' , true)
		}
		if(this.get('type') === 'tags'){
			this.set('tags' , true)
		}
	},
	actions: {
		addField(){ //add a new field and clear out single inputvalue input field

			if(this.get('type') === 'photos' || this.get('type') === 'ingredients'){
				console.log(this.get('type'))
				// if(this.get('type') === 'photos' ){
				// 	this.set('secondVal', false)
				// }
				this.model[this.get('type')].addObject( { objectOne:this.get('singleVal') , objectTwo:this.get('secondVal') } );
				this.set('secondVal','')
			}else{
				this.model[this.get('type')].addObject(this.get('singleVal'));
			}

			this.set('singleVal','')
		},
		removeField(index , modelType , type){
			modelType.splice(index,1);
			if(modelType.length === 0){
				this.set(type , [] )
			}else{
				this.set(type , [] )
				this.set(type , modelType )
			}
		},
		checkRadio(index){

		}
	}
});


