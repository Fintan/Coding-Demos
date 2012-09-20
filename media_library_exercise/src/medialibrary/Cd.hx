package medialibrary;

class Cd implements haxe.Public, implements IMediaItem {
	
	var album:String;
	var artists:Array<String>;
	var year:Null<Int>;

	function new( album:String, artists:Array<String>, year:Null<Int> ){
		this.album = album;
		this.artists = artists;
		this.year = year;
	}	
	
	function toString() {
		
		return album + " : " + artists.toString() + " : " + year;
		
	}
	
}