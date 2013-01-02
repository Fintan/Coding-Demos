require.config({
	paths: {
		"jquery": "../libs/jquery",
		"underscore": "../libs/underscore-min",
		"backbone": "../libs/backbone-min"
	},
	baseUrl: "../src",
	path: "../src",
	shim: {
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});



QUnit.config.autostart = false;

define(["underscore", "backbone", "utils/paging", "medialist/collections/records", "utils/services"], 
function(_, Backbone, Paging, Records, Services) {

	//QUnit.start(); //wait until test data has loaded
	
	var services = new Services();
	var records;

	var self = this;
	
	services.on('content_loaded', function(data) {

		var resources = [];

		_.each(data.response.results.result, function(value, key, list) {
			resources.push(value.content.resource);
		});

		//create records
		records = new Records(resources);
			
		//data loaded, run tests
		QUnit.start();

	}, this);

	services.loadContent('../dist/Content.json');

	/*test("Records sorting", function() {
		
	});*/

	test("pager indexing", function() {
		
		var p = new Paging();
		p.setTotalRecords(43);
		p.perPage = 5;
		
		ok(p.totalRecords == 43, "totalRecords should be same as value passed in setter");
		
		p.on("collection_slice", function(start, stop) {
			
			ok(start == 0, "expecting 0 because it is page 1");
			ok(stop == 5, "expecting 5 because it is page 1 and perPage is 5");
		});
		p.goTo(1);
		p.off("collection_slice");
		p.on("collection_slice", function(start, stop) {
			
			ok(start == 5, "expecting 5 because it is page 2");
			ok(stop == 10, "expecting 10 because it is page 2 and perPage is 5");
		});
		p.goTo(2);
		p.off("collection_slice");
		p.on("collection_slice", function(start, stop) {
			
			ok(start == 40, "expecting slice start value ("+start+") to page request that exceeds record count by going to the last page");
			ok(stop == 43, "expecting slice stop value ("+stop+") to page request that exceeds record count by going to the last page");
			ok(p.currentPage == 9, "expecting currentPage ("+p.currentPage+") to page request that exceeds record count by going to the last page");
		});
		p.goTo(9);
		
		/*
		p.previousPage();
		p.previousPage();
		p.previousPage();
		p.nextPage();
		p.nextPage();
		p.nextPage();
		*/
	});


});
