package medialibrary;

class Book implements haxe.Public, implements IMediaItem {
	
	var isbn:Null<Int>;
	var title:String;
	var authors:Array<String>;
	var publisher:String;

	function new( isbn:Null<Int>, title:String, authors:Array<String>, publisher:String ){
		this.isbn = isbn;
		this.title = title;
		this.authors = authors;
		this.publisher = publisher;
	}	
	
	function toString() {
		
		return isbn + " : " + title + " : " + authors.toString() + " : " + publisher;
		
	}
	
}