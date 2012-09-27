package demos.hellojs.model;

import robothaxe.mvcs.Actor;

class StatsModel extends Actor {
	
	public var ballClickCount(getBallClickCount, null):Int;
	var _ballClickCount:Int;

	public function new() {
		
		super();
		_ballClickCount = 0;

	}

	public function recordBallClick():Void {
		_ballClickCount++;
	}
		
	function getBallClickCount():Int {
		return _ballClickCount;
	}
}