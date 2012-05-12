package demos.hellojs;

import demos.hellojs.view.BaseJsView;

class HelloJs extends BaseJsView 
{
	function new() 
	{
		super(js.Lib.document.getElementById("container"));
		new HelloJsContext(this);	
	}

	static function main() 
	{
		new HelloJs();
	}
}