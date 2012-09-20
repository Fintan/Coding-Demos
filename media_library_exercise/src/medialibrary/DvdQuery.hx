package medialibrary;

using org.casalib.util.ArrayUtil;

class DvdQuery implements IMediaQuery {
	
	var query:Dvd;
	
	public function new(movieName:String=null, starring:Array<String>=null, director:String=null, year:Null<Int>=null) {
		
		query = new Dvd(movieName, starring, director, year);
		
	}
	
	public function find(item:IMediaItem, exact:Bool=true):Bool {
		
		if(Type.getClass(item) == Dvd) {
			
			var dvd:Dvd = cast(item, Dvd);
		
			return if(exact) {
				
				var movieNameMatch = query.movieName != null ? dvd.movieName == query.movieName : true;
				var starringMatch = query.starring != null && dvd.starring != null ? dvd.starring.containsAny(query.starring) : true;
				var directorMatch = query.director != null ? dvd.director == query.director : true;
				var yearMatch = query.year != null ? dvd.year == query.year : true;
				var allNull = query.movieName == null && query.director == null && query.year == null && query.starring == null;

				movieNameMatch && directorMatch && yearMatch && starringMatch && !allNull;
				
			} else {
				
				dvd.movieName == query.movieName || dvd.director == query.director || dvd.year == query.year || query.starring != null && dvd.starring != null && dvd.starring.containsAny(query.starring);
				
			}
		}
		
		return false;
		
	}
}