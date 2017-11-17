import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		editPost(postID) {
			this.attrs.editPost(postID)
		},
		deletePost(postID) {
			this.attrs.deletePost(postID)
			console.log(postID)
		}

	}
});
