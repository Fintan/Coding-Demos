package demos.hellojs.controller;

import robothaxe.event.Event;

class HelloJsEvent extends Event 
{
	public static var BALL_CLICKED:String = 'BALL_CLICKED';
	public static var CLICK:String = 'CLICK';
	
	public var body(default, null):Dynamic;
	
	public function new(type:String, body:Dynamic = null) 
	{
		super(type, true);
		this.body = body;
	}
	
	override public function clone():Event 
	{
		return new HelloJsEvent(type, body);
	}
	
}