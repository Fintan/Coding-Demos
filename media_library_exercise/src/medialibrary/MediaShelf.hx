package medialibrary;

class MediaShelf {
	
	var library:Array<IMediaItem>;
	
	public function new() {
		
		library = [];
		
	}
	
	public function addItem(item:IMediaItem) {
		
		library.push(item);
		
	}
	
	public function getItems(query:IMediaQuery):Array<IMediaItem> {
		
		var matchingItems = [];
		
		for(item in library) {
			if(query.find(item)) {
				matchingItems.push(item);
			}
		}
		
		return matchingItems;
		
	}
	
}