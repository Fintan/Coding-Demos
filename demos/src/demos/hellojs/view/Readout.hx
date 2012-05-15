package demos.hellojs.view;
import js.Lib;
import js.Dom;

class Readout extends BaseJsView
{
	var textfield:HtmlDom;
	
	public function new()
	{
		super();
		createTextField();
		super(textfield);
		element = textfield;
	}
	
	function createTextField()
	{
		textfield = js.Lib.document.createElement ("div");
		
		textfield.setAttribute("id", "readout");
		textfield.style.position = "absolute";
		textfield.style.left = "0px";
		textfield.style.width = "200px";
		textfield.style.height = "30px";
		textfield.style.background = "#eeeeee";
		textfield.style.textAlign = "center";
		
		setText("Click the ball...");

	}
	
	public function setText(str:String) 
	{
		textfield.innerHTML = str;
	}
}