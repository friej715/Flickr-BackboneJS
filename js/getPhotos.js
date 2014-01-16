var photoCollection = new App.Collections.PhotoCollection();

$.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=998875@N22&lang=en-us&format=json&jsoncallback=?", createPhotos);
var latestPhotos = new Array();

function createPhotos(data) {
	$.each(data.items, function(i, item){
		var sourceSquare = (item.media.m);
		var sourceSquare = (item.media.m).replace("_m.jpg", "_q.jpg");	
		var photo = new App.Models.Photo({url:sourceSquare});
		photoCollection.add(photo);
	});
	photoView.render();
}

var photoView = new App.Views.PhotoCollection({collection:photoCollection});
$("#main").append(photoView.render().el);