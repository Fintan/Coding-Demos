package hxsignal.event;

import hxsignal.IPrioritySignal;

interface IEvent
{
	var target:Dynamic;
	var currentTarget:Dynamic;
	var signal:IPrioritySignal<Dynamic>;
	var bubbles:Bool;
	
	function clone():IEvent;
}