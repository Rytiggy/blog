import Ember from 'ember';


let posts = [
{
	post_id: 1,
	title: 'JALAPENO WAFFLES',
	photos: 'main_window.png',
	blogPost: 'blah this is a hugeeeee pos',
	steps: {
		text: 'some text about a step',
		text: 'some text about a step'

	},
	ingredients: {
		amount:'1 cup',
		ingredient: 'Tomato',
	}
},
{
	post_id: 2,
	title: 'Sample Konfabulator Widget',
	photos: 'main_window.png',
	blogPost: 'blah this is a hugeeeee pos',
	steps: {
		text: 'some text about a step'
	},
	ingredients: {
		amount:'1 cup',
		ingredient: 'Tomato',
	}
}
];

export default Ember.Route.extend({

	model() {
		this.get('store').createRecord('post')


		return this.get('store').findAll('post').then((result)=>{
            return {
                posts:posts
            };
        })
	}

});
