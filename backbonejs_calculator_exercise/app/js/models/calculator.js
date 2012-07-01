define(function(require) {
	
	var Backbone = require("backbone");
	var converter = require("romanNumerals");
	
	var CalculatorModel = Backbone.Model.extend({

    	defaults: {
	      	
			displayStr:"",
			lastToken:"",
			currentOperator:"",
			operatorIsActivated:false,
			valueEndAStr:"",
			valueEndBStr:"",
			decimalAnswer:"",
			romanNumeralAnswer:""
			
	    },

	    initialize: function() {
	
	    },
	
		reset: function(){
			
			this.set({displayStr: ""});
			this.set({lastToken: ""});
			this.set({currentOperator: ""});
			this.set({operatorIsActivated: false});
			this.set({valueEndAStr: ""});
			this.set({valueEndBStr: ""});
			this.set({decimalAnswer: ""});
			this.set({romanNumeralAnswer: ""});
			
		},
		
		//expecting input to be a single token
		updateInput: function(input){
			
			if(!this.isValidInput(input)){
			
				this.createAlertMessage("invalid input: "+ input, 2);
				return;
				
			}
			
			if(this.get("lastToken") == "=" && this.isIntegerInput(input)){
				
				this.reset();
					
			}else if(this.get("lastToken") == "=" && this.isOperator(input)){
				
				this.set({valueEndAStr: this.get("romanNumeralAnswer")});
				this.set({valueEndBStr: ""});
				this.set({decimalAnswer: ""});
				this.set({romanNumeralAnswer: ""});
				
			}
			
			this.set({lastToken: input});
			
			if(this.isOperator(input)){
				
				if(this.get("valueEndAStr") === ""){
					
					this.createAlertMessage("initial value required before using an operator", 1);
					return;
				}
				
				if(this.get("valueEndBStr") != ""){
					
					this.performCalculation();
					this.set({valueEndAStr: this.get("romanNumeralAnswer")});
					this.set({valueEndBStr: ""});
					this.set({decimalAnswer: ""});
					this.set({romanNumeralAnswer: ""});
					
					this.set({operatorIsActivated: true});
					this.set({currentOperator: input});
					
				}else{
					this.set({operatorIsActivated: true});
					this.set({currentOperator: input});
				}
				
			}else if(this.isIntegerInput(input)){
				
				if(this.get("operatorIsActivated") == false){
					
					this.set({ valueEndAStr: this.get("valueEndAStr") + input });
					
					if(this.isRomanNumeral(this.get("valueEndAStr"))){
						
						this.set({ valueEndAStr: converter.base5RomanNumeral(this.get("valueEndAStr"))}); 
						
					}
	
				}else{
				
					this.set({ valueEndBStr: this.get("valueEndBStr") + input });
					
					if(this.isRomanNumeral(this.get("valueEndBStr"))){
						
						this.set({ valueEndBStr: converter.base5RomanNumeral(this.get("valueEndBStr"))}); 
						
					}
				}
						
			} else if(this.isEqualSign(input)){
				
				if(this.get("valueEndBStr") != ""){
					
					this.performCalculation();
					
				}else{
					
					this.set({lastToken: ""});
					this.createAlertMessage("second value required before using '='", 0);
					return;
					
				}
				
			}

			
			this.assembleDisplayString();
		},
		
		assembleDisplayString: function(){
			
			var equalsStr = this.get("lastToken") == "=" ? "=" : "";
			
			this.set({ displayStr: this.get("valueEndAStr") + this.get("currentOperator") + this.get("valueEndBStr") + equalsStr + this.get("romanNumeralAnswer") } );
			
			//console.log(this.get("displayStr"));
			
			this.trigger("DISPLAY_STRING_UPDATE", this.get("displayStr"));
			
		},
		
		createAlertMessage: function(message, level){
			
			//console.log(message);
			this.trigger("ALERT_MESSAGE", message, level);
			
		},
		
		getDisplayStr: function(){
			return this.get("displayStr");
		},
		
		getPartA: function(){
			return this.get("valueEndAStr");
		},
		
		getPartB: function(){
			return this.get("valueEndBStr");
		},
		
		getRomanNumeralAnswer: function(){
			return this.get("romanNumeralAnswer");
		},
		
		getDecimalAnswer: function(){
			return this.get("decimalAnswer");
		},
		
		performCalculation: function(){
			
			var a, b;
			
			if(this.isDecimalInteger(this.get("valueEndAStr"))){
				a = Number(this.get("valueEndAStr"));
			}else if(this.isRomanNumeral(this.get("valueEndAStr"))){
				a = Number(converter.romanNumeralToDecimal(this.get("valueEndAStr")));
			}
			
			if(this.isDecimalInteger(this.get("valueEndBStr"))){
				b = Number(this.get("valueEndBStr"));
			}else if(this.isRomanNumeral(this.get("valueEndBStr"))){
				b = Number(converter.romanNumeralToDecimal(this.get("valueEndBStr")));
			}
			
			var decimalAnswer = this.calculate(a, b, this.get("currentOperator"));
			
			this.set({decimalAnswer: decimalAnswer});
			this.set({romanNumeralAnswer: converter.decimalToRomanNumeral(decimalAnswer)});//Google's search engine calculator does this
			this.set({operatorIsActivated: false});
			
			if(this.get("romanNumeralAnswer") == "N")
			{
				this.set({romanNumeralAnswer: this.get("decimalAnswer")});
				
				this.createAlertMessage("negatives not allowed in roman numerals.", 2);
				return false;
			}
			
			return true;
		},
		
		calculate: function(a, b, operator){
			
			var answer = 0;
			
			switch (operator) {
				
				case '+':
				    answer = a + b;
				    break;
				case '-':
				    answer = a - b;
				    break;
				case '*':
				    answer = a * b;  
				    break;
				
			}
			
			return answer;
			
		},
		
		isEqualSign: function(input){
			
			return input === "=";
			
		},
		
		isOperator: function(input){
			
			var isAnOperator = false;
			
			switch (input) {
				
				case '+':
				case '-':
				case '*':
				    isAnOperator = true; 
				    break;
				
			}
			
			return isAnOperator;
		},
		
		isIntegerInput: function(input){
			
			return "0123456789IVXLCDM".indexOf(input) != -1;
			
		},

		isValidInput: function(input){
			
			return "0123456789IVXLCDM+-*=".indexOf(input) != -1;
			
		},
		
		isDecimalInteger: function(input){
			
			var isInteger_re     = /^\s*(\+|-)?\d+\s*$/;	
			return String(input).search (isInteger_re) != -1;
			
		},
		
		isRomanNumeral: function(input){
			
			var isRomanNumeral_re     = /^\b[IVXLCDM]+\b/;
			return String(input).search (isRomanNumeral_re) != -1;
			
		}

  	});

  	return CalculatorModel;

});