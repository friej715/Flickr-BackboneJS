App.Views.PhotoView = Backbone.View.extend({
	tagName: 'div',
	className: 'flickr',

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html("<a href=\"" + this.model.get('url') + "\"> <img class=\"flickr-img\" src=\""+this.model.get('thumb')+"\" alt=\"" + this.model.get('title') + "\"> </a>");
		return this;
	}

});