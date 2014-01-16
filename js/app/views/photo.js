App.Views.PhotoView = Backbone.View.extend({
	tagName: 'div',
	className: 'flickr',

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html("<img class=\"flickr-img\" src=\""+this.model.get('url')+"\">");
		return this;
	}

});