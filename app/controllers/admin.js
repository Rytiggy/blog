import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		submit() {

			// var newPost = this.store.createRecord('post', {
			// 	title: 'World Famous Banana Bread',
			// 	author: "Kristina R King",
			// 	dateCreated: "Jan 25 2015",
			// 	photos: 'https://image.ibb.co/jbbj0w/maxresdefault.jpg',
			// 	blogPost: "Banana bread is a type of bread made from mashed bananas. It is often a moist, sweet, cake-like quick bread; however, there are some banana bread recipes that are traditional-style raised breads. This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
			// 	steps: {
			// 		0: 'Preheat the oven to 350 degrees.',
			// 		1: 'Mix in the ingredients in a bowl.',
			// 		2: 'add the flour last.',
			// 		3: 'Pour the mixture into a loaf pan and bake for one hour.'
			// 	},
			// 	ingredients: {
			// 		0: {amount:'3 or 4',ingredient: 'Ripe bananas, smashed'},
			// 		1: {amount:'1',ingredient: 'Egg'},
			// 		2: {amount:'3/4 cup',ingredient: 'sugar'}
			// 	},
			// 	tags: {
			// 		0: 'vegetarian'
			// 	},
			// 	prepTime: "15 minutes",
			// 	cookTime: "1 hour",
			// 	recipeYield: "1 loaf"

			// });
			// newPost.save();

			console.log('fff' , this.get('model.steps') , this.get('model.ingredients'), this.get('model.tags'))
		}
	}
});
