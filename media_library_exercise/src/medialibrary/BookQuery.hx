package medialibrary;

using org.casalib.util.ArrayUtil;

class BookQuery implements IMediaQuery {
	
	var query:Book;
	
	public function new( ?isbn:Null<Int>, ?title:String, ?authors:Array<String>, ?publisher:String ) {
		
		query = new Book(isbn, title, authors, publisher);
		
	}
	
	public function find(item:IMediaItem, exact:Bool=true):Bool {
		
		if(Type.getClass(item) == Book) {
			
			var book:Book = cast(item, Book);
			
			return if(exact) {
				
				var titleMatch = query.title != null ? book.title == query.title : true;
				var isbnMatch = query.isbn != null ? book.isbn == query.isbn : true;
				var authorsMatch = query.authors != null && book.authors != null ? book.authors.containsAny(query.authors) : true;
				var publisherMatch = query.publisher != null ? book.publisher == query.publisher : true;
				var allNull = query.title == null && query.isbn == null && query.publisher == null && query.authors == null;

				titleMatch && isbnMatch && publisherMatch && authorsMatch && !allNull;
				
			} else {
				
				book.title == query.title || book.isbn == query.isbn  || book.publisher == query.publisher || book.authors != null && query.authors != null && book.authors.containsAny(query.authors);
				
			}
			
		}
		
		return false;
		
	}
	
}