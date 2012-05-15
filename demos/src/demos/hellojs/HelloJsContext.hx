package demos.hellojs;
import demos.hellojs.view.BaseJsView;
import demos.hellojs.view.ReadoutMediator;
import demos.hellojs.view.BallMediator;
import demos.hellojs.view.Ball;
import demos.hellojs.view.Readout;
import robothaxe.mvcs.Context;
import demos.hellojs.model.StatsModel;
import demos.hellojs.controller.HelloJsEvent;
import demos.hellojs.controller.CreateBallCommand;
import robothaxe.base.ContextEvent;

class HelloJsContext extends Context 
{
	public function new(contextView) 
	{	
		super(contextView);
	}

	override public function startup():Void 
	{
		// Map some Commands to Events
		commandMap.mapEvent(ContextEvent.STARTUP_COMPLETE, CreateBallCommand, ContextEvent, true);
		commandMap.mapEvent(HelloJsEvent.BALL_CLICKED, CreateBallCommand, HelloJsEvent );
		
		// Create a rule for Dependency Injection
		injector.mapSingleton(StatsModel);
		
		// Here we bind Mediator Classes to View Classes:
		// Mediators will be created automatically when
		// view instances arrive on stage (anywhere inside the context view)
		mediatorMap.mapView(Ball, BallMediator);
		mediatorMap.mapView(Readout, ReadoutMediator);
		
		// Manually add something to stage
		var ro = new Readout();
		cast(contextView, BaseJsView).add(ro);
		
		// And we're done
		super.startup();
	}
}