App.Views.PhotoCollection = Backbone.View.extend({
	tagName: 'div',

	render:function() {
		this.collection.each(function(photo){
			var photoView = new App.Views.PhotoView({model:photo});
			console.log(photoView.el);
			this.$el.append(photoView.render().el);
		}, this);
		return this;
	}
});