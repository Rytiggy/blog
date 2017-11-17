import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		submit() {

			var newPost = this.store.createRecord('post', {
				title: this.get('title'),
				author: "Kristina R King",
				dateCreated: this.get('dateCreated'),
				photos: this.get('model.photos'),
				blogPost: this.get('blogPost'),
				steps: this.get('model.steps'),
				ingredients: this.get('model.ingredients'),
				tags: this.get('model.tags'),
				prepTime: this.get('prepTime'),
				cookTime: this.get('cookTime'),
				recipeYield: this.get('recipeYield')

			});
			newPost.save();

			console.log(newPost)
		}
	}
});
