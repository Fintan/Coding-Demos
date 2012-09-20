package medialibrary;

using org.casalib.util.ArrayUtil;

class CdQuery implements IMediaQuery {
	
	var query:Cd;
	
	public function new(?album:String, ?artists:Array<String>, ?year:Null<Int>) {
		
		query = new Cd(album, artists, year);
		
	}
	
	public function find(item:IMediaItem, exact:Bool=true):Bool {
		
		if(Type.getClass(item) == Cd) {
			
			var cd:Cd = cast(item, Cd);
		
			return if(exact) {
				
				var albumMatch = query.album != null ? cd.album == query.album : true;
				var artistsMatch = query.artists != null && cd.artists != null ? cd.artists.containsAny(query.artists) : true;
				var yearMatch = query.year != null ? cd.year == query.year : true;
				var allNull = query.album == null && query.artists == null && query.year == null && query.artists == null;

				albumMatch && yearMatch && artistsMatch && !allNull;
				
			} else {
				
				cd.album == query.album || cd.year == query.year || query.artists != null && cd.artists != null && cd.artists.containsAny(query.artists);
				
			}
		}
		
		return false;
		
	}
}