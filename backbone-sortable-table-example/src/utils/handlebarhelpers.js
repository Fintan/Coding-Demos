(function(Handlebars) {

	Handlebars.registerHelper('addIcon', function(media_type, id, viewable) {
		
		var rtnStr = "";
		
		if(media_type.toLowerCase() === "flash") {
			rtnStr = "<img data-viewable='"+ viewable +"' id='"+ id +"' src='imgs/flash.png'>";
		}else if(media_type.toLowerCase() === "html") {
			rtnStr = "<img src='imgs/HTML5.png'>";
		}else if(media_type.toLowerCase() === "pdf") {
			rtnStr = "<img src='imgs/pdf.png'>";
		}
		return new Handlebars.SafeString(rtnStr);
		
	});



	Handlebars.registerHelper('mediaItemsRows', function(items, options) {
		var out = "";

		for (var i = 0, l = items.length; i < l; i++) {
			out = out + '<tr>';
			out = out + '<td>' + items[i].resource_type + '</td>';
			out = out + '<td>' + items[i].media_type + '</td>';
			out = out + '<td>' + items[i].display_title + '</td>';
			out = out + '<td>' + items[i].language + '</td>';
			out = out + '</tr>';
		}

		return out;
	});



	//Handlebars helpers
	//https://gist.github.com/1468937
	// debug helper
	// usage: {{debug}} or {{debug someValue}}
	// from: @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
	Handlebars.registerHelper("debug", function(optionalValue) {
		console.log("Current Context");
		console.log("====================");
		console.log(this);

		if (optionalValue) {
			console.log("Value");
			console.log("====================");
			console.log(optionalValue);
		}
	});


	//  return the first item of a list only
	// usage: {{#first items}}{{name}}{{/first}}
	Handlebars.registerHelper('first', function(context, block) {
		return block(context[0]);
	});



	// a iterate over a specific portion of a list.
	// usage: {{#slice items offset="1" limit="5"}}{{name}}{{/slice}} : items 1 thru 6
	// usage: {{#slice items limit="10"}}{{name}}{{/slice}} : items 0 thru 9
	// usage: {{#slice items offset="3"}}{{name}}{{/slice}} : items 3 thru context.length
	// defaults are offset=0, limit=5
	// todo: combine parameters into single string like python or ruby slice ("start:length" or "start,length")
	Handlebars.registerHelper('slice', function(context, block) {
		var ret = "",
			offset = parseInt(block.hash.offset, 10) || 0,
			limit = parseInt(block.hash.limit, 10) || 5,
			i = (offset < context.length) ? offset : 0,
			j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

		for (i, j; i < j; i++) {
			ret += block(context[i]);
		}

		return ret;
	});

}(window.Handlebars));
