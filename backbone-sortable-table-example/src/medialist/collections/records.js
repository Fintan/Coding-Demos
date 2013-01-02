define(["underscore", "backbone", "utils/paging", "medialist/models/resource"], 
function(_, Backbone, Paging, Resource) {

	var Records = Backbone.Collection.extend({

		model: Resource,
		origModels: [],
		sortAsc: true,
		sortAttr: "display_title",

		initialize: function(models, options) {
			
			this.origModels = models;
			
		},
		
		initPaging: function(perpage) {
			
			this.paging = new Paging(perpage);
			this.paging.setTotalRecords(this.origModels.length);
			
			this.paging.on("collection_slice", this.onPageChange, this);
			this.on('sortAll', this.onSort, this);
			
			this.goToPage(1);
			
		},
		
		_chkPaging: function() {
			
			if(this.paging) {return true;}
			
			throw new Error("Paging has not been initialised: call initPaging() first");
		},
		
		nextPage: function() {
			
			this._chkPaging();
			
			if((this.currentPage+1) <= this.paging.totalPages) {
				
				this.goToPage(this.currentPage+1);
			}
			
		},
		
		prevPage: function() {
			
			this._chkPaging();
			
			if((this.currentPage-1) > 0) {
				
				this.goToPage(this.currentPage-1);
			}
			
		},
		
		goToPage: function(number) {
			
			this._chkPaging();
			
			this.currentPage = number;
			
			this.paging.goTo(number);
			
		},

		onPageChange: function(sliceBegin, sliceEnd) {

			this._sliceBegin = sliceBegin;
			this._sliceEnd = sliceEnd;
			this.reset(this.origModels.slice(sliceBegin, sliceEnd));
			
			this.trigger("pageChange");
			
			this.chkCurrentPage();

		},
		
		chkCurrentPage: function() {
		
			if(this.paging.currentPage === this.paging.totalPages) {
				
				this.trigger("lastPage");
				
			}else if(this.paging.currentPage === 1) {
				
				this.trigger("firstPage");
				
			}
			
		},

		onSort: function(args) {

			this.reset(this.origModels.slice(this._sliceBegin, this._sliceEnd));
			
			this.trigger("pageChange");

		},
		
		sortAll: function() {
			
			this.origModels.sort(_.bind(function(resourceA, resourceB) {

				var ra = resourceA[this.sortAttr];
				var rb = resourceB[this.sortAttr];

				//if property type is a String
				ra = ra.toLowerCase();
				rb = rb.toLowerCase();

				if (ra < rb) {
					if (this.sortAsc === true) {
						return -1;
					} else {
						return 1;
					}
				}
				if (ra > rb) {
					if (this.sortAsc === true) {
						return 1;
					} else {
						return -1;
					}
				}

				return 0;
				
			}, this));
			
			this.trigger("sortAll");

		}	

	});
	
	return Records;

});