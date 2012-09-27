define(["lodash"], function(_){
	
	var utils = {};
	
	utils.existsAndNotNull = function(object, property) {
		
		if(_.has(object, property)) {
			var prop = object[property];

			if(_.isString(prop) && !_.isNull(prop)) {
				return true;
			}else if(_.isNumber(prop) && !_.isNaN(prop)) {
				return true;
			}else if(_.isArray(prop) && prop.length > 0) {
				return true;
			}
			
		} 
		
		return false;
		
	}; 
	
	utils.containsAny = function(array1, array2) {
		
		var match = false;
		
		_.each(array1, function(val){ 
			if(_.indexOf(array2, val) > -1) {
				match = true;
			}
		
		});
		
		return match;
	};
	
	utils.objectToString = function(object) {
		
		var str = "{";
		var i;
		for (i in object) {

			if (object.hasOwnProperty(i)) {
				str += " " + i + "->" + object[i];
			}
		}
		
		str += " }";
		
		return str;
	};
	
	utils.objectsArrayToString = function(objectArray) {
		
		var str = "\n[\n";
		
		_.each(objectArray, function(val){
			str += "\n\t" +  utils.objectToString(val);
		});
		
		str += "\n]";
		
		return str;
	};
	
	return utils;
	
});