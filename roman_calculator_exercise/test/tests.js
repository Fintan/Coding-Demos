/*global test:false, equal:false, notEqual:false, ok:false, QUnit:false */

require.config({
	paths: {
		"jquery": "../app/js/libs/jquery/jquery",
		"underscore": "../app/js/libs/underscore/underscore",
		"backbone": "../app/js/libs/backbone/backbone",
		"calculator": "../app/js/models/calculator",
		"romanNumerals": "../app/js/utils/romanNumerals"
	}
});


QUnit.config.autostart = false;

require(["calculator"], function(Model) {

	QUnit.start(); //Tests loaded, run tests
	var model = new Model();

	test("check simple input", function() {

		model.reset();
		model.updateInput("1");
		model.updateInput("2");
		model.updateInput("3");
		equal(model.getDisplayStr(), "123", "We expect value to be 123");

	});

	test("invalid input", function() {

		model.reset();
		model.updateInput("1");
		model.updateInput("z");
		model.updateInput("y");
		notEqual(model.getDisplayStr(), "1zy", "We expect value to be 1zy to be invalid");

	});

	test("check addend with operator", function() {

		model.reset();
		model.updateInput("1");
		model.updateInput("2");
		model.updateInput("+");
		equal(model.getDisplayStr(), "12+", "We expect value to be 12+");

	});

	test('should clear display', function() {

		model.reset();
		model.updateInput("");
		equal(model.getDisplayStr(), "", "We expect value to be an empty string");

	});

	test('check roman numeral answer', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("+");
		model.updateInput("V");
		model.updateInput("=");

		equal(model.getRomanNumeralAnswer(), "VI", "We expect value to be VI");
	});

	test('check roman numeral display string', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("+");
		model.updateInput("V");
		model.updateInput("=");

		equal(model.getDisplayStr(), "I+V=VI", "We expect value to be I+V=VI");
	});

	test('check decimal answer', function() {

		model.reset();
		model.updateInput("2");
		model.updateInput("+");
		model.updateInput("3");
		model.updateInput("=");

		equal(model.getDecimalAnswer(), "5", "We expect value to be 5");
	});

	test('check decimal answer with double digit addend', function() {

		model.reset();
		model.updateInput("2");
		model.updateInput("7");
		model.updateInput("+");
		model.updateInput("3");
		model.updateInput("=");

		equal(model.getDecimalAnswer(), "30", "We expect value to be 30");
	});

	test('check roman numeral answer with double digit addend', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("+");
		model.updateInput("I");
		model.updateInput("=");

		equal(model.getRomanNumeralAnswer(), "III", "We expect value to be III");
	});

	test('check roman numeral display string when multiple operators are used in a sequence', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("+");
		model.updateInput("V");
		model.updateInput("-");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("+");
		model.updateInput("I");

		equal(model.getDisplayStr(), "III+I", "We expect previous operations to be auto performed and the last one remaining III+I");
	});


	test('check for negative validation', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("-");
		model.updateInput("V");
		model.updateInput("=");

		var isDecimalInteger = function(input) {

				var isInteger_re = /^\s*(\+|-)?\d+\s*$/;
				return String(input).search(isInteger_re) !== -1;

			};

		ok(isDecimalInteger(model.getRomanNumeralAnswer()), "We expect a negative decimal because there is no concept of zero or negatives in Roman Numerals");
	});

	test('check auto base5 validation for part A', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");

		equal(model.getPartA(), "IV", "We expect incomplete IIII to be auto converted to IV");
	});


	test('check auto base5 validation for part B', function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("-");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");

		equal(model.getPartB(), "V", "We expect incomplete IIIII to be auto converted to V");
	});

	test("check display string when auto base5 validation occurs", function() {

		model.reset();
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");
		model.updateInput("I");

		equal(model.getDisplayStr(), "IV", "We expect IIII to auto-convert to be IV");

	});


});
