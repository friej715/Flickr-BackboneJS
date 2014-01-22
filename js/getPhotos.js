var photoCollection = new App.Collections.PhotoCollection();

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", createPhotos);
var latestPhotos = new Array();

function createPhotos(data) {
	$.each(data.items, function(i, item){
		var sourceSquare = (item.media.m);
		var sourceSquare = (item.media.m).replace("_m.jpg", "_q.jpg");	

		var sourceUrl = (item.link);

		var sourceTitle = (item.title);
		var photo = new App.Models.Photo({
			thumb: sourceSquare, 
			url:   sourceUrl, 
			title: sourceTitle});
		photoCollection.add(photo);
	});
	photoView.render();
}

var photoView = new App.Views.PhotoCollection({collection:photoCollection});
$("#main").append(photoView.render().el);