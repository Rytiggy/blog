import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		editPost(postID) {
			console.log(postID)
			//this.sendAction('editPost', postID)

			this.attrs.editPost(postID)
		}

	}
});
