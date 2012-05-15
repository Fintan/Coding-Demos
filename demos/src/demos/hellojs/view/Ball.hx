package demos.hellojs.view;
import hxsignal.Signal;
import demos.hellojs.controller.HelloJsEvent;
import js.Lib;
import js.Dom;

class Ball extends BaseJsView
{
	public var clicked:Signal<Void->Void>;
	var circle:HtmlDom;
	var radius:Int;
	var colour:Int;
	var alpha:Float;
	
	public function new()
	{
		super();
		radius = 40;
		alpha = 0.75;
		drawBall();
		addListener();
		
		element = circle;
	}
	
	function drawBall()
	{
		circle = Lib.document.createElement ("div");
		circle.style.position = "absolute";
		circle.style.width = radius+"px";
		circle.style.height = radius+"px";
		circle.style.background = "#0088cc";
		untyped circle.style.opacity = alpha;
	}
	
	function setRadius(r:Int)
	{
		radius = r;
		untyped circle.style.mozkitBorderRadius = r+"px";
		untyped circle.style.webkitBorderRadius = r+"px";
		untyped circle.style.borderRadius = r+"px";
		circle.style.width = (r*2)+"px";
		circle.style.height = (r*2)+"px";
	}
	
	function addListener()
	{
		clicked = new Signal<Void->Void>();
		
		circle.onclick = function(e)
		{
			clicked.dispatch();
			//this.dispatchEvent(new HelloJsEvent(HelloJsEvent.CLICK));
		}		
	}
	
	public function moveTo(x:Float,y:Float)
	{
		circle.style.left = (x - radius) +"px";
		circle.style.top = (y - radius) +"px";
	}
	
	public function poke():Void 
	{
		colour = cast Math.random() * 0xFFFFFF;
		circle.style.background = "#" + StringTools.lpad(StringTools.hex(colour), "0", 6);
		setRadius(++radius);
	}
	
	override public function remove(child:BaseJsView):Void
	{
		circle.onclick = null;
		super.remove(child);
	}
}