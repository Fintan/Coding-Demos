define(["lodash", "objectUtil"], function(_, ObjectUtil) {
	
	var mediaShelf = {
		
		library: [],
		
		addItem: function(item) {
			
			if (!item.hasOwnProperty("type")) { 
				console.log("Warning: No mediaItem type specified for " + ObjectUtil.objectToString(item));
				return false;
			}
			
			mediaShelf.library.push(item);
			
			return true;
			
		},
		
		getItems: function(query, exact) {
			
			if (!query.hasOwnProperty("find") || typeof query.find !== "function") { 
				console.log("Warning: No 'find' method on query object");
				return [];
			}
			
			var result = [];
			
			_.each(mediaShelf.library, function(val){ 
				if(query.find(val)) {
					result.push(val);
				}
			});
			
			return result;
		}
		
	};
	
	return mediaShelf;
	
});