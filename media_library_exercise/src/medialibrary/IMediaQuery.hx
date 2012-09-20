package medialibrary;

interface IMediaQuery {
	
	/*
	* All non-null IMediaItem arguments need to match to return true unless 'exact' is false
	* If 'exact' is false then only one IMediaItem argument needs to match to return true
	*/
	function find(item:IMediaItem, exact:Bool=true):Bool;
	
}