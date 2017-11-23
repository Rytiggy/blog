import Ember from 'ember';

export default Ember.Controller.extend({
	post: '',
	isEditing: false,
	postId: '',
	allPost:false,
	init: function () {
		this._super();

		Ember.run.schedule("afterRender",this,function() {


			if(localStorage.getItem("post") !== null){
				let post = JSON.parse(localStorage.getItem("post"));
				this.set('title' , post.title )
				this.set('dateCreated' , post.dateCreated )
				this.set('model.photos' , post.photos)
				this.set('blogPost' , post.blogPost)
				this.set('model.steps' , post.steps )
				this.set('model.ingredients' , post.ingredients )
				this.set('model.tags' , post.tags )
				this.set('prepTime' , post.prepTime)
				this.set('cookTime' , post.cookTime )
				this.set('recipeYield' , post.recipeYield)
			}

			$(document).on('input', 'input:text', ()=> {

				let post = {
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

				}
				localStorage.setItem("post", JSON.stringify(post));
				post = localStorage.getItem("post");

			});
		});
	},



	actions: {
		newPost() {
			this.set('allPost' , false)

		},
		clearFields() {
			if (confirm("Are you sure you want to clear all input fields?") == true ) {
				this.set('title' , '' )
				this.set('dateCreated' , '' )
				this.set('model.photos' , [])
				this.set('blogPost' , '')
				this.set('model.steps' , [] )
				this.set('model.ingredients' , [] )
				this.set('model.tags' , [] )
				this.set('prepTime' , '')
				this.set('cookTime' , '' )
				this.set('recipeYield' , '')	

				this.set('isEditing' , false)
				this.set('postId', '')		
			}
			else {
				
			}

		},
		toggleEditPost(){
			this.set('post' , this.store.findAll('post'))
			this.set('allPost' , true)
		},
		editPost(id){
			this.set('allPost' , false)
			let post = this.get('store').peekRecord('post', id);
			//set all Text on page
			this.set('title' , post.get('title') )
			this.set('dateCreated' , post.get('dateCreated') )
			this.set('model.photos' , post.get('photos') )
			this.set('blogPost' , post.get('blogPost') )
			this.set('model.steps' , post.get('steps') )
			this.set('model.ingredients' , post.get('ingredients') )
			this.set('model.tags' , post.get('tags') )
			this.set('prepTime' , post.get('prepTime') )
			this.set('cookTime' , post.get('cookTime') )
			this.set('recipeYield' , post.get('recipeYield') )
			
			this.set('isEditing' , true)
			this.set('postId', id)



		},
		deletePost(id){
			var answer = prompt('Type "delete" to delete the post', ' '); 
			if(answer === 'delete'){
				this.store.findRecord('post', id, { backgroundReload: false }).then(function(post) {
					post.destroyRecord(); 
				});
			}else{
				console.log('Post not deleted')
			}
		},
		submit() {

			//Update a post
			if(this.get('isEditing')){
				let postId = this.get('postId') 
				this.store.findRecord('post', postId).then((post)=> {
					console.log('postId' , postId)
					post.set('title', this.get('title'))
					post.set('author', "Kristina R King")
					post.set('dateCreated', this.get('dateCreated'))
					post.set('photos', this.get('model.photos'))
					post.set('blogPost', this.get('blogPost'))
					post.set('steps', this.get('model.steps'))
					post.set('ingredients', this.get('model.ingredients'))
					post.set('tags', this.get('model.tags'))
					post.set('prepTime', this.get('prepTime'))
					post.set('cookTime', this.get('cookTime'))
					post.set('recipeYield', this.get('recipeYield'))

					post.save(); 
				});
			} else {// create a new post
				let newPost = this.store.createRecord('post', {
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
			}

			localStorage.removeItem('post');


		}
	}
});
