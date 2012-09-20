package medialibrary;

class SimpleQuery implements IMediaQuery {
	
	var bookQuery:BookQuery;
	var cdQuery:CdQuery;
	var dvdQuery:DvdQuery;
	
	public function new( searchStr:String ) {
		
		//use searchStr for every argument
		bookQuery = new BookQuery(Std.parseInt(searchStr), searchStr, searchStr!= null? searchStr.split(","):null, searchStr);
		cdQuery = new CdQuery(searchStr, searchStr!= null? searchStr.split(","):null, Std.parseInt(searchStr));
		dvdQuery = new DvdQuery(searchStr, searchStr!= null? searchStr.split(","):null, searchStr, Std.parseInt(searchStr));
		
	}
	
	public function find(item:IMediaItem, exact:Bool=true):Bool {
		
		return switch(Type.getClass(item)) {
			case Book:
				bookQuery.find(item, false);
			case Dvd:
				dvdQuery.find(item, false);
			case Cd:
				cdQuery.find(item, false);
			default:
				false;
			
		}
		
	}
	
}
