package;

import utest.Runner;
import utest.ui.Report;

class Main {
	
	var runner:Runner;
	
	function new() {
		
		runner = new Runner();
		runner.addCase(new TestMediaLibrary());
		
		Report.create(runner);
		runner.run();
		
	}
	
	static function main() {
		
		new Main();
		
	}
	
}