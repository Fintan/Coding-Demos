package;
import medialibrary.SimpleQuery;
import medialibrary.CdQuery;
import medialibrary.DvdQuery;
import medialibrary.BookQuery;
import medialibrary.Cd;
import medialibrary.Dvd;
import medialibrary.Book;
import medialibrary.MediaShelf;

import utest.Assert;

class TestMediaLibrary {
	
	var model:MediaShelf;
	
	public function new() {}
	
	public function setup(){
		
		model = new MediaShelf();
		model.addItem(new Book(1001, "Javascript: the good parts", ["Douglas Crockford"], "O'Reilly"));
		model.addItem(new Book(1002, "Javascript: the bad parts", ["Douglas Crockford"], "O'Reilly"));
		model.addItem(new Dvd("Terminator", ["Arnold Schwarzenegger", "Linda Hamilton"], "James Cameron", 1985));
		model.addItem(new Dvd("Dante's Peak", ["Pierce Brosnan", "Linda Hamilton"], "Roger Donaldson", 1997));
		model.addItem(new Cd("Takk", ["Sigur Rós"], 2009));
		model.addItem(new Cd("Top Of The Pops: 1985", ["Various"], 1985));
		
	}
	
	public function testBookQuery() {
		
		var result = model.getItems(new BookQuery(1001, "Javascript: the good parts", ["Douglas Crockford"], "O'Reilly"));
		Assert.equals(result.length, 1, 'expecting one match using complete matching arguments');
		var result2 = model.getItems(new BookQuery(null, "Javascript: the good parts", null, null));
		Assert.equals(result2.length, 1, 'expecting one match using one matching argument and null arguments');
		var result3 = model.getItems(new BookQuery(null, "Javascccccript: the good parts", null, null));
		Assert.equals(result3.length, 0, 'expecting no match using one incorrect matching argument and null arguments');
		var result4 = model.getItems(new BookQuery(1011, "Javascript: the good parts", ["Douglas Crockford"], "O'Reilly"));
		Assert.equals(result4.length, 0, 'expecting no match using complete matching arguments except for the ispn number');
		var result5 = model.getItems(new BookQuery(null, null, ["Douglas Crockford"], null));
		Assert.equals(result5.length, 2, 'expecting two matches for Douglas Crockford');
	}
	
	public function testDvdQuery() {
		
		var result = model.getItems(new DvdQuery("Terminator", ["Arnold Schwarzenegger", "Linda Hamilton"], "James Cameron", 1985));
		Assert.equals(result.length, 1, 'expecting one match using complete matching arguments');
		var result2 = model.getItems(new DvdQuery("Terminator"));
		Assert.equals(result2.length, 1, 'expecting one match using one matching argument and null arguments');
		var result3 = model.getItems(new DvdQuery("Termkgljhlkjinator"));
		Assert.equals(result3.length, 0, 'expecting no match using one incorrect matching argument and null arguments');
		var result4 = model.getItems(new DvdQuery("Terminator", ["Arnold Schwarzenegger", "Linda Hamilton"], "Jem Kameron", 1985));
		Assert.equals(result4.length, 0, 'expecting no match using complete matching arguments except for the director name');
		var result5 = model.getItems(new DvdQuery(null, ["Linda Hamilton"], null, null));
		Assert.equals(result5.length, 2, 'expecting two matches for Linda Hamilton');
		
	}
	
	public function testCdQuery() {
		
		var result = model.getItems(new CdQuery("Takk", ["Sigur Rós"], 2009));
		Assert.equals(result.length, 1, 'expecting one match using complete matching arguments');
		var result2 = model.getItems(new CdQuery("Takk"));
		Assert.equals(result2.length, 1, 'expecting one match using one matching argument and null arguments');
		var result3 = model.getItems(new CdQuery("Takkafasafasd"));
		Assert.equals(result3.length, 0, 'expecting no match using one incorrect matching argument and null arguments');
		var result4 = model.getItems(new CdQuery("Takk", ["Sigur Rós"], 2029));
		Assert.equals(result4.length, 0, 'expecting no match using complete matching arguments except for the year');
		var result5 = model.getItems(new CdQuery(null, ["Sigur Rós"], null));
		Assert.equals(result5.length, 1, 'expecting a match for the artist name');
		
	}
	
	public function testSimpleQuery() {
		
		var result = model.getItems(new SimpleQuery("Javascript: the bad parts"));
		Assert.equals(result.length, 1, 'expecting one match using a correct book title');
		var result2 = model.getItems(new SimpleQuery("sdgsgfgfg"));
		Assert.equals(result2.length, 0, 'expecting no match using a random string');
		var result3 = model.getItems(new SimpleQuery("O'Reilly"));
		Assert.equals(result3.length, 2, 'expecting two matches using a correct publisher name'+result3);
		var result4 = model.getItems(new SimpleQuery("1001"));
		Assert.equals(result4.length, 1, 'expecting a match for a correct isbn');
		var result5 = model.getItems(new SimpleQuery(null));
		Assert.equals(result5.length, 0, 'expecting no match when passing null ');
		var result6 = model.getItems(new SimpleQuery("Terminator"));
		Assert.equals(result6.length, 1, 'expecting a match when passing a correct movie name');
		var result7 = model.getItems(new SimpleQuery("Takk"));
		Assert.equals(result7.length, 1, 'expecting a match when passing a correct album name');
		var result8 = model.getItems(new SimpleQuery("1985"));
		Assert.equals(result8.length, 2, 'expecting two matches for 1985 - a cd and a dvd');
		var result9 = model.getItems(new SimpleQuery("Douglas Crockford"));
		Assert.equals(result9.length, 2, 'expecting two matches for Douglas Crockford');
		
	}

}