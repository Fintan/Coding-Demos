/*global test:false, equal:false, QUnit:false */
require.config({
	paths: {
		jquery: "../app/scripts/libs/jquery",
		lodash: "../app/scripts/libs/lodash",
		objectUtil: "../app/scripts/utils/ObjectUtil",
		mediaquery: "../app/scripts/medialibrary/MediaQuery",
		mediashelf: "../app/scripts/medialibrary/MediaShelf"
	}
});

QUnit.config.autostart = false;

require(["mediaquery", "mediashelf", "lodash", "objectUtil"], function(query, model, _, ObjectUtil) {

	QUnit.start(); //Tests loaded, run tests
	
	//sample test data
	model.addItem({type:"Book", isbn:1001, title:"Javascript the good parts", author:["Douglas Crockford"], publisher:"O'Reilly"});
	model.addItem({type:"Book", isbn:1002, title:"Javascript the bad parts", author:["Douglas Crockford"], publisher:"O'Reilly"});
	model.addItem({type:"Cd", album:"Takk", artists:["Sigur Rós"], year:2009 });
	model.addItem({type:"Cd", album:"Top Of The Pops: 1985", artists:["Various"], year:1985 });
	model.addItem({type:"Dvd", title:"Terminator", starring:["Arnold Schwarzenegger", "Linda Hamilton"], director:"James Cameron", year:1985 });
	model.addItem({type:"Dvd", title:"Dante's Peak", starring:["Pierce Brosnan", "Linda Hamilton"], director:"Roger Donaldson", year:1997 });
	
	test("Book Query", function() {
		
		//console.log(ObjectUtil.objectsArrayToString(model.library));
		
		var bookQuery = query.types.BookQuery;
		
		bookQuery.data = {
			isbn:1001,
			title:"Javascript the good parts",
			author:["Douglas Crockford"],
			publisher:"O'Reilly"
		};
		var result = model.getItems(bookQuery);
		equal(result.length, 1, 'expecting one match using complete matching arguments');
		
		
		bookQuery.data = {
			title:"Javascript the good parts"
		};
		var result2 = model.getItems(bookQuery);
		equal(result2.length, 1, 'expecting one match using one matching argument and null arguments');
		
		bookQuery.data = {
			title:"Javascccccript the good parts"
		};
		var result3 = model.getItems(bookQuery);
		equal(result3.length, 0, 'expecting no match using one incorrect matching argument and null arguments');
		
		bookQuery.data = {
			isbn:1011,
			title:"Javascript the good parts",
			author:["Douglas Crockford"],
			publisher:"O'Reilly"
		};
		var result4 = model.getItems(bookQuery);
		equal(result4.length, 0, 'expecting no match using complete matching arguments except for the ispn number');
		
		bookQuery.data = {
			author:["Douglas Crockford"]
		};
		var result5 = model.getItems(bookQuery);
		equal(result5.length, 2, 'expecting two matches for Douglas Crockford');
		
	});
	
	test("Cd Query", function() {
		
		var cdQuery = query.types.CdQuery;
		
		cdQuery.data = {
			album:"Takk",
			artists:["Sigur Rós"],
			year:2009
		};
		var result = model.getItems(cdQuery);
		equal(result.length, 1, 'expecting one match using complete matching arguments');
		
		cdQuery.data = {
			album:"Takk"
		};
		var result2 = model.getItems(cdQuery);
		equal(result2.length, 1, 'expecting one match using one matching argument and null arguments');
		
		cdQuery.data = {
			album:"Takkafasafasd"
		};
		var result3 = model.getItems(cdQuery);
		equal(result3.length, 0, 'expecting no match using one incorrect matching argument and null arguments');
		
		cdQuery.data = {
			album:"Takk",
			artists:["Sigur Rós"],
			year:2029
		};
		var result4 = model.getItems(cdQuery);
		equal(result4.length, 0, 'expecting no match using complete matching arguments except for the year');
		
		cdQuery.data = {
			artists:["Sigur Rós"]
		};
		var result5 = model.getItems(cdQuery);
		equal(result5.length, 1, 'expecting a match for the artist name');
		
	});

	test("Dvd Query", function() {
		
		var dvdQuery = query.types.DvdQuery;
		
		dvdQuery.data = {
			title:"Terminator",
			director:"James Cameron",
			starring:["Arnold Schwarzenegger", "Linda Hamilton"],
			year:1985
		};
		var result = model.getItems(dvdQuery);
		equal(result.length, 1, 'expecting one match using complete matching arguments');
		
		dvdQuery.data = {
			title:"Terminator"
		};
		var result2 = model.getItems(dvdQuery);
		equal(result2.length, 1, 'expecting one match using one matching argument and null arguments');
		
		dvdQuery.data = {
			title:"Termkgljhlkjinator"
		};
		var result3 = model.getItems(dvdQuery);
		equal(result3.length, 0, 'expecting no match using one incorrect matching argument and null arguments');
		
		dvdQuery.data = {
			title:"Terminator",
			director:"Jem Kameron",
			starring:["Arnold Schwarzenegger", "Linda Hamilton"],
			year:1985
		};
		var result4 = model.getItems(dvdQuery);
		equal(result4.length, 0, 'expecting no match using complete matching arguments except for the director name');
		
		dvdQuery.data = {
			starring:["Linda Hamilton"]
		};
		var result5 = model.getItems(dvdQuery);
		equal(result5.length, 2, 'expecting two matches for Linda Hamilton');
		
	});

	test("Simple Query", function() {
		
		var simpleQuery = query.types.SimpleQuery;
		
		simpleQuery.data = "Javascript the bad parts";
		
		var result = model.getItems(simpleQuery);
		equal(result.length, 1, 'expecting one match using complete matching arguments');
		
		simpleQuery.data = "sdgsgfgfg";
		
		var result2 = model.getItems(simpleQuery);
		equal(result2.length, 0, 'expecting no match using a random string');
		
		simpleQuery.data = "O'Reilly";
		
		var result3 = model.getItems(simpleQuery);
		equal(result3.length, 2, 'expecting two matches using a correct publisher name');
		
		simpleQuery.data = "1001";
		
		var result4 = model.getItems(simpleQuery);
		equal(result4.length, 1, 'expecting a match for a correct isbn');
		
		simpleQuery.data = null;
		
		var result5 = model.getItems(simpleQuery);
		equal(result5.length, 0, 'expecting no match when passing null');
		
		simpleQuery.data = "Terminator";
		
		var result6 = model.getItems(simpleQuery);
		equal(result6.length, 1, 'expecting a match when passing a correct movie name');
		
		simpleQuery.data = "Takk";
		
		var result7 = model.getItems(simpleQuery);
		equal(result7.length, 1, 'expecting a match when passing a correct album name');
		
		simpleQuery.data = "1985";
		
		var result8 = model.getItems(simpleQuery);
		equal(result8.length, 2, 'expecting two matches for 1985 - a cd and a dvd');
		
		simpleQuery.data = "Douglas Crockford";
		
		var result9 = model.getItems(simpleQuery);
		equal(result9.length, 2, 'expecting two matches for Douglas Crockford');

		simpleQuery.data = "Arnold Schwarzenegger";
		
		var result10 = model.getItems(simpleQuery);
		equal(result10.length, 1, 'expecting one match for Arnie');

	});

});
