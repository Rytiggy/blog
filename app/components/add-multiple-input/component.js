import Ember from 'ember';

export default Ember.Component.extend({
	steps: false,
	ingredients: false,
	tags: false,
	singleVal:'',

	didRender() {
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
			this.model[this.get('type')].addObject(this.get('singleVal'));
			this.set('singleVal','')
		}
	}
});
