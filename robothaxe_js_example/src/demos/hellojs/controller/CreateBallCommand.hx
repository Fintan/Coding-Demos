package demos.hellojs.controller;
import demos.hellojs.view.BaseJsView;
import demos.hellojs.view.Ball;
import robothaxe.mvcs.Command;

class CreateBallCommand extends Command 
{
	var stageWidth:Float;
	var stageHeight:Float;
	
	public function new()
	{
		super();
		stageWidth = js.Lib.window.innerWidth;
		stageHeight = js.Lib.window.innerHeight;
	}
	override public function execute() 
	{	
		// Add a Ball to the view
		// A Mediator will be created for it automatically	
		var b = new Ball();
		b.moveTo(Math.random() * stageWidth, Math.random() * stageHeight);
		b.poke();
		
		cast(contextView, BaseJsView).add(b);
	}
}