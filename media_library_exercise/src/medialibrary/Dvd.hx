package medialibrary;

class Dvd implements haxe.Public, implements IMediaItem {
	
	var movieName:String;
	var starring:Array<String>;
	var director:String;
	var year:Null<Int>;

	function new( movieName:String, starring:Array<String>, director:String, year:Null<Int> ){
		this.movieName = movieName;
		this.starring = starring;
		this.director = director;
		this.year = year;
	}
	
	function toString() {
		
		return movieName + " : " + starring.toString() + " : " + director + " : " + year;
		
	}
	
		
}