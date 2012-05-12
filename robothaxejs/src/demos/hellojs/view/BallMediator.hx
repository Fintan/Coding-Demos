package demos.hellojs.view;
import demos.hellojs.model.StatsModel;
import demos.hellojs.controller.HelloJsEvent;
import robothaxe.event.IEventDispatcher;
import robothaxe.mvcs.Mediator;

class BallMediator extends Mediator 
{
	@inject
	public var view:Ball;
	
	@inject
	public var statsModel:StatsModel;
	
	public function new() 
	{
		super();
		// Avoid doing work in your constructors!
		// Mediators are only ready to be used when onRegister gets called
	}
	
	override public function onRegister():Void 
	{
		// Listen to the view (2 ways, 3 if you use signals)
		//eventMap.mapListener(view, HelloJsEvent.CLICK, onClick);
		//view.addEventListener(HelloJsEvent.CLICK, onClick);
		view.clicked.add(onClick);
		// Listen to the context
		eventMap.mapListener(eventDispatcher, HelloJsEvent.BALL_CLICKED, onSomeBallClicked);
	}
	
	override public function onRemove():Void 
	{
		//tidy up things
		view.clicked.remove(onClick);
		eventMap.unmapListener(eventDispatcher, HelloJsEvent.BALL_CLICKED, onSomeBallClicked);
	}
	
	function onClick() 
	{
		// Manipulate the model
		statsModel.recordBallClick();
		// Dispatch to context
		eventDispatcher.dispatchEvent(new HelloJsEvent(HelloJsEvent.BALL_CLICKED));
	}
	
	function onSomeBallClicked(e):Void 
	{
		// Manipulate the view
		view.poke();
	}
	
}