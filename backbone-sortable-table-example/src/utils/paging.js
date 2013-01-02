define(["underscore", "backbone"], 
function(_, Backbone) {

	/**
	*  Class that works out pagination details based on various settings
	*  
	*  totalRecords needs to be updated before calculations can be made
	*  
	*/  
	
	var Paging = function(perPage) {
		
		this.currentPage = 1;
		this.perPage = perPage;
		this.totalPages = undefined;
		this.totalRecords = undefined;
		
	};
	
	_.extend(Paging.prototype, Backbone.Events, {
		
		setTotalRecords: function(num) {
			
			this.totalRecords = num;
			this.totalPages = Math.ceil(this.totalRecords / this.perPage);
			
		},
		
		setRecordsPerPage: function(num) {
			
			if(this.totalRecords) {
				this.perPage = num;
				this.totalPages = Math.ceil(this.totalRecords / this.perPage);
			}
			
		},
		
		nextPage: function() {
			
			if(!this.totalPages) {
				console.warn("totalPages is undefined");
			}
			
			if (this.currentPage < this.totalPages) {
				
				this.currentPage = ++this.currentPage;
				this.update();
			}
		},

		previousPage: function() {
			
			var lastPage = this.currentPage;
			this.currentPage = --this.currentPage || 1;
			
			if(lastPage !== this.currentPage) {
				this.update();
			}

		},

		goTo: function(page) {
			
			if (page !== undefined) {
				
				if(!this.isLimitExceeded(parseInt(page, 10))) {
					this.currentPage = parseInt(page, 10);
					this.update();
				}
				
			}
		},
		
		isLimitExceeded: function(page) {
			
			var recordsUpToPage = page * this.perPage;
			
			//console.warn("(this.totalRecords/recordsUpToPage) "+(recordsUpToPage/this.totalRecords));
			if((recordsUpToPage/this.totalRecords) > 1 && this.perPage < (recordsUpToPage % this.totalRecords)) {

				//console.info("page ("+page+") exceeds total records "+ this.totalRecords + " >> "+(recordsUpToPage % this.totalRecords));
				return true;
				
			}
			
			return false;
		},

		howManyPer: function(perPage) {
			if (perPage !== undefined) {
				
				var lastPerPage = this.perPage;
				this.perPage = parseInt(perPage, 10);
				this.currentPage = Math.ceil((lastPerPage * (this.currentPage - 1) + 1) / perPage);
				this.update();
			}
		},
		
		update: function() {
			
			var disp = this.perPage,
				start = (this.currentPage - 1) * disp,
				stop = start + disp;
				
			if(stop >= this.totalRecords) {
				stop = this.totalRecords;
			}

			this.trigger("collection_slice", start, stop);
		}
		
	});
	
	return Paging;

});