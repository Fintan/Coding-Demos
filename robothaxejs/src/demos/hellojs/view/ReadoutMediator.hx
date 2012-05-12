package demos.hellojs.view;
import demos.hellojs.controller.HelloJsEvent;
import demos.hellojs.model.StatsModel;
import robothaxe.mvcs.Mediator;

class ReadoutMediator extends Mediator
{
	@inject
	public var view:Readout;
	
	@inject
	public var statsModel:StatsModel;
	
	public function new() {
		super();
		// Avoid doing work in your constructors!
		// Mediators are only ready to be used when onRegister gets called
	}
	
	override public function onRegister():Void {
		// Listen to the context
		eventMap.mapListener(eventDispatcher, HelloJsEvent.BALL_CLICKED, onBallClicked);
	}
	
	function onBallClicked(e:HelloJsEvent):Void {
		// Manipulate the view
		view.setText('Click count: ' + statsModel.ballClickCount);
	}
}