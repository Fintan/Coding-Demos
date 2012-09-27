define(["lodash", "objectUtil"], function(_, util) {
	
	var mediaQuery = {
		
		// all available checks
		types:{}
	};
	
	mediaQuery.types.BookQuery = {
		
		data:{},//isbn, title, author, etc
		
		//item is an object literal that needs to have type and optionally; isbn, title, author, etc
		find: function(item , exact){
			
			var data = mediaQuery.types.BookQuery.data;
			
			if (!item.hasOwnProperty("type")) { 
				console.log("Warning: No mediaItem type specified for " + util.objectToString(item));
				return false;
			}

			if (item.type === "Book") {
				
				if(_.isUndefined(exact) || exact === true) {
					
					var authorsMatch = util.existsAndNotNull(data, "author") && util.existsAndNotNull(item, "author") ? util.containsAny(item.author, data.author) : true;
					var isbnMatch = util.existsAndNotNull(data, "isbn") ? item.isbn === data.isbn : true;
					var titleMatch = util.existsAndNotNull(data, "title") ? item.title === data.title : true;
					var publisherMatch = util.existsAndNotNull(data, "publisher") ? item.publisher === data.publisher : true;
					var allNull = !util.existsAndNotNull(data, "title") && !util.existsAndNotNull(data, "isbn") && !util.existsAndNotNull(data, "publisher") && !util.existsAndNotNull(data, "author");

					return titleMatch && isbnMatch && publisherMatch && authorsMatch && !allNull;
				
				} else {
					
					return item.title === data.title || item.isbn === data.isbn  || item.publisher === data.publisher || item.authors !== null && data.authors !== null && util.containsAny(item.author, data.author);
					
				}
				
			}else {
				
				return false;
				
			}
			
		}
	};
	
	mediaQuery.types.CdQuery = {
		
		data:{},
		
		//item is an object literal that needs to have type and optionally; title, artist, etc
		find: function(item , exact){

			var data = mediaQuery.types.CdQuery.data;
			
			if (!item.hasOwnProperty("type")) { 
				console.log("Warning: No mediaItem type specified for " + item);
			}

			if (item.type === "Cd") {

				if(_.isUndefined(exact) || exact === true) {
					
					var albumMatch = util.existsAndNotNull(data, "album") ? item.album === data.album : true;
					var artistsMatch = util.existsAndNotNull(data, "artists") && util.existsAndNotNull(item, "artists") ? util.containsAny(item.artists, data.artists) : true;
					var yearMatch = util.existsAndNotNull(data, "year") ? item.year === data.year : true;
					var allNull = !util.existsAndNotNull(data, "album") && !util.existsAndNotNull(data, "artists") && !util.existsAndNotNull(data, "year");
					
					//console.log(util.objectToString(item) +" >> albumMatch: "+albumMatch + " yearMatch: "+yearMatch+ " artistsMatch: "+ artistsMatch + " allNull: "+allNull );
					return albumMatch && yearMatch && artistsMatch && !allNull;
					
				}else {
					
					return item.album === data.album || item.year === data.year || item.artists !== null && data.artists !== null && util.containsAny(item.artists, data.artists);
					
				}
				
			}
			
			return false;
			
		}

	};
	
	mediaQuery.types.DvdQuery = {
		
		data:{},
		
		//item is an object literal that needs to have type and optionally; title, director
		find: function(item , exact){
			
			var data = mediaQuery.types.DvdQuery.data;

			if (!item.hasOwnProperty("type")) { 
				console.log("Warning: No mediaItem type specified for " + item);
			}

			if (item.type === "Dvd") {
				
				if(_.isUndefined(exact) || exact === true) {
					
					var movieNameMatch = util.existsAndNotNull(data, "title") ? data.title === item.title : true;
					var starringMatch = util.existsAndNotNull(data, "starring") && util.existsAndNotNull(item, "starring") ? util.containsAny(data.starring, item.starring) : true;
					var directorMatch = util.existsAndNotNull(data, "director") ? data.director === item.director : true;
					var yearMatch = util.existsAndNotNull(data, "year") ? item.year == data.year : true;
					var allNull = !util.existsAndNotNull(data, "title") && !util.existsAndNotNull(data, "director") && !util.existsAndNotNull(data, "year") && !util.existsAndNotNull(data, "starring");

					//console.log(util.objectToString(item) +" >> movieNameMatch: "+movieNameMatch + " yearMatch: "+yearMatch+ " directorMatch: "+ directorMatch + " starringMatch: "+starringMatch+ " allNull: "+allNull );
					return movieNameMatch && directorMatch && yearMatch && starringMatch && !allNull;
					
				}else {
					
					return item.title === data.title || item.director === data.director || item.year === data.year || data.starring !== null && item.starring !== null && util.containsAny(item.starring, data.starring);
					
				}
			}
			
			return false;
			
		}

	};
	
	mediaQuery.types.SimpleQuery = {
		
		data:{},
		
		//item is an object literal that needs to have type and optionally; title, director
		find: function(item , exact){
			
			var data = mediaQuery.types.SimpleQuery.data;

			if (!item.hasOwnProperty("type")) { 
				console.log("Warning: No mediaItem type specified for " + item);
			}

			if (item.type === "Book") {
				
				var bookQuery = mediaQuery.types.BookQuery;

				bookQuery.data = {
					isbn:Number(data),
					title:data,
					author:!_.isNull(data) ?data.split(","):null,
					publisher:data
				};
				
				return bookQuery.find(item, false);
				
			}else if (item.type === "Cd") {
				
				var cdQuery = mediaQuery.types.CdQuery;

				cdQuery.data = {
					album:data,
					artists:!_.isNull(data) ?data.split(","):null,
					year:Number(data)
				};
				
				return cdQuery.find(item, false);
				
			}else if (item.type === "Dvd") {
				
				var dvdQuery = mediaQuery.types.DvdQuery;

				dvdQuery.data = {
					title:data,
					director:data,
					starring:!_.isNull(data) ?data.split(","):null,
					year:Number(data)
				};
				
				return dvdQuery.find(item, false);
				
			}else {
				
				return false;
				
			}
			
			return false;
			
		}
	};
	
	return mediaQuery;
	
});