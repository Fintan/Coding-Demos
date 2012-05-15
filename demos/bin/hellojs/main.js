$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof robothaxe=='undefined') robothaxe = {}
if(!robothaxe.base) robothaxe.base = {}
robothaxe.base.ContextError = function(message,id) {
	if( message === $_ ) return;
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.id = id;
}
robothaxe.base.ContextError.__name__ = ["robothaxe","base","ContextError"];
robothaxe.base.ContextError.prototype.message = null;
robothaxe.base.ContextError.prototype.id = null;
robothaxe.base.ContextError.prototype.__class__ = robothaxe.base.ContextError;
if(!robothaxe.event) robothaxe.event = {}
robothaxe.event.EventPhase = function() { }
robothaxe.event.EventPhase.__name__ = ["robothaxe","event","EventPhase"];
robothaxe.event.EventPhase.prototype.__class__ = robothaxe.event.EventPhase;
if(!robothaxe.mvcs) robothaxe.mvcs = {}
robothaxe.mvcs.Command = function(p) {
}
robothaxe.mvcs.Command.__name__ = ["robothaxe","mvcs","Command"];
robothaxe.mvcs.Command.prototype.contextView = null;
robothaxe.mvcs.Command.prototype.commandMap = null;
robothaxe.mvcs.Command.prototype.eventDispatcher = null;
robothaxe.mvcs.Command.prototype.injector = null;
robothaxe.mvcs.Command.prototype.mediatorMap = null;
robothaxe.mvcs.Command.prototype.execute = function() {
}
robothaxe.mvcs.Command.prototype.dispatch = function(event) {
	if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
	return false;
}
robothaxe.mvcs.Command.prototype.__class__ = robothaxe.mvcs.Command;
if(typeof demos=='undefined') demos = {}
if(!demos.hellojs) demos.hellojs = {}
if(!demos.hellojs.controller) demos.hellojs.controller = {}
demos.hellojs.controller.CreateBallCommand = function(p) {
	if( p === $_ ) return;
	robothaxe.mvcs.Command.call(this);
	this.stageWidth = js.Lib.window.innerWidth;
	this.stageHeight = js.Lib.window.innerHeight;
}
demos.hellojs.controller.CreateBallCommand.__name__ = ["demos","hellojs","controller","CreateBallCommand"];
demos.hellojs.controller.CreateBallCommand.__super__ = robothaxe.mvcs.Command;
for(var k in robothaxe.mvcs.Command.prototype ) demos.hellojs.controller.CreateBallCommand.prototype[k] = robothaxe.mvcs.Command.prototype[k];
demos.hellojs.controller.CreateBallCommand.prototype.stageWidth = null;
demos.hellojs.controller.CreateBallCommand.prototype.stageHeight = null;
demos.hellojs.controller.CreateBallCommand.prototype.execute = function() {
	var b = new demos.hellojs.view.Ball();
	b.moveTo(Math.random() * this.stageWidth,Math.random() * this.stageHeight);
	b.poke();
	((function($this) {
		var $r;
		var $t = $this.contextView;
		if(Std["is"]($t,demos.hellojs.view.BaseJsView)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).add(b);
}
demos.hellojs.controller.CreateBallCommand.prototype.__class__ = demos.hellojs.controller.CreateBallCommand;
if(!robothaxe.injector) robothaxe.injector = {}
if(!robothaxe.injector.injectionresults) robothaxe.injector.injectionresults = {}
robothaxe.injector.injectionresults.InjectionResult = function(p) {
}
robothaxe.injector.injectionresults.InjectionResult.__name__ = ["robothaxe","injector","injectionresults","InjectionResult"];
robothaxe.injector.injectionresults.InjectionResult.prototype.getResponse = function(injector) {
	return null;
}
robothaxe.injector.injectionresults.InjectionResult.prototype.__class__ = robothaxe.injector.injectionresults.InjectionResult;
robothaxe.injector.injectionresults.InjectValueResult = function(value) {
	if( value === $_ ) return;
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.value = value;
}
robothaxe.injector.injectionresults.InjectValueResult.__name__ = ["robothaxe","injector","injectionresults","InjectValueResult"];
robothaxe.injector.injectionresults.InjectValueResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
for(var k in robothaxe.injector.injectionresults.InjectionResult.prototype ) robothaxe.injector.injectionresults.InjectValueResult.prototype[k] = robothaxe.injector.injectionresults.InjectionResult.prototype[k];
robothaxe.injector.injectionresults.InjectValueResult.prototype.value = null;
robothaxe.injector.injectionresults.InjectValueResult.prototype.getResponse = function(injector) {
	return this.value;
}
robothaxe.injector.injectionresults.InjectValueResult.prototype.__class__ = robothaxe.injector.injectionresults.InjectValueResult;
if(typeof hxsignal=='undefined') hxsignal = {}
hxsignal.ISignalBinding = function() { }
hxsignal.ISignalBinding.__name__ = ["hxsignal","ISignalBinding"];
hxsignal.ISignalBinding.prototype.listener = null;
hxsignal.ISignalBinding.prototype.once = null;
hxsignal.ISignalBinding.prototype.priority = null;
hxsignal.ISignalBinding.prototype.pause = null;
hxsignal.ISignalBinding.prototype.resume = null;
hxsignal.ISignalBinding.prototype.remove = null;
hxsignal.ISignalBinding.prototype.execute0 = null;
hxsignal.ISignalBinding.prototype.execute1 = null;
hxsignal.ISignalBinding.prototype.execute2 = null;
hxsignal.ISignalBinding.prototype.__class__ = hxsignal.ISignalBinding;
hxsignal.ISignal = function() { }
hxsignal.ISignal.__name__ = ["hxsignal","ISignal"];
hxsignal.ISignal.prototype.numListeners = null;
hxsignal.ISignal.prototype.add = null;
hxsignal.ISignal.prototype.addOnce = null;
hxsignal.ISignal.prototype.dispatch = null;
hxsignal.ISignal.prototype.remove = null;
hxsignal.ISignal.prototype.removeAll = null;
hxsignal.ISignal.prototype.__class__ = hxsignal.ISignal;
if(!robothaxe.injector.injectionpoints) robothaxe.injector.injectionpoints = {}
robothaxe.injector.injectionpoints.InjectionPoint = function(meta,injector) {
	if( meta === $_ ) return;
	this.initializeInjection(meta);
}
robothaxe.injector.injectionpoints.InjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","InjectionPoint"];
robothaxe.injector.injectionpoints.InjectionPoint.prototype.applyInjection = function(target,injector) {
	return target;
}
robothaxe.injector.injectionpoints.InjectionPoint.prototype.initializeInjection = function(meta) {
}
robothaxe.injector.injectionpoints.InjectionPoint.prototype.__class__ = robothaxe.injector.injectionpoints.InjectionPoint;
if(!robothaxe.core) robothaxe.core = {}
robothaxe.core.IMediatorMap = function() { }
robothaxe.core.IMediatorMap.__name__ = ["robothaxe","core","IMediatorMap"];
robothaxe.core.IMediatorMap.prototype.mapView = null;
robothaxe.core.IMediatorMap.prototype.unmapView = null;
robothaxe.core.IMediatorMap.prototype.createMediator = null;
robothaxe.core.IMediatorMap.prototype.registerMediator = null;
robothaxe.core.IMediatorMap.prototype.removeMediator = null;
robothaxe.core.IMediatorMap.prototype.removeMediatorByView = null;
robothaxe.core.IMediatorMap.prototype.retrieveMediator = null;
robothaxe.core.IMediatorMap.prototype.hasMapping = null;
robothaxe.core.IMediatorMap.prototype.hasMediator = null;
robothaxe.core.IMediatorMap.prototype.hasMediatorForView = null;
robothaxe.core.IMediatorMap.prototype.contextView = null;
robothaxe.core.IMediatorMap.prototype.enabled = null;
robothaxe.core.IMediatorMap.prototype.__class__ = robothaxe.core.IMediatorMap;
robothaxe.core.IViewContainer = function() { }
robothaxe.core.IViewContainer.__name__ = ["robothaxe","core","IViewContainer"];
robothaxe.core.IViewContainer.prototype.viewAdded = null;
robothaxe.core.IViewContainer.prototype.viewRemoved = null;
robothaxe.core.IViewContainer.prototype.isAdded = null;
robothaxe.core.IViewContainer.prototype.__class__ = robothaxe.core.IViewContainer;
robothaxe.event.Event = function(inType,inBubbles,inCancelable) {
	if( inType === $_ ) return;
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = robothaxe.event.EventPhase.AT_TARGET;
}
robothaxe.event.Event.__name__ = ["robothaxe","event","Event"];
robothaxe.event.Event.prototype.bubbles = null;
robothaxe.event.Event.prototype.cancelable = null;
robothaxe.event.Event.prototype.eventPhase = null;
robothaxe.event.Event.prototype.target = null;
robothaxe.event.Event.prototype.currentTarget = null;
robothaxe.event.Event.prototype.type = null;
robothaxe.event.Event.prototype.jeashIsCancelled = null;
robothaxe.event.Event.prototype.jeashIsCancelledNow = null;
robothaxe.event.Event.prototype.jeashSetPhase = function(phase) {
	this.eventPhase = phase;
}
robothaxe.event.Event.prototype.jeashGetIsCancelled = function() {
	return this.jeashIsCancelled;
}
robothaxe.event.Event.prototype.jeashGetIsCancelledNow = function() {
	return this.jeashIsCancelledNow;
}
robothaxe.event.Event.prototype.clone = function() {
	return new robothaxe.event.Event(this.type,this.bubbles,this.cancelable);
}
robothaxe.event.Event.prototype.stopImmediatePropagation = function() {
	this.jeashIsCancelledNow = this.jeashIsCancelled = true;
}
robothaxe.event.Event.prototype.stopPropagation = function() {
	this.jeashIsCancelled = true;
}
robothaxe.event.Event.prototype.toString = function() {
	return "Event";
}
robothaxe.event.Event.prototype.__class__ = robothaxe.event.Event;
robothaxe.base.ContextEvent = function(type,body) {
	if( type === $_ ) return;
	robothaxe.event.Event.call(this,type);
	this._body = body;
}
robothaxe.base.ContextEvent.__name__ = ["robothaxe","base","ContextEvent"];
robothaxe.base.ContextEvent.__super__ = robothaxe.event.Event;
for(var k in robothaxe.event.Event.prototype ) robothaxe.base.ContextEvent.prototype[k] = robothaxe.event.Event.prototype[k];
robothaxe.base.ContextEvent.prototype.body = null;
robothaxe.base.ContextEvent.prototype._body = null;
robothaxe.base.ContextEvent.prototype.getBody = function() {
	return this._body;
}
robothaxe.base.ContextEvent.prototype.clone = function() {
	return new robothaxe.base.ContextEvent(this.type,this.getBody());
}
robothaxe.base.ContextEvent.prototype.__class__ = robothaxe.base.ContextEvent;
robothaxe.injector.injectionpoints.MethodInjectionPoint = function(meta,injector) {
	if( meta === $_ ) return;
	this.requiredParameters = 0;
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,meta,injector);
}
robothaxe.injector.injectionpoints.MethodInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","MethodInjectionPoint"];
robothaxe.injector.injectionpoints.MethodInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
for(var k in robothaxe.injector.injectionpoints.InjectionPoint.prototype ) robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype[k] = robothaxe.injector.injectionpoints.InjectionPoint.prototype[k];
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.methodName = null;
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype._parameterInjectionConfigs = null;
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.requiredParameters = null;
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.applyInjection = function(target,injector) {
	var parameters = this.gatherParameterValues(target,injector);
	var method = Reflect.field(target,this.methodName);
	method.apply(target,parameters);
	return target;
}
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.initializeInjection = function(meta) {
	this.methodName = meta.name[0];
	this.gatherParameters(meta);
}
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.gatherParameters = function(meta) {
	var nameArgs = meta.inject;
	var args = meta.args;
	if(nameArgs == null) nameArgs = [];
	this._parameterInjectionConfigs = [];
	var i = 0;
	var _g = 0;
	while(_g < args.length) {
		var arg = args[_g];
		++_g;
		var injectionName = "";
		if(i < nameArgs.length) injectionName = nameArgs[i];
		var parameterTypeName = arg.type;
		if(arg.opt) {
			if(parameterTypeName == "Dynamic") throw new robothaxe.injector.InjectorError("Error in method definition of injectee. Required parameters can't have non class type.");
		} else this.requiredParameters++;
		this._parameterInjectionConfigs.push(new robothaxe.injector.injectionpoints.ParameterInjectionConfig(parameterTypeName,injectionName));
		i++;
	}
}
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.gatherParameterValues = function(target,injector) {
	var parameters = [];
	var length = this._parameterInjectionConfigs.length;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var parameterConfig = this._parameterInjectionConfigs[i];
		var config = injector.getMapping(Type.resolveClass(parameterConfig.typeName),parameterConfig.injectionName);
		var injection = config.getResponse(injector);
		if(injection == null) {
			if(i >= this.requiredParameters) break;
			throw new robothaxe.injector.InjectorError("Injector is missing a rule to handle injection into target " + Type.getClassName(target) + ". Target dependency: " + Type.getClassName(config.request) + ", method: " + this.methodName + ", parameter: " + (i + 1) + ", named: " + parameterConfig.injectionName);
		}
		parameters[i] = injection;
	}
	return parameters;
}
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype.__class__ = robothaxe.injector.injectionpoints.MethodInjectionPoint;
robothaxe.injector.injectionpoints.ParameterInjectionConfig = function(typeName,injectionName) {
	if( typeName === $_ ) return;
	this.typeName = typeName;
	this.injectionName = injectionName;
}
robothaxe.injector.injectionpoints.ParameterInjectionConfig.__name__ = ["robothaxe","injector","injectionpoints","ParameterInjectionConfig"];
robothaxe.injector.injectionpoints.ParameterInjectionConfig.prototype.typeName = null;
robothaxe.injector.injectionpoints.ParameterInjectionConfig.prototype.injectionName = null;
robothaxe.injector.injectionpoints.ParameterInjectionConfig.prototype.__class__ = robothaxe.injector.injectionpoints.ParameterInjectionConfig;
robothaxe.injector.injectionresults.InjectClassResult = function(responseType) {
	if( responseType === $_ ) return;
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.responseType = responseType;
}
robothaxe.injector.injectionresults.InjectClassResult.__name__ = ["robothaxe","injector","injectionresults","InjectClassResult"];
robothaxe.injector.injectionresults.InjectClassResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
for(var k in robothaxe.injector.injectionresults.InjectionResult.prototype ) robothaxe.injector.injectionresults.InjectClassResult.prototype[k] = robothaxe.injector.injectionresults.InjectionResult.prototype[k];
robothaxe.injector.injectionresults.InjectClassResult.prototype.responseType = null;
robothaxe.injector.injectionresults.InjectClassResult.prototype.getResponse = function(injector) {
	return injector.instantiate(this.responseType);
}
robothaxe.injector.injectionresults.InjectClassResult.prototype.__class__ = robothaxe.injector.injectionresults.InjectClassResult;
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{" == null?"null":"{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", " == null?"null":", ";
		s.add(Std.string(l[0]));
		l = l[1];
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
		s.add(l[0]);
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
robothaxe.base.ViewMapBase = function(contextView,injector) {
	if( contextView === $_ ) return;
	this.viewListenerCount = 0;
	this.set_enabled(true);
	this.injector = injector;
	this.useCapture = true;
	this.set_contextView(contextView);
}
robothaxe.base.ViewMapBase.__name__ = ["robothaxe","base","ViewMapBase"];
robothaxe.base.ViewMapBase.prototype.contextView = null;
robothaxe.base.ViewMapBase.prototype.enabled = null;
robothaxe.base.ViewMapBase.prototype.injector = null;
robothaxe.base.ViewMapBase.prototype.useCapture = null;
robothaxe.base.ViewMapBase.prototype.viewListenerCount = null;
robothaxe.base.ViewMapBase.prototype.set_contextView = function(value) {
	if(value != this.contextView) {
		this.removeListeners();
		this.contextView = value;
		if(this.viewListenerCount > 0) this.addListeners();
	}
	return this.contextView;
}
robothaxe.base.ViewMapBase.prototype.set_enabled = function(value) {
	if(value != this.enabled) {
		this.removeListeners();
		this.enabled = value;
		if(this.viewListenerCount > 0) this.addListeners();
	}
	return value;
}
robothaxe.base.ViewMapBase.prototype.addListeners = function() {
}
robothaxe.base.ViewMapBase.prototype.removeListeners = function() {
}
robothaxe.base.ViewMapBase.prototype.onViewAdded = function(view) {
}
robothaxe.base.ViewMapBase.prototype.onViewRemoved = function(view) {
}
robothaxe.base.ViewMapBase.prototype.__class__ = robothaxe.base.ViewMapBase;
robothaxe.injector.injectionresults.InjectSingletonResult = function(responseType) {
	if( responseType === $_ ) return;
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.responseType = responseType;
}
robothaxe.injector.injectionresults.InjectSingletonResult.__name__ = ["robothaxe","injector","injectionresults","InjectSingletonResult"];
robothaxe.injector.injectionresults.InjectSingletonResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
for(var k in robothaxe.injector.injectionresults.InjectionResult.prototype ) robothaxe.injector.injectionresults.InjectSingletonResult.prototype[k] = robothaxe.injector.injectionresults.InjectionResult.prototype[k];
robothaxe.injector.injectionresults.InjectSingletonResult.prototype.responseType = null;
robothaxe.injector.injectionresults.InjectSingletonResult.prototype.response = null;
robothaxe.injector.injectionresults.InjectSingletonResult.prototype.getResponse = function(injector) {
	if(this.response == null) this.response = this.createResponse(injector);
	return this.response;
}
robothaxe.injector.injectionresults.InjectSingletonResult.prototype.createResponse = function(injector) {
	return injector.instantiate(this.responseType);
}
robothaxe.injector.injectionresults.InjectSingletonResult.prototype.__class__ = robothaxe.injector.injectionresults.InjectSingletonResult;
robothaxe.injector.injectionpoints.ConstructorInjectionPoint = function(meta,forClass,injector) {
	if( meta === $_ ) return;
	robothaxe.injector.injectionpoints.MethodInjectionPoint.call(this,meta,injector);
}
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","ConstructorInjectionPoint"];
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.__super__ = robothaxe.injector.injectionpoints.MethodInjectionPoint;
for(var k in robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype ) robothaxe.injector.injectionpoints.ConstructorInjectionPoint.prototype[k] = robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype[k];
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.prototype.applyInjection = function(target,injector) {
	var ofClass = target;
	var withArgs = this.gatherParameterValues(target,injector);
	return Type.createInstance(ofClass,withArgs);
}
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.prototype.initializeInjection = function(meta) {
	this.methodName = "new";
	this.gatherParameters(meta);
}
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.prototype.__class__ = robothaxe.injector.injectionpoints.ConstructorInjectionPoint;
robothaxe.core.IEventMap = function() { }
robothaxe.core.IEventMap.__name__ = ["robothaxe","core","IEventMap"];
robothaxe.core.IEventMap.prototype.mapListener = null;
robothaxe.core.IEventMap.prototype.unmapListener = null;
robothaxe.core.IEventMap.prototype.unmapListeners = null;
robothaxe.core.IEventMap.prototype.__class__ = robothaxe.core.IEventMap;
robothaxe.injector.injectionpoints.PostConstructInjectionPoint = function(meta,injector) {
	if( meta === $_ ) return;
	this.order = 0;
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,meta,injector);
}
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","PostConstructInjectionPoint"];
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
for(var k in robothaxe.injector.injectionpoints.InjectionPoint.prototype ) robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype[k] = robothaxe.injector.injectionpoints.InjectionPoint.prototype[k];
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype.order = null;
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype.methodName = null;
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype.applyInjection = function(target,injector) {
	Reflect.field(target,this.methodName).apply(target,[]);
	return target;
}
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype.initializeInjection = function(meta) {
	this.methodName = meta.name[0];
	if(meta.post != null) this.order = meta.post[0];
}
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype.__class__ = robothaxe.injector.injectionpoints.PostConstructInjectionPoint;
robothaxe.core.IReflector = function() { }
robothaxe.core.IReflector.__name__ = ["robothaxe","core","IReflector"];
robothaxe.core.IReflector.prototype.classExtendsOrImplements = null;
robothaxe.core.IReflector.prototype.getClass = null;
robothaxe.core.IReflector.prototype.getFQCN = null;
robothaxe.core.IReflector.prototype.__class__ = robothaxe.core.IReflector;
hxsignal.SignalBinding = function(listener,once,signal,priority) {
	if( listener === $_ ) return;
	if(priority == null) priority = 0;
	if(once == null) once = false;
	this.once = once;
	this.signal = signal;
	this.priority = priority;
	this.active = true;
	this.set_listener(listener);
}
hxsignal.SignalBinding.__name__ = ["hxsignal","SignalBinding"];
hxsignal.SignalBinding.prototype.listener = null;
hxsignal.SignalBinding.prototype.once = null;
hxsignal.SignalBinding.prototype.priority = null;
hxsignal.SignalBinding.prototype.signal = null;
hxsignal.SignalBinding.prototype.active = null;
hxsignal.SignalBinding.prototype.pause = function() {
	this.active = false;
}
hxsignal.SignalBinding.prototype.resume = function() {
	this.active = true;
}
hxsignal.SignalBinding.prototype.remove = function() {
	this.signal.remove(this.listener);
}
hxsignal.SignalBinding.prototype.execute0 = function() {
	if(this.active) {
		if(this.once) this.remove();
		this.listener();
	}
}
hxsignal.SignalBinding.prototype.execute1 = function(arg1) {
	if(this.active) {
		if(this.once) this.remove();
		this.listener(arg1);
	}
}
hxsignal.SignalBinding.prototype.execute2 = function(arg1,arg2) {
	if(this.active) {
		if(this.once) this.remove();
		this.listener(arg1,arg2);
	}
}
hxsignal.SignalBinding.prototype.set_listener = function(value) {
	this.verifyListener(value);
	this.listener = value;
}
hxsignal.SignalBinding.prototype.verifyListener = function(listener) {
	if(listener == null) throw "Listener is null.";
	if(this.signal == null) throw "Internal signal reference has not been set yet.";
}
hxsignal.SignalBinding.prototype.__class__ = hxsignal.SignalBinding;
hxsignal.SignalBinding.__interfaces__ = [hxsignal.ISignalBinding];
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
robothaxe.core.IInjector = function() { }
robothaxe.core.IInjector.__name__ = ["robothaxe","core","IInjector"];
robothaxe.core.IInjector.prototype.mapValue = null;
robothaxe.core.IInjector.prototype.mapClass = null;
robothaxe.core.IInjector.prototype.mapSingleton = null;
robothaxe.core.IInjector.prototype.mapSingletonOf = null;
robothaxe.core.IInjector.prototype.mapRule = null;
robothaxe.core.IInjector.prototype.injectInto = null;
robothaxe.core.IInjector.prototype.instantiate = null;
robothaxe.core.IInjector.prototype.getInstance = null;
robothaxe.core.IInjector.prototype.createChildInjector = null;
robothaxe.core.IInjector.prototype.unmap = null;
robothaxe.core.IInjector.prototype.hasMapping = null;
robothaxe.core.IInjector.prototype.__class__ = robothaxe.core.IInjector;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
hxsignal.SignalBindingList = function(head,tail) {
	if( head === $_ ) return;
	if(head == null && tail == null) {
		if(hxsignal.SignalBindingList.NIL != null) throw "Parameters head and tail are null. Use the NIL element instead.";
		this.isEmpty = true;
		this.notEmpty = false;
	} else {
		if(tail == null) throw "Tail must not be null.";
		this.head = head;
		this.tail = tail;
		this.isEmpty = false;
		this.notEmpty = true;
	}
}
hxsignal.SignalBindingList.__name__ = ["hxsignal","SignalBindingList"];
hxsignal.SignalBindingList.prototype.head = null;
hxsignal.SignalBindingList.prototype.tail = null;
hxsignal.SignalBindingList.prototype.notEmpty = null;
hxsignal.SignalBindingList.prototype.isEmpty = null;
hxsignal.SignalBindingList.prototype.length = null;
hxsignal.SignalBindingList.prototype.get_length = function() {
	if(this.isEmpty) return 0;
	var result = 0;
	var p = this;
	while(p.notEmpty) {
		++result;
		p = p.tail;
	}
	return result;
}
hxsignal.SignalBindingList.prototype.prepend = function(value) {
	return new hxsignal.SignalBindingList(value,this);
}
hxsignal.SignalBindingList.prototype.insertWithPriority = function(value) {
	if(this.isEmpty) return new hxsignal.SignalBindingList(value,this);
	var priority = value.priority;
	if(priority > this.head.priority) return new hxsignal.SignalBindingList(value,this);
	var p = this;
	var q = null;
	var first = null;
	var last = null;
	while(p.notEmpty) {
		if(priority > p.head.priority) {
			q = new hxsignal.SignalBindingList(value,p);
			if(last != null) last.tail = q;
			return q;
		} else {
			q = new hxsignal.SignalBindingList(p.head,hxsignal.SignalBindingList.NIL);
			if(last != null) last.tail = q;
			if(first == null) first = q;
			last = q;
		}
		p = p.tail;
	}
	if(first == null || last == null) throw "Internal error.";
	last.tail = new hxsignal.SignalBindingList(value,hxsignal.SignalBindingList.NIL);
	return first;
}
hxsignal.SignalBindingList.prototype.filterNot = function(listener) {
	if(this.isEmpty) return this;
	if(Reflect.compareMethods(listener,this.head.listener)) return this.tail;
	var p = this;
	var q = null;
	var first = null;
	var last = null;
	while(p.notEmpty) {
		if(!Reflect.compareMethods(p.head.listener,listener)) {
			q = new hxsignal.SignalBindingList(p.head,hxsignal.SignalBindingList.NIL);
			if(last != null) last.tail = q;
			if(first == null) first = q;
			last = q;
		} else {
			last.tail = p.tail;
			return first;
		}
		p = p.tail;
	}
	return this;
}
hxsignal.SignalBindingList.prototype.contains = function(listener) {
	if(this.isEmpty) return false;
	var p = this;
	while(p.notEmpty) {
		if(Reflect.compareMethods(p.head.listener,listener)) return true;
		p = p.tail;
	}
	return false;
}
hxsignal.SignalBindingList.prototype.find = function(listener) {
	if(this.isEmpty) return null;
	var p = this;
	while(p.notEmpty) {
		if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
		p = p.tail;
	}
	return null;
}
hxsignal.SignalBindingList.prototype.__class__ = hxsignal.SignalBindingList;
hxsignal.Signal = function(p) {
	if( p === $_ ) return;
	this.bindings = hxsignal.Signal.NIL;
	this.existing = null;
}
hxsignal.Signal.__name__ = ["hxsignal","Signal"];
hxsignal.Signal.prototype.bindings = null;
hxsignal.Signal.prototype.existing = null;
hxsignal.Signal.prototype.numListeners = null;
hxsignal.Signal.prototype.get_numListeners = function() {
	return this.bindings.get_length();
}
hxsignal.Signal.prototype.add = function(listener) {
	this.registerListener(listener);
	return listener;
}
hxsignal.Signal.prototype.addOnce = function(listener) {
	this.registerListener(listener,true);
	return listener;
}
hxsignal.Signal.prototype.remove = function(listener) {
	this.bindings = this.bindings.filterNot(listener);
	if(this.bindings.isEmpty) this.existing = null; else this.existing.remove(listener);
	return listener;
}
hxsignal.Signal.prototype.removeAll = function() {
	this.bindings = hxsignal.SignalBindingList.NIL;
	this.existing = null;
}
hxsignal.Signal.prototype.dispatch = function(arg1,arg2) {
	var numArgs = 0;
	if(arg2 != null) numArgs = 2; else if(arg1 != null) numArgs = 1;
	var bindingsToProcess = this.bindings;
	if(bindingsToProcess.notEmpty) {
		if(numArgs == 0) while(bindingsToProcess.notEmpty) {
			bindingsToProcess.head.execute0();
			bindingsToProcess = bindingsToProcess.tail;
		} else if(numArgs == 1) while(bindingsToProcess.notEmpty) {
			bindingsToProcess.head.execute1(arg1);
			bindingsToProcess = bindingsToProcess.tail;
		} else if(numArgs == 2) while(bindingsToProcess.notEmpty) {
			bindingsToProcess.head.execute2(arg1,arg2);
			bindingsToProcess = bindingsToProcess.tail;
		}
	}
}
hxsignal.Signal.prototype.registerListener = function(listener,once) {
	if(once == null) once = false;
	if(this.bindings.isEmpty || this.verifyRegistrationOf(listener,once)) {
		this.bindings = new hxsignal.SignalBindingList(new hxsignal.SignalBinding(listener,once,this),this.bindings);
		if(this.existing == null) this.existing = new hxsignal.ListenerSet();
		this.existing.add(listener);
	}
}
hxsignal.Signal.prototype.verifyRegistrationOf = function(listener,once) {
	if(this.existing == null || !this.existing.has(listener)) return true;
	var existingBinding = this.bindings.find(listener);
	if(existingBinding != null) {
		if(existingBinding.once != once) throw "You cannot addOnce() then add() the same listener without removing the relationship first.";
		return false;
	}
	return true;
}
hxsignal.Signal.prototype.__class__ = hxsignal.Signal;
hxsignal.Signal.__interfaces__ = [hxsignal.ISignal];
hxsignal.ListenerSet = function(p) {
	if( p === $_ ) return;
	this.listeners = [];
}
hxsignal.ListenerSet.__name__ = ["hxsignal","ListenerSet"];
hxsignal.ListenerSet.prototype.listeners = null;
hxsignal.ListenerSet.prototype.has = function(listener) {
	var _g1 = 0, _g = this.listeners.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.listeners[i],listener)) return true;
	}
	return false;
}
hxsignal.ListenerSet.prototype.add = function(listener) {
	if(this.has(listener)) return;
	this.listeners.push(listener);
}
hxsignal.ListenerSet.prototype.remove = function(listener) {
	var _g1 = 0, _g = this.listeners.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.listeners[i],listener)) {
			this.listeners.splice(i,1);
			return;
		}
	}
}
hxsignal.ListenerSet.prototype.__class__ = hxsignal.ListenerSet;
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint = function(p) {
	if( p === $_ ) return;
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,null,null);
}
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","NoParamsConstructorInjectionPoint"];
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
for(var k in robothaxe.injector.injectionpoints.InjectionPoint.prototype ) robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.prototype[k] = robothaxe.injector.injectionpoints.InjectionPoint.prototype[k];
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.prototype.applyInjection = function(target,injector) {
	return Type.createInstance(target,[]);
}
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.prototype.__class__ = robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint;
robothaxe.mvcs.Actor = function(p) {
}
robothaxe.mvcs.Actor.__name__ = ["robothaxe","mvcs","Actor"];
robothaxe.mvcs.Actor.prototype.eventDispatcher = null;
robothaxe.mvcs.Actor.prototype.eventMap = null;
robothaxe.mvcs.Actor.prototype.get_eventMap = function() {
	if(this.eventMap == null) this.eventMap = new robothaxe.base.EventMap(this.eventDispatcher);
	return this.eventMap;
}
robothaxe.mvcs.Actor.prototype.dispatch = function(event) {
	if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
	return false;
}
robothaxe.mvcs.Actor.prototype.__class__ = robothaxe.mvcs.Actor;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
robothaxe.injector.injectionpoints.PropertyInjectionPoint = function(meta,injector) {
	if( meta === $_ ) return;
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,meta,null);
}
robothaxe.injector.injectionpoints.PropertyInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","PropertyInjectionPoint"];
robothaxe.injector.injectionpoints.PropertyInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
for(var k in robothaxe.injector.injectionpoints.InjectionPoint.prototype ) robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype[k] = robothaxe.injector.injectionpoints.InjectionPoint.prototype[k];
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.propertyName = null;
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.propertyType = null;
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.injectionName = null;
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.hasSetter = null;
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.applyInjection = function(target,injector) {
	var injectionConfig = injector.getMapping(Type.resolveClass(this.propertyType),this.injectionName);
	var injection = injectionConfig.getResponse(injector);
	if(injection == null) throw new robothaxe.injector.InjectorError("Injector is missing a rule to handle injection into property \"" + this.propertyName + "\" of object \"" + target + "\". Target dependency: \"" + this.propertyType + "\", named \"" + this.injectionName + "\"");
	if(this.hasSetter) {
		var setter = Reflect.field(target,this.propertyName);
		setter.apply(target,[injection]);
	} else target[this.propertyName] = injection;
	return target;
}
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.initializeInjection = function(meta) {
	this.propertyType = meta.type[0];
	this.hasSetter = meta.setter != null;
	if(this.hasSetter) this.propertyName = meta.setter[0]; else this.propertyName = meta.name[0];
	if(meta.inject == null) this.injectionName = ""; else this.injectionName = meta.inject[0];
}
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype.__class__ = robothaxe.injector.injectionpoints.PropertyInjectionPoint;
robothaxe.core.IMediator = function() { }
robothaxe.core.IMediator.__name__ = ["robothaxe","core","IMediator"];
robothaxe.core.IMediator.prototype.preRegister = null;
robothaxe.core.IMediator.prototype.onRegister = null;
robothaxe.core.IMediator.prototype.preRemove = null;
robothaxe.core.IMediator.prototype.onRemove = null;
robothaxe.core.IMediator.prototype.getViewComponent = null;
robothaxe.core.IMediator.prototype.setViewComponent = null;
robothaxe.core.IMediator.prototype.__class__ = robothaxe.core.IMediator;
robothaxe.base.MediatorBase = function(p) {
}
robothaxe.base.MediatorBase.__name__ = ["robothaxe","base","MediatorBase"];
robothaxe.base.MediatorBase.prototype.viewComponent = null;
robothaxe.base.MediatorBase.prototype.removed = null;
robothaxe.base.MediatorBase.prototype.preRegister = function() {
	this.removed = false;
	this.onRegister();
}
robothaxe.base.MediatorBase.prototype.onRegister = function() {
}
robothaxe.base.MediatorBase.prototype.preRemove = function() {
	this.removed = true;
	this.onRemove();
}
robothaxe.base.MediatorBase.prototype.onRemove = function() {
}
robothaxe.base.MediatorBase.prototype.getViewComponent = function() {
	return this.viewComponent;
}
robothaxe.base.MediatorBase.prototype.setViewComponent = function(viewComponent) {
	this.viewComponent = viewComponent;
}
robothaxe.base.MediatorBase.prototype.__class__ = robothaxe.base.MediatorBase;
robothaxe.base.MediatorBase.__interfaces__ = [robothaxe.core.IMediator];
robothaxe.mvcs.Mediator = function(p) {
	if( p === $_ ) return;
	robothaxe.base.MediatorBase.call(this);
}
robothaxe.mvcs.Mediator.__name__ = ["robothaxe","mvcs","Mediator"];
robothaxe.mvcs.Mediator.__super__ = robothaxe.base.MediatorBase;
for(var k in robothaxe.base.MediatorBase.prototype ) robothaxe.mvcs.Mediator.prototype[k] = robothaxe.base.MediatorBase.prototype[k];
robothaxe.mvcs.Mediator.prototype.eventDispatcher = null;
robothaxe.mvcs.Mediator.prototype.contextView = null;
robothaxe.mvcs.Mediator.prototype.mediatorMap = null;
robothaxe.mvcs.Mediator.prototype.preRemove = function() {
	if(this.get_eventMap() != null) this.get_eventMap().unmapListeners();
	robothaxe.base.MediatorBase.prototype.preRemove.call(this);
}
robothaxe.mvcs.Mediator.prototype.eventMap = null;
robothaxe.mvcs.Mediator.prototype.get_eventMap = function() {
	if(this.eventMap == null) this.eventMap = new robothaxe.base.EventMap(this.eventDispatcher);
	return this.eventMap;
}
robothaxe.mvcs.Mediator.prototype.dispatch = function(event) {
	if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
	return false;
}
robothaxe.mvcs.Mediator.prototype.addViewListener = function(type,listener,eventClass,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = true;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
}
robothaxe.mvcs.Mediator.prototype.addContextListener = function(type,listener,eventClass,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = true;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	this.get_eventMap().mapListener(this.eventDispatcher,type,listener,eventClass,useCapture,priority,useWeakReference);
}
robothaxe.mvcs.Mediator.prototype.__class__ = robothaxe.mvcs.Mediator;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
robothaxe.injector.injectionresults.InjectOtherRuleResult = function(rule) {
	if( rule === $_ ) return;
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.rule = rule;
}
robothaxe.injector.injectionresults.InjectOtherRuleResult.__name__ = ["robothaxe","injector","injectionresults","InjectOtherRuleResult"];
robothaxe.injector.injectionresults.InjectOtherRuleResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
for(var k in robothaxe.injector.injectionresults.InjectionResult.prototype ) robothaxe.injector.injectionresults.InjectOtherRuleResult.prototype[k] = robothaxe.injector.injectionresults.InjectionResult.prototype[k];
robothaxe.injector.injectionresults.InjectOtherRuleResult.prototype.rule = null;
robothaxe.injector.injectionresults.InjectOtherRuleResult.prototype.getResponse = function(injector) {
	return this.rule.getResponse(injector);
}
robothaxe.injector.injectionresults.InjectOtherRuleResult.prototype.__class__ = robothaxe.injector.injectionresults.InjectOtherRuleResult;
if(typeof haxe=='undefined') haxe = {}
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	var arr = haxe_timers;
	this.id = arr.length;
	arr[this.id] = this;
	this.timerId = window.setInterval("haxe_timers[" + this.id + "].run();",time_ms);
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	var arr = haxe_timers;
	arr[this.id] = null;
	if(this.id > 100 && this.id == arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && arr[p] == null) p--;
		arr = arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
}
haxe.Timer.prototype.__class__ = haxe.Timer;
robothaxe.core.ICommandMap = function() { }
robothaxe.core.ICommandMap.__name__ = ["robothaxe","core","ICommandMap"];
robothaxe.core.ICommandMap.prototype.detain = null;
robothaxe.core.ICommandMap.prototype.release = null;
robothaxe.core.ICommandMap.prototype.execute = null;
robothaxe.core.ICommandMap.prototype.mapEvent = null;
robothaxe.core.ICommandMap.prototype.unmapEvent = null;
robothaxe.core.ICommandMap.prototype.unmapEvents = null;
robothaxe.core.ICommandMap.prototype.hasEventCommand = null;
robothaxe.core.ICommandMap.prototype.__class__ = robothaxe.core.ICommandMap;
robothaxe.base.CommandMap = function(eventDispatcher,injector,reflector) {
	if( eventDispatcher === $_ ) return;
	this.eventDispatcher = eventDispatcher;
	this.injector = injector;
	this.reflector = reflector;
	this.eventTypeMap = new robothaxe.util.Dictionary();
	this.verifiedCommandClasses = new robothaxe.util.Register();
	this.detainedCommands = new robothaxe.util.Register();
}
robothaxe.base.CommandMap.__name__ = ["robothaxe","base","CommandMap"];
robothaxe.base.CommandMap.prototype.eventDispatcher = null;
robothaxe.base.CommandMap.prototype.injector = null;
robothaxe.base.CommandMap.prototype.reflector = null;
robothaxe.base.CommandMap.prototype.eventTypeMap = null;
robothaxe.base.CommandMap.prototype.verifiedCommandClasses = null;
robothaxe.base.CommandMap.prototype.detainedCommands = null;
robothaxe.base.CommandMap.prototype.mapEvent = function(eventType,commandClass,eventClass,oneshot) {
	if(oneshot == null) oneshot = false;
	this.verifyCommandClass(commandClass);
	if(eventClass == null) eventClass = robothaxe.event.Event;
	var eventClassMap = this.eventTypeMap.get(eventType);
	if(eventClassMap == null) {
		eventClassMap = new robothaxe.util.Dictionary();
		this.eventTypeMap.add(eventType,eventClassMap);
	}
	var callbacksByCommandClass = eventClassMap.get(eventClass);
	if(callbacksByCommandClass == null) {
		callbacksByCommandClass = new robothaxe.util.Dictionary();
		eventClassMap.add(eventClass,callbacksByCommandClass);
	}
	if(callbacksByCommandClass.get(commandClass) != null) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_COMMANDMAP_OVR + " - eventType (" + eventType + ") and Command (" + commandClass + ")");
	var me = this;
	var commandCallback = function(event) {
		me.routeEventToCommand(event,commandClass,oneshot,eventClass);
	};
	this.eventDispatcher.addEventListener(eventType,commandCallback,false,0,true);
	callbacksByCommandClass.add(commandClass,commandCallback);
}
robothaxe.base.CommandMap.prototype.unmapEvent = function(eventType,commandClass,eventClass) {
	if(eventClass == null) eventClass = robothaxe.event.Event;
	var eventClassMap = this.eventTypeMap.get(eventType);
	if(eventClassMap == null) return;
	var callbacksByCommandClass = eventClassMap.get(eventClass);
	if(callbacksByCommandClass == null) return;
	var commandCallback = callbacksByCommandClass.get(commandClass);
	if(commandCallback == null) return;
	this.eventDispatcher.removeEventListener(eventType,commandCallback,false);
	callbacksByCommandClass.remove(commandClass);
}
robothaxe.base.CommandMap.prototype.unmapEvents = function() {
	var $it0 = this.eventTypeMap.iterator();
	while( $it0.hasNext() ) {
		var eventType = $it0.next();
		var eventClassMap = this.eventTypeMap.get(eventType);
		var $it1 = eventClassMap.iterator();
		while( $it1.hasNext() ) {
			var eventClass = $it1.next();
			var callbacksByCommandClass = eventClassMap.get(eventClass);
			var $it2 = callbacksByCommandClass.iterator();
			while( $it2.hasNext() ) {
				var commandClass = $it2.next();
				var commandCallback = callbacksByCommandClass.get(commandClass);
				this.eventDispatcher.removeEventListener(eventType,commandCallback,false);
			}
		}
	}
	this.eventTypeMap.empty();
}
robothaxe.base.CommandMap.prototype.hasEventCommand = function(eventType,commandClass,eventClass) {
	if(eventClass == null) eventClass = robothaxe.event.Event;
	var eventClassMap = this.eventTypeMap.get(eventType);
	if(eventClassMap == null) return false;
	var callbacksByCommandClass = eventClassMap.get(eventClass);
	if(callbacksByCommandClass == null) return false;
	return callbacksByCommandClass.get(commandClass) != null;
}
robothaxe.base.CommandMap.prototype.execute = function(commandClass,payload,payloadClass,named) {
	if(named == null) named = "";
	this.verifyCommandClass(commandClass);
	if(payload != null || payloadClass != null) {
		if(payloadClass == null) payloadClass = this.reflector.getClass(payload);
		this.injector.mapValue(payloadClass,payload,named);
	}
	var command = this.injector.instantiate(commandClass);
	if(payload != null || payloadClass != null) this.injector.unmap(payloadClass,named);
	command.execute();
}
robothaxe.base.CommandMap.prototype.detain = function(command) {
	this.detainedCommands.add(command);
}
robothaxe.base.CommandMap.prototype.release = function(command) {
	this.detainedCommands.remove(command);
}
robothaxe.base.CommandMap.prototype.verifyCommandClass = function(commandClass) {
	if(!this.verifiedCommandClasses.has(commandClass)) {
		var fields = Type.getInstanceFields(commandClass);
		var verified = Lambda.has(fields,"execute");
		if(verified) this.verifiedCommandClasses.add(commandClass); else throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_COMMANDMAP_NOIMPL + " - " + Type.getClassName(commandClass));
	}
}
robothaxe.base.CommandMap.prototype.routeEventToCommand = function(event,commandClass,oneshot,originalEventClass) {
	if(!Std["is"](event,originalEventClass)) return false;
	this.execute(commandClass,event);
	if(oneshot) this.unmapEvent(event.type,commandClass,originalEventClass);
	return true;
}
robothaxe.base.CommandMap.prototype.__class__ = robothaxe.base.CommandMap;
robothaxe.base.CommandMap.__interfaces__ = [robothaxe.core.ICommandMap];
if(!demos.hellojs.view) demos.hellojs.view = {}
demos.hellojs.view.ReadoutMediator = function(p) {
	if( p === $_ ) return;
	robothaxe.mvcs.Mediator.call(this);
}
demos.hellojs.view.ReadoutMediator.__name__ = ["demos","hellojs","view","ReadoutMediator"];
demos.hellojs.view.ReadoutMediator.__super__ = robothaxe.mvcs.Mediator;
for(var k in robothaxe.mvcs.Mediator.prototype ) demos.hellojs.view.ReadoutMediator.prototype[k] = robothaxe.mvcs.Mediator.prototype[k];
demos.hellojs.view.ReadoutMediator.prototype.view = null;
demos.hellojs.view.ReadoutMediator.prototype.statsModel = null;
demos.hellojs.view.ReadoutMediator.prototype.onRegister = function() {
	this.get_eventMap().mapListener(this.eventDispatcher,demos.hellojs.controller.HelloJsEvent.BALL_CLICKED,$closure(this,"onBallClicked"));
}
demos.hellojs.view.ReadoutMediator.prototype.onBallClicked = function(e) {
	this.view.setText("Click count: " + this.statsModel.getBallClickCount());
}
demos.hellojs.view.ReadoutMediator.prototype.__class__ = demos.hellojs.view.ReadoutMediator;
robothaxe.base.MediatorMap = function(contextView,injector,reflector) {
	if( contextView === $_ ) return;
	robothaxe.base.ViewMapBase.call(this,contextView,injector);
	this.reflector = reflector;
	this.mediatorByView = new robothaxe.util.Dictionary(true);
	this.mappingConfigByView = new robothaxe.util.Dictionary(true);
	this.mappingConfigByViewClassName = new robothaxe.util.Dictionary();
	this.mediatorsMarkedForRemoval = new robothaxe.util.Dictionary();
	this.hasMediatorsMarkedForRemoval = false;
}
robothaxe.base.MediatorMap.__name__ = ["robothaxe","base","MediatorMap"];
robothaxe.base.MediatorMap.__super__ = robothaxe.base.ViewMapBase;
for(var k in robothaxe.base.ViewMapBase.prototype ) robothaxe.base.MediatorMap.prototype[k] = robothaxe.base.ViewMapBase.prototype[k];
robothaxe.base.MediatorMap.prototype.mediatorByView = null;
robothaxe.base.MediatorMap.prototype.mappingConfigByView = null;
robothaxe.base.MediatorMap.prototype.mappingConfigByViewClassName = null;
robothaxe.base.MediatorMap.prototype.mediatorsMarkedForRemoval = null;
robothaxe.base.MediatorMap.prototype.hasMediatorsMarkedForRemoval = null;
robothaxe.base.MediatorMap.prototype.reflector = null;
robothaxe.base.MediatorMap.prototype.mapView = function(viewClassOrName,mediatorClass,injectViewAs,autoCreate,autoRemove) {
	if(autoRemove == null) autoRemove = true;
	if(autoCreate == null) autoCreate = true;
	var viewClassName = this.reflector.getFQCN(viewClassOrName);
	if(this.mappingConfigByViewClassName.get(viewClassName) != null) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_MEDIATORMAP_OVR + " - " + mediatorClass);
	if(this.reflector.classExtendsOrImplements(mediatorClass,robothaxe.core.IMediator) == false) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_MEDIATORMAP_NOIMPL + " - " + mediatorClass);
	var config = new robothaxe.base.MappingConfig();
	config.mediatorClass = mediatorClass;
	config.autoCreate = autoCreate;
	config.autoRemove = autoRemove;
	if(injectViewAs) {
		if(Std["is"](injectViewAs,Array)) config.typedViewClasses = ((function($this) {
			var $r;
			var $t = injectViewAs;
			if(Std["is"]($t,Array)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).copy(); else if(Std["is"](injectViewAs,Class)) config.typedViewClasses = [injectViewAs];
	} else if(Std["is"](viewClassOrName,Class)) config.typedViewClasses = [viewClassOrName];
	this.mappingConfigByViewClassName.add(viewClassName,config);
	if(autoCreate || autoRemove) {
		this.viewListenerCount++;
		if(this.viewListenerCount == 1) this.addListeners();
	}
	if(autoCreate && this.contextView != null && viewClassName == Type.getClassName(Type.getClass(this.contextView))) this.createMediatorUsing(this.contextView,viewClassName,config);
}
robothaxe.base.MediatorMap.prototype.unmapView = function(viewClassOrName) {
	var viewClassName = this.reflector.getFQCN(viewClassOrName);
	var config = this.mappingConfigByViewClassName.get(viewClassName);
	if(config != null && (config.autoCreate || config.autoRemove)) {
		this.viewListenerCount--;
		if(this.viewListenerCount == 0) this.removeListeners();
	}
	this.mappingConfigByViewClassName.remove(viewClassName);
}
robothaxe.base.MediatorMap.prototype.createMediator = function(viewComponent) {
	return this.createMediatorUsing(viewComponent);
}
robothaxe.base.MediatorMap.prototype.registerMediator = function(viewComponent,mediator) {
	this.mediatorByView.add(viewComponent,mediator);
	var mapping = this.mappingConfigByViewClassName.get(Type.getClassName(Type.getClass(viewComponent)));
	this.mappingConfigByView.add(viewComponent,mapping);
	mediator.setViewComponent(viewComponent);
	mediator.preRegister();
}
robothaxe.base.MediatorMap.prototype.removeMediator = function(mediator) {
	if(mediator != null) {
		var viewComponent = mediator.getViewComponent();
		this.mediatorByView.remove(viewComponent);
		this.mappingConfigByView.remove(viewComponent);
		mediator.preRemove();
		mediator.setViewComponent(null);
	}
	return mediator;
}
robothaxe.base.MediatorMap.prototype.removeMediatorByView = function(viewComponent) {
	return this.removeMediator(this.retrieveMediator(viewComponent));
}
robothaxe.base.MediatorMap.prototype.retrieveMediator = function(viewComponent) {
	return this.mediatorByView.get(viewComponent);
}
robothaxe.base.MediatorMap.prototype.hasMapping = function(viewClassOrName) {
	var viewClassName = this.reflector.getFQCN(viewClassOrName);
	return this.mappingConfigByViewClassName.get(viewClassName) != null;
}
robothaxe.base.MediatorMap.prototype.hasMediatorForView = function(viewComponent) {
	return this.mediatorByView.get(viewComponent) != null;
}
robothaxe.base.MediatorMap.prototype.hasMediator = function(mediator) {
	var $it0 = this.mediatorByView.iterator();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(this.mediatorByView.get(key) == mediator) return true;
	}
	return false;
}
robothaxe.base.MediatorMap.prototype.addListeners = function() {
	if(this.contextView != null && this.enabled) {
		this.contextView.viewAdded = $closure(this,"onViewAdded");
		this.contextView.viewRemoved = $closure(this,"onViewRemoved");
	}
}
robothaxe.base.MediatorMap.prototype.removeListeners = function() {
	if(this.contextView != null) {
		this.contextView.viewAdded = null;
		this.contextView.viewRemoved = null;
	}
}
robothaxe.base.MediatorMap.prototype.onViewAdded = function(view) {
	if(this.mediatorsMarkedForRemoval.get(view) != null) {
		this.mediatorsMarkedForRemoval.remove(view);
		return;
	}
	var viewClassName = Type.getClassName(Type.getClass(view));
	var config = this.mappingConfigByViewClassName.get(viewClassName);
	if(config != null && config.autoCreate) this.createMediatorUsing(view,viewClassName,config);
}
robothaxe.base.MediatorMap.prototype.onViewRemoved = function(view) {
	var config = this.mappingConfigByView.get(view);
	if(config != null && config.autoRemove) this.removeMediatorByView(view);
}
robothaxe.base.MediatorMap.prototype.removeMediatorLater = function() {
	var $it0 = this.mediatorsMarkedForRemoval.iterator();
	while( $it0.hasNext() ) {
		var view = $it0.next();
		if(!this.contextView.isAdded(view)) this.removeMediatorByView(view);
		this.mediatorsMarkedForRemoval.remove(view);
	}
	this.hasMediatorsMarkedForRemoval = false;
}
robothaxe.base.MediatorMap.prototype.createMediatorUsing = function(viewComponent,viewClassName,config) {
	var mediator = this.mediatorByView.get(viewComponent);
	if(mediator == null) {
		if(viewClassName == null) viewClassName = Type.getClassName(Type.getClass(viewComponent));
		if(config == null) config = this.mappingConfigByViewClassName.get(viewClassName);
		if(config != null) {
			var _g = 0, _g1 = config.typedViewClasses;
			while(_g < _g1.length) {
				var claxx = _g1[_g];
				++_g;
				this.injector.mapValue(claxx,viewComponent);
			}
			mediator = this.injector.instantiate(config.mediatorClass);
			var _g = 0, _g1 = config.typedViewClasses;
			while(_g < _g1.length) {
				var clazz = _g1[_g];
				++_g;
				this.injector.unmap(clazz);
			}
			this.registerMediator(viewComponent,mediator);
		}
	}
	return mediator;
}
robothaxe.base.MediatorMap.prototype.__class__ = robothaxe.base.MediatorMap;
robothaxe.base.MediatorMap.__interfaces__ = [robothaxe.core.IMediatorMap];
robothaxe.base.MappingConfig = function(p) {
}
robothaxe.base.MappingConfig.__name__ = ["robothaxe","base","MappingConfig"];
robothaxe.base.MappingConfig.prototype.mediatorClass = null;
robothaxe.base.MappingConfig.prototype.typedViewClasses = null;
robothaxe.base.MappingConfig.prototype.autoCreate = null;
robothaxe.base.MappingConfig.prototype.autoRemove = null;
robothaxe.base.MappingConfig.prototype.__class__ = robothaxe.base.MappingConfig;
robothaxe.core.IViewMap = function() { }
robothaxe.core.IViewMap.__name__ = ["robothaxe","core","IViewMap"];
robothaxe.core.IViewMap.prototype.mapPackage = null;
robothaxe.core.IViewMap.prototype.unmapPackage = null;
robothaxe.core.IViewMap.prototype.hasPackage = null;
robothaxe.core.IViewMap.prototype.mapType = null;
robothaxe.core.IViewMap.prototype.unmapType = null;
robothaxe.core.IViewMap.prototype.hasType = null;
robothaxe.core.IViewMap.prototype.contextView = null;
robothaxe.core.IViewMap.prototype.enabled = null;
robothaxe.core.IViewMap.prototype.__class__ = robothaxe.core.IViewMap;
demos.hellojs.controller.HelloJsEvent = function(type,body) {
	if( type === $_ ) return;
	robothaxe.event.Event.call(this,type,true);
	this.body = body;
}
demos.hellojs.controller.HelloJsEvent.__name__ = ["demos","hellojs","controller","HelloJsEvent"];
demos.hellojs.controller.HelloJsEvent.__super__ = robothaxe.event.Event;
for(var k in robothaxe.event.Event.prototype ) demos.hellojs.controller.HelloJsEvent.prototype[k] = robothaxe.event.Event.prototype[k];
demos.hellojs.controller.HelloJsEvent.prototype.body = null;
demos.hellojs.controller.HelloJsEvent.prototype.clone = function() {
	return new demos.hellojs.controller.HelloJsEvent(this.type,this.body);
}
demos.hellojs.controller.HelloJsEvent.prototype.__class__ = demos.hellojs.controller.HelloJsEvent;
robothaxe.injector.Injector = function(p) {
	if( p === $_ ) return;
	this.m_mappings = new Hash();
	this.m_injecteeDescriptions = new robothaxe.injector.ClassHash();
	this.attendedToInjectees = new robothaxe.util.Register();
}
robothaxe.injector.Injector.__name__ = ["robothaxe","injector","Injector"];
robothaxe.injector.Injector.prototype.attendedToInjectees = null;
robothaxe.injector.Injector.prototype.parentInjector = null;
robothaxe.injector.Injector.prototype.m_parentInjector = null;
robothaxe.injector.Injector.prototype.m_mappings = null;
robothaxe.injector.Injector.prototype.m_injecteeDescriptions = null;
robothaxe.injector.Injector.prototype.mapValue = function(whenAskedFor,useValue,named) {
	if(named == null) named = "";
	var config = this.getMapping(whenAskedFor,named);
	config.setResult(new robothaxe.injector.injectionresults.InjectValueResult(useValue));
	return config;
}
robothaxe.injector.Injector.prototype.mapClass = function(whenAskedFor,instantiateClass,named) {
	if(named == null) named = "";
	var config = this.getMapping(whenAskedFor,named);
	config.setResult(new robothaxe.injector.injectionresults.InjectClassResult(instantiateClass));
	return config;
}
robothaxe.injector.Injector.prototype.mapSingleton = function(whenAskedFor,named) {
	if(named == null) named = "";
	return this.mapSingletonOf(whenAskedFor,whenAskedFor,named);
}
robothaxe.injector.Injector.prototype.mapSingletonOf = function(whenAskedFor,useSingletonOf,named) {
	if(named == null) named = "";
	var config = this.getMapping(whenAskedFor,named);
	config.setResult(new robothaxe.injector.injectionresults.InjectSingletonResult(useSingletonOf));
	return config;
}
robothaxe.injector.Injector.prototype.mapRule = function(whenAskedFor,useRule,named) {
	if(named == null) named = "";
	var config = this.getMapping(whenAskedFor,named);
	config.setResult(new robothaxe.injector.injectionresults.InjectOtherRuleResult(useRule));
	return useRule;
}
robothaxe.injector.Injector.prototype.getClassName = function(forClass) {
	if(forClass == null) return "Dynamic"; else return Type.getClassName(forClass);
}
robothaxe.injector.Injector.prototype.getMapping = function(forClass,named) {
	if(named == null) named = "";
	var requestName = this.getClassName(forClass) + "#" + named;
	if(this.m_mappings.exists(requestName)) return this.m_mappings.get(requestName);
	var config = new robothaxe.injector.InjectionConfig(forClass,named);
	this.m_mappings.set(requestName,config);
	return config;
}
robothaxe.injector.Injector.prototype.injectInto = function(target) {
	if(this.attendedToInjectees.has(target)) return;
	this.attendedToInjectees.add(target);
	var targetClass = Type.getClass(target);
	var injecteeDescription = null;
	if(this.m_injecteeDescriptions.exists(targetClass)) injecteeDescription = this.m_injecteeDescriptions.get(targetClass); else injecteeDescription = this.getInjectionPoints(targetClass);
	if(injecteeDescription == null) return;
	var injectionPoints = injecteeDescription.injectionPoints;
	var length = injectionPoints.length;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var injectionPoint = injectionPoints[i];
		injectionPoint.applyInjection(target,this);
	}
}
robothaxe.injector.Injector.prototype.instantiate = function(forClass) {
	var injecteeDescription;
	if(this.m_injecteeDescriptions.exists(forClass)) injecteeDescription = this.m_injecteeDescriptions.get(forClass); else injecteeDescription = this.getInjectionPoints(forClass);
	var injectionPoint = injecteeDescription.ctor;
	var instance = injectionPoint.applyInjection(forClass,this);
	this.injectInto(instance);
	return instance;
}
robothaxe.injector.Injector.prototype.unmap = function(theClass,named) {
	if(named == null) named = "";
	var mapping = this.getConfigurationForRequest(theClass,named);
	if(mapping == null) throw new robothaxe.injector.InjectorError("Error while removing an injector mapping: No mapping defined for class " + this.getClassName(theClass) + ", named \"" + named + "\"");
	mapping.setResult(null);
}
robothaxe.injector.Injector.prototype.hasMapping = function(forClass,named) {
	if(named == null) named = "";
	var mapping = this.getConfigurationForRequest(forClass,named);
	if(mapping == null) return false;
	return mapping.hasResponse(this);
}
robothaxe.injector.Injector.prototype.getInstance = function(ofClass,named) {
	if(named == null) named = "";
	var mapping = this.getConfigurationForRequest(ofClass,named);
	if(mapping == null || !mapping.hasResponse(this)) throw new robothaxe.injector.InjectorError("Error while getting mapping response: No mapping defined for class " + this.getClassName(ofClass) + ", named \"" + named + "\"");
	return mapping.getResponse(this);
}
robothaxe.injector.Injector.prototype.getInjectionPoints = function(forClass) {
	var typeMeta = haxe.rtti.Meta.getType(forClass);
	if(typeMeta != null && Reflect.hasField(typeMeta,"interface")) throw new robothaxe.injector.InjectorError("Interfaces can't be used as instantiatable classes.");
	var fieldsMeta = this.getFields(forClass);
	var ctorInjectionPoint = null;
	var injectionPoints = [];
	var postConstructMethodPoints = [];
	var _g = 0, _g1 = Reflect.fields(fieldsMeta);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var fieldMeta = Reflect.field(fieldsMeta,field);
		var inject = Reflect.hasField(fieldMeta,"inject");
		var post = Reflect.hasField(fieldMeta,"post");
		var type = Reflect.field(fieldMeta,"type");
		var args = Reflect.field(fieldMeta,"args");
		if(field == "_") {
			if(args.length > 0) ctorInjectionPoint = new robothaxe.injector.injectionpoints.ConstructorInjectionPoint(fieldMeta,forClass,this);
		} else if(Reflect.hasField(fieldMeta,"args")) {
			if(inject) {
				var injectionPoint = new robothaxe.injector.injectionpoints.MethodInjectionPoint(fieldMeta,this);
				injectionPoints.push(injectionPoint);
			} else if(post) {
				var injectionPoint = new robothaxe.injector.injectionpoints.PostConstructInjectionPoint(fieldMeta,this);
				postConstructMethodPoints.push(injectionPoint);
			}
		} else if(type != null) {
			var injectionPoint = new robothaxe.injector.injectionpoints.PropertyInjectionPoint(fieldMeta,this);
			injectionPoints.push(injectionPoint);
		}
	}
	if(postConstructMethodPoints.length > 0) {
		postConstructMethodPoints.sort(function(a,b) {
			return a.order - b.order;
		});
		var _g = 0;
		while(_g < postConstructMethodPoints.length) {
			var point = postConstructMethodPoints[_g];
			++_g;
			injectionPoints.push(point);
		}
	}
	if(ctorInjectionPoint == null) ctorInjectionPoint = new robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint();
	var injecteeDescription = new robothaxe.injector.InjecteeDescription(ctorInjectionPoint,injectionPoints);
	this.m_injecteeDescriptions.set(forClass,injecteeDescription);
	return injecteeDescription;
}
robothaxe.injector.Injector.prototype.getConfigurationForRequest = function(forClass,named,traverseAncestors) {
	if(traverseAncestors == null) traverseAncestors = true;
	var requestName = this.getClassName(forClass) + "#" + named;
	if(!this.m_mappings.exists(requestName)) {
		if(traverseAncestors && this.parentInjector != null && this.parentInjector.hasMapping(forClass,named)) return this.getAncestorMapping(forClass,named);
		return null;
	}
	return this.m_mappings.get(requestName);
}
robothaxe.injector.Injector.prototype.set_parentInjector = function(value) {
	if(this.parentInjector != null && value == null) this.attendedToInjectees = new robothaxe.util.Register();
	this.parentInjector = value;
	if(this.parentInjector != null) this.attendedToInjectees = this.parentInjector.attendedToInjectees;
	return this.parentInjector;
}
robothaxe.injector.Injector.prototype.createChildInjector = function() {
	var injector = new robothaxe.injector.Injector();
	injector.set_parentInjector(this);
	return injector;
}
robothaxe.injector.Injector.prototype.getAncestorMapping = function(forClass,named) {
	var parent = this.parentInjector;
	while(parent != null) {
		var parentConfig = parent.getConfigurationForRequest(forClass,named,false);
		if(parentConfig != null && parentConfig.hasOwnResponse()) return parentConfig;
		parent = parent.parentInjector;
	}
	return null;
}
robothaxe.injector.Injector.prototype.getFields = function(type) {
	var meta = { };
	while(type != null) {
		var typeMeta = haxe.rtti.Meta.getFields(type);
		var _g = 0, _g1 = Reflect.fields(typeMeta);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			meta[field] = Reflect.field(typeMeta,field);
		}
		type = Type.getSuperClass(type);
	}
	return meta;
}
robothaxe.injector.Injector.prototype.__class__ = robothaxe.injector.Injector;
robothaxe.injector.Injector.__interfaces__ = [robothaxe.core.IInjector];
robothaxe.injector.ClassHash = function(p) {
	if( p === $_ ) return;
	this.hash = new Hash();
}
robothaxe.injector.ClassHash.__name__ = ["robothaxe","injector","ClassHash"];
robothaxe.injector.ClassHash.prototype.hash = null;
robothaxe.injector.ClassHash.prototype.set = function(key,value) {
	this.hash.set(Type.getClassName(key),value);
}
robothaxe.injector.ClassHash.prototype.get = function(key) {
	return this.hash.get(Type.getClassName(key));
}
robothaxe.injector.ClassHash.prototype.exists = function(key) {
	return this.hash.exists(Type.getClassName(key));
}
robothaxe.injector.ClassHash.prototype.__class__ = robothaxe.injector.ClassHash;
robothaxe.injector.InjecteeDescription = function(ctor,injectionPoints) {
	if( ctor === $_ ) return;
	this.ctor = ctor;
	this.injectionPoints = injectionPoints;
}
robothaxe.injector.InjecteeDescription.__name__ = ["robothaxe","injector","InjecteeDescription"];
robothaxe.injector.InjecteeDescription.prototype.ctor = null;
robothaxe.injector.InjecteeDescription.prototype.injectionPoints = null;
robothaxe.injector.InjecteeDescription.prototype.__class__ = robothaxe.injector.InjecteeDescription;
robothaxe.event.IEventDispatcher = function() { }
robothaxe.event.IEventDispatcher.__name__ = ["robothaxe","event","IEventDispatcher"];
robothaxe.event.IEventDispatcher.prototype.addEventListener = null;
robothaxe.event.IEventDispatcher.prototype.dispatchEvent = null;
robothaxe.event.IEventDispatcher.prototype.hasEventListener = null;
robothaxe.event.IEventDispatcher.prototype.removeEventListener = null;
robothaxe.event.IEventDispatcher.prototype.willTrigger = null;
robothaxe.event.IEventDispatcher.prototype.__class__ = robothaxe.event.IEventDispatcher;
robothaxe.base.ViewMap = function(contextView,injector) {
	if( contextView === $_ ) return;
	robothaxe.base.ViewMapBase.call(this,contextView,injector);
	this.mappedPackages = new Array();
	this.mappedTypes = new robothaxe.util.Dictionary();
	this.injectedViews = new robothaxe.util.Dictionary(true);
}
robothaxe.base.ViewMap.__name__ = ["robothaxe","base","ViewMap"];
robothaxe.base.ViewMap.__super__ = robothaxe.base.ViewMapBase;
for(var k in robothaxe.base.ViewMapBase.prototype ) robothaxe.base.ViewMap.prototype[k] = robothaxe.base.ViewMapBase.prototype[k];
robothaxe.base.ViewMap.prototype.mappedPackages = null;
robothaxe.base.ViewMap.prototype.mappedTypes = null;
robothaxe.base.ViewMap.prototype.injectedViews = null;
robothaxe.base.ViewMap.prototype.mapPackage = function(packageName) {
	if(!Lambda.has(this.mappedPackages,packageName)) {
		this.mappedPackages.push(packageName);
		this.viewListenerCount++;
		if(this.viewListenerCount == 1) this.addListeners();
	}
}
robothaxe.base.ViewMap.prototype.unmapPackage = function(packageName) {
	var index = Lambda.indexOf(this.mappedPackages,packageName);
	if(index > -1) {
		this.mappedPackages.splice(index,1);
		this.viewListenerCount--;
		if(this.viewListenerCount == 0) this.removeListeners();
	}
}
robothaxe.base.ViewMap.prototype.mapType = function(type) {
	if(this.mappedTypes.get(type) != null) return;
	this.mappedTypes.add(type,type);
	this.viewListenerCount++;
	if(this.viewListenerCount == 1) this.addListeners();
	if(this.contextView != null && Std["is"](this.contextView,type)) this.injectInto(this.contextView);
}
robothaxe.base.ViewMap.prototype.unmapType = function(type) {
	var mapping = this.mappedTypes.get(type);
	this.mappedTypes.remove(type);
	if(mapping != null) {
		this.viewListenerCount--;
		if(this.viewListenerCount == 0) this.removeListeners();
	}
}
robothaxe.base.ViewMap.prototype.hasType = function(type) {
	return this.mappedTypes.get(type) != null;
}
robothaxe.base.ViewMap.prototype.hasPackage = function(packageName) {
	return Lambda.has(this.mappedPackages,packageName);
}
robothaxe.base.ViewMap.prototype.addListeners = function() {
	if(this.contextView != null && this.enabled) {
		this.contextView.viewAdded = $closure(this,"onViewAdded");
		this.contextView.viewRemoved = $closure(this,"onViewAdded");
	}
}
robothaxe.base.ViewMap.prototype.removeListeners = function() {
	if(this.contextView != null) {
		this.contextView.viewAdded = null;
		this.contextView.viewRemoved = null;
	}
}
robothaxe.base.ViewMap.prototype.onViewAdded = function(view) {
	if(this.injectedViews.get(view) != null) return;
	var $it0 = this.mappedTypes.iterator();
	while( $it0.hasNext() ) {
		var type = $it0.next();
		if(Std["is"](view,type)) {
			this.injectInto(view);
			return;
		}
	}
	var len = this.mappedPackages.length;
	if(len > 0) {
		var className = Type.getClassName(Type.getClass(view));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			var packageName = this.mappedPackages[i];
			if(className.indexOf(packageName) == 0) {
				this.injectInto(view);
				return;
			}
		}
	}
}
robothaxe.base.ViewMap.prototype.onViewRemoved = function(view) {
	haxe.Log.trace("TODO",{ fileName : "ViewMap.hx", lineNumber : 225, className : "robothaxe.base.ViewMap", methodName : "onViewRemoved"});
}
robothaxe.base.ViewMap.prototype.injectInto = function(view) {
	this.injector.injectInto(view);
	this.injectedViews.add(view,true);
}
robothaxe.base.ViewMap.prototype.__class__ = robothaxe.base.ViewMap;
robothaxe.base.ViewMap.__interfaces__ = [robothaxe.core.IViewMap];
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
if(!robothaxe.util) robothaxe.util = {}
robothaxe.util.Register = function(p) {
	if( p === $_ ) return;
	this.list = new List();
}
robothaxe.util.Register.__name__ = ["robothaxe","util","Register"];
robothaxe.util.Register.prototype.list = null;
robothaxe.util.Register.prototype.has = function(value) {
	var $it0 = this.list.iterator();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		if(v == value) return true;
	}
	return false;
}
robothaxe.util.Register.prototype.add = function(value) {
	if(this.has(value)) return;
	this.list.add(value);
}
robothaxe.util.Register.prototype.remove = function(value) {
	this.list.remove(value);
}
robothaxe.util.Register.prototype.clear = function() {
	this.list.clear();
}
robothaxe.util.Register.prototype.__class__ = robothaxe.util.Register;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype.__class__ = Lambda;
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.obj == null?{ }:meta.obj;
}
haxe.rtti.Meta.getStatics = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.statics == null?{ }:meta.statics;
}
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.fields == null?{ }:meta.fields;
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
robothaxe.event.EventDispatcher = function(target) {
	if( target === $_ ) return;
	if(this.mTarget != null) this.mTarget = target; else this.mTarget = this;
	this.mEventMap = new Hash();
}
robothaxe.event.EventDispatcher.__name__ = ["robothaxe","event","EventDispatcher"];
robothaxe.event.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
robothaxe.event.EventDispatcher.prototype.mTarget = null;
robothaxe.event.EventDispatcher.prototype.mEventMap = null;
robothaxe.event.EventDispatcher.prototype.addEventListener = function(type,inListener,useCapture,inPriority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(inPriority == null) inPriority = 0;
	if(useCapture == null) useCapture = false;
	var list = this.mEventMap.get(type);
	if(list == null) {
		list = new Array();
		this.mEventMap.set(type,list);
	}
	var l = new robothaxe.event._EventDispatcher.Listener(inListener,useCapture,inPriority);
	list.push(l);
}
robothaxe.event.EventDispatcher.prototype.dispatchEvent = function(event) {
	if(event.target == null) event.target = this.mTarget;
	var list = this.mEventMap.get(event.type);
	var capture = event.eventPhase == robothaxe.event.EventPhase.CAPTURING_PHASE;
	if(list != null) {
		list.sort(robothaxe.event.EventDispatcher.compareListeners);
		var idx = 0;
		while(idx < list.length) {
			var listener = list[idx];
			if(listener.mUseCapture == capture) {
				listener.dispatchEvent(event);
				if(event.jeashGetIsCancelledNow()) return true;
			}
			if(idx < list.length && listener != list[idx]) {
			} else idx++;
		}
		return true;
	}
	return false;
}
robothaxe.event.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.mEventMap.exists(type);
}
robothaxe.event.EventDispatcher.prototype.removeEventListener = function(type,listener,inCapture) {
	if(!this.mEventMap.exists(type)) return;
	var list = this.mEventMap.get(type);
	var capture = inCapture == null?false:inCapture;
	var _g1 = 0, _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].Is(listener,capture)) {
			list.splice(i,1);
			return;
		}
	}
}
robothaxe.event.EventDispatcher.prototype.willTrigger = function(type) {
	return this.hasEventListener(type);
}
robothaxe.event.EventDispatcher.prototype.RemoveByID = function(inType,inID) {
	if(!this.mEventMap.exists(inType)) return;
	var list = this.mEventMap.get(inType);
	var _g1 = 0, _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].mID == inID) {
			list.splice(i,1);
			return;
		}
	}
}
robothaxe.event.EventDispatcher.prototype.__class__ = robothaxe.event.EventDispatcher;
robothaxe.event.EventDispatcher.__interfaces__ = [robothaxe.event.IEventDispatcher];
demos.hellojs.view.BaseJsView = function(element) {
	if( element === $_ ) return;
	robothaxe.event.EventDispatcher.call(this);
	this.element = element;
	this.children = [];
}
demos.hellojs.view.BaseJsView.__name__ = ["demos","hellojs","view","BaseJsView"];
demos.hellojs.view.BaseJsView.__super__ = robothaxe.event.EventDispatcher;
for(var k in robothaxe.event.EventDispatcher.prototype ) demos.hellojs.view.BaseJsView.prototype[k] = robothaxe.event.EventDispatcher.prototype[k];
demos.hellojs.view.BaseJsView.prototype.viewAdded = null;
demos.hellojs.view.BaseJsView.prototype.viewRemoved = null;
demos.hellojs.view.BaseJsView.prototype.element = null;
demos.hellojs.view.BaseJsView.prototype.parent = null;
demos.hellojs.view.BaseJsView.prototype.children = null;
demos.hellojs.view.BaseJsView.prototype.add = function(child) {
	this.children.push(child);
	child.parent = this;
	child.viewAdded = this.viewAdded;
	child.viewRemoved = this.viewRemoved;
	if(this.viewAdded != null) child.addChildren();
	this.element.appendChild(child.element);
	if(this.viewAdded != null) this.viewAdded(child);
}
demos.hellojs.view.BaseJsView.prototype.remove = function(child) {
	if(this.viewRemoved != null) child.removeChildren();
	this.children.remove(child);
	child.parent = null;
	child.viewAdded = null;
	child.viewRemoved = null;
	this.element.removeChild(child.element);
	if(this.viewRemoved != null) this.viewRemoved(child);
}
demos.hellojs.view.BaseJsView.prototype.addChildren = function() {
	var _g = 0, _g1 = this.children;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		c.viewAdded = this.viewAdded;
		c.viewRemoved = this.viewRemoved;
		c.addChildren();
		this.viewAdded(c);
	}
}
demos.hellojs.view.BaseJsView.prototype.removeChildren = function() {
	var _g = 0, _g1 = this.children;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		c.removeChildren();
		this.element.removeChild(c.element);
		c.parent = null;
		c.viewAdded = null;
		c.viewRemoved = null;
		if(this.viewRemoved != null) this.viewRemoved(c);
	}
}
demos.hellojs.view.BaseJsView.prototype.isAdded = function(view) {
	return true;
}
demos.hellojs.view.BaseJsView.prototype.__class__ = demos.hellojs.view.BaseJsView;
demos.hellojs.view.BaseJsView.__interfaces__ = [robothaxe.core.IViewContainer];
demos.hellojs.view.Ball = function(p) {
	if( p === $_ ) return;
	demos.hellojs.view.BaseJsView.call(this);
	this.radius = 40;
	this.alpha = 0.75;
	this.drawBall();
	this.addListener();
	this.element = this.circle;
}
demos.hellojs.view.Ball.__name__ = ["demos","hellojs","view","Ball"];
demos.hellojs.view.Ball.__super__ = demos.hellojs.view.BaseJsView;
for(var k in demos.hellojs.view.BaseJsView.prototype ) demos.hellojs.view.Ball.prototype[k] = demos.hellojs.view.BaseJsView.prototype[k];
demos.hellojs.view.Ball.prototype.clicked = null;
demos.hellojs.view.Ball.prototype.circle = null;
demos.hellojs.view.Ball.prototype.radius = null;
demos.hellojs.view.Ball.prototype.colour = null;
demos.hellojs.view.Ball.prototype.alpha = null;
demos.hellojs.view.Ball.prototype.drawBall = function() {
	this.circle = js.Lib.document.createElement("div");
	this.circle.style.position = "absolute";
	this.circle.style.width = this.radius + "px";
	this.circle.style.height = this.radius + "px";
	this.circle.style.background = "#0088cc";
	this.circle.style.opacity = this.alpha;
}
demos.hellojs.view.Ball.prototype.setRadius = function(r) {
	this.radius = r;
	this.circle.style.mozkitBorderRadius = r + "px";
	this.circle.style.webkitBorderRadius = r + "px";
	this.circle.style.borderRadius = r + "px";
	this.circle.style.width = r * 2 + "px";
	this.circle.style.height = r * 2 + "px";
}
demos.hellojs.view.Ball.prototype.addListener = function() {
	var me = this;
	this.clicked = new hxsignal.Signal();
	this.circle.onclick = function(e) {
		me.clicked.dispatch();
	};
}
demos.hellojs.view.Ball.prototype.moveTo = function(x,y) {
	this.circle.style.left = x - this.radius + "px";
	this.circle.style.top = y - this.radius + "px";
}
demos.hellojs.view.Ball.prototype.poke = function() {
	this.colour = Math.random() * 16777215;
	this.circle.style.background = "#" + StringTools.lpad(StringTools.hex(this.colour),"0",6);
	this.setRadius(++this.radius);
}
demos.hellojs.view.Ball.prototype.remove = function(child) {
	this.circle.onclick = null;
	demos.hellojs.view.BaseJsView.prototype.remove.call(this,child);
}
demos.hellojs.view.Ball.prototype.__class__ = demos.hellojs.view.Ball;
robothaxe.core.IContext = function() { }
robothaxe.core.IContext.__name__ = ["robothaxe","core","IContext"];
robothaxe.core.IContext.prototype.eventDispatcher = null;
robothaxe.core.IContext.prototype.__class__ = robothaxe.core.IContext;
robothaxe.injector.InjectionConfig = function(request,injectionName) {
	if( request === $_ ) return;
	this.request = request;
	this.injectionName = injectionName;
}
robothaxe.injector.InjectionConfig.__name__ = ["robothaxe","injector","InjectionConfig"];
robothaxe.injector.InjectionConfig.prototype.request = null;
robothaxe.injector.InjectionConfig.prototype.injectionName = null;
robothaxe.injector.InjectionConfig.prototype.injector = null;
robothaxe.injector.InjectionConfig.prototype.result = null;
robothaxe.injector.InjectionConfig.prototype.getResponse = function(injector) {
	if(this.injector != null) injector = this.injector;
	if(this.result != null) return this.result.getResponse(injector);
	var parentConfig = injector.getAncestorMapping(this.request,this.injectionName);
	if(parentConfig != null) return parentConfig.getResponse(injector);
	return null;
}
robothaxe.injector.InjectionConfig.prototype.hasResponse = function(injector) {
	return this.result != null;
}
robothaxe.injector.InjectionConfig.prototype.hasOwnResponse = function() {
	return this.result != null;
}
robothaxe.injector.InjectionConfig.prototype.setResult = function(result) {
	if(this.result != null && result != null) haxe.Log.trace("Warning: Injector already has a rule for type \"" + Type.getClassName(this.request) + "\", named \"" + this.injectionName + "\".\nIf you have overwritten this mapping intentionally you can use \"injector.unmap()\" prior to your replacement mapping in order to avoid seeing this message.",{ fileName : "InjectionConfig.hx", lineNumber : 59, className : "robothaxe.injector.InjectionConfig", methodName : "setResult"});
	this.result = result;
}
robothaxe.injector.InjectionConfig.prototype.setInjector = function(injector) {
	this.injector = injector;
}
robothaxe.injector.InjectionConfig.prototype.__class__ = robothaxe.injector.InjectionConfig;
demos.hellojs.HelloJs = function(p) {
	if( p === $_ ) return;
	demos.hellojs.view.BaseJsView.call(this,js.Lib.document.getElementById("container"));
	new demos.hellojs.HelloJsContext(this);
}
demos.hellojs.HelloJs.__name__ = ["demos","hellojs","HelloJs"];
demos.hellojs.HelloJs.__super__ = demos.hellojs.view.BaseJsView;
for(var k in demos.hellojs.view.BaseJsView.prototype ) demos.hellojs.HelloJs.prototype[k] = demos.hellojs.view.BaseJsView.prototype[k];
demos.hellojs.HelloJs.main = function() {
	new demos.hellojs.HelloJs();
}
demos.hellojs.HelloJs.prototype.__class__ = demos.hellojs.HelloJs;
demos.hellojs.view.BallMediator = function(p) {
	if( p === $_ ) return;
	robothaxe.mvcs.Mediator.call(this);
}
demos.hellojs.view.BallMediator.__name__ = ["demos","hellojs","view","BallMediator"];
demos.hellojs.view.BallMediator.__super__ = robothaxe.mvcs.Mediator;
for(var k in robothaxe.mvcs.Mediator.prototype ) demos.hellojs.view.BallMediator.prototype[k] = robothaxe.mvcs.Mediator.prototype[k];
demos.hellojs.view.BallMediator.prototype.view = null;
demos.hellojs.view.BallMediator.prototype.statsModel = null;
demos.hellojs.view.BallMediator.prototype.onRegister = function() {
	this.view.clicked.add($closure(this,"onClick"));
	this.get_eventMap().mapListener(this.eventDispatcher,demos.hellojs.controller.HelloJsEvent.BALL_CLICKED,$closure(this,"onSomeBallClicked"));
}
demos.hellojs.view.BallMediator.prototype.onRemove = function() {
	this.view.clicked.remove($closure(this,"onClick"));
	this.get_eventMap().unmapListener(this.eventDispatcher,demos.hellojs.controller.HelloJsEvent.BALL_CLICKED,$closure(this,"onSomeBallClicked"));
}
demos.hellojs.view.BallMediator.prototype.onClick = function() {
	this.statsModel.recordBallClick();
	this.eventDispatcher.dispatchEvent(new demos.hellojs.controller.HelloJsEvent(demos.hellojs.controller.HelloJsEvent.BALL_CLICKED));
}
demos.hellojs.view.BallMediator.prototype.onSomeBallClicked = function(e) {
	this.view.poke();
}
demos.hellojs.view.BallMediator.prototype.__class__ = demos.hellojs.view.BallMediator;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
demos.hellojs.view.Readout = function(p) {
	if( p === $_ ) return;
	demos.hellojs.view.BaseJsView.call(this);
	this.createTextField();
	demos.hellojs.view.BaseJsView.call(this,this.textfield);
	this.element = this.textfield;
}
demos.hellojs.view.Readout.__name__ = ["demos","hellojs","view","Readout"];
demos.hellojs.view.Readout.__super__ = demos.hellojs.view.BaseJsView;
for(var k in demos.hellojs.view.BaseJsView.prototype ) demos.hellojs.view.Readout.prototype[k] = demos.hellojs.view.BaseJsView.prototype[k];
demos.hellojs.view.Readout.prototype.textfield = null;
demos.hellojs.view.Readout.prototype.createTextField = function() {
	this.textfield = js.Lib.document.createElement("div");
	this.textfield.setAttribute("id","readout");
	this.textfield.style.position = "absolute";
	this.textfield.style.left = "0px";
	this.textfield.style.width = "200px";
	this.textfield.style.height = "30px";
	this.textfield.style.background = "#eeeeee";
	this.textfield.style.textAlign = "center";
	this.setText("Click the ball...");
}
demos.hellojs.view.Readout.prototype.setText = function(str) {
	this.textfield.innerHTML = str;
}
demos.hellojs.view.Readout.prototype.__class__ = demos.hellojs.view.Readout;
if(!demos.hellojs.model) demos.hellojs.model = {}
demos.hellojs.model.StatsModel = function(p) {
	if( p === $_ ) return;
	robothaxe.mvcs.Actor.call(this);
	this._ballClickCount = 0;
}
demos.hellojs.model.StatsModel.__name__ = ["demos","hellojs","model","StatsModel"];
demos.hellojs.model.StatsModel.__super__ = robothaxe.mvcs.Actor;
for(var k in robothaxe.mvcs.Actor.prototype ) demos.hellojs.model.StatsModel.prototype[k] = robothaxe.mvcs.Actor.prototype[k];
demos.hellojs.model.StatsModel.prototype.ballClickCount = null;
demos.hellojs.model.StatsModel.prototype._ballClickCount = null;
demos.hellojs.model.StatsModel.prototype.recordBallClick = function() {
	this._ballClickCount++;
}
demos.hellojs.model.StatsModel.prototype.getBallClickCount = function() {
	return this._ballClickCount;
}
demos.hellojs.model.StatsModel.prototype.__class__ = demos.hellojs.model.StatsModel;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
robothaxe.base.ContextBase = function(p) {
	if( p === $_ ) return;
	this.eventDispatcher = new robothaxe.event.EventDispatcher(this);
}
robothaxe.base.ContextBase.__name__ = ["robothaxe","base","ContextBase"];
robothaxe.base.ContextBase.prototype.eventDispatcher = null;
robothaxe.base.ContextBase.prototype.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	this.eventDispatcher.addEventListener(type,listener,useCapture,priority);
}
robothaxe.base.ContextBase.prototype.dispatchEvent = function(event) {
	if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
	return false;
}
robothaxe.base.ContextBase.prototype.hasEventListener = function(type) {
	return this.eventDispatcher.hasEventListener(type);
}
robothaxe.base.ContextBase.prototype.removeEventListener = function(type,listener,useCapture) {
	if(useCapture == null) useCapture = false;
	this.eventDispatcher.removeEventListener(type,listener,useCapture);
}
robothaxe.base.ContextBase.prototype.willTrigger = function(type) {
	return this.eventDispatcher.willTrigger(type);
}
robothaxe.base.ContextBase.prototype.__class__ = robothaxe.base.ContextBase;
robothaxe.base.ContextBase.__interfaces__ = [robothaxe.event.IEventDispatcher,robothaxe.core.IContext];
robothaxe.mvcs.Context = function(contextView,autoStartup) {
	if( contextView === $_ ) return;
	if(autoStartup == null) autoStartup = true;
	robothaxe.base.ContextBase.call(this);
	this.autoStartup = autoStartup;
	this.set_contextView(contextView);
}
robothaxe.mvcs.Context.__name__ = ["robothaxe","mvcs","Context"];
robothaxe.mvcs.Context.__super__ = robothaxe.base.ContextBase;
for(var k in robothaxe.base.ContextBase.prototype ) robothaxe.mvcs.Context.prototype[k] = robothaxe.base.ContextBase.prototype[k];
robothaxe.mvcs.Context.prototype.contextView = null;
robothaxe.mvcs.Context.prototype.commandMap = null;
robothaxe.mvcs.Context.prototype.injector = null;
robothaxe.mvcs.Context.prototype.mediatorMap = null;
robothaxe.mvcs.Context.prototype.reflector = null;
robothaxe.mvcs.Context.prototype.viewMap = null;
robothaxe.mvcs.Context.prototype.autoStartup = null;
robothaxe.mvcs.Context.prototype.startup = function() {
	this.dispatchEvent(new robothaxe.base.ContextEvent(robothaxe.base.ContextEvent.STARTUP_COMPLETE));
}
robothaxe.mvcs.Context.prototype.shutdown = function() {
	this.dispatchEvent(new robothaxe.base.ContextEvent(robothaxe.base.ContextEvent.SHUTDOWN_COMPLETE));
}
robothaxe.mvcs.Context.prototype.set_contextView = function(value) {
	if(this.contextView != value) {
		this.contextView = value;
		this.commandMap = null;
		this.mediatorMap = null;
		this.viewMap = null;
		this.mapInjections();
		this.checkAutoStartup();
	}
	return value;
}
robothaxe.mvcs.Context.prototype.get_injector = function() {
	if(this.injector == null) return this.createInjector();
	return this.injector;
}
robothaxe.mvcs.Context.prototype.get_reflector = function() {
	if(this.reflector == null) this.reflector = new robothaxe.injector.Reflector();
	return this.reflector;
}
robothaxe.mvcs.Context.prototype.get_commandMap = function() {
	if(this.commandMap == null) this.commandMap = new robothaxe.base.CommandMap(this.eventDispatcher,this.createChildInjector(),this.get_reflector());
	return this.commandMap;
}
robothaxe.mvcs.Context.prototype.get_mediatorMap = function() {
	if(this.mediatorMap == null) this.mediatorMap = new robothaxe.base.MediatorMap(this.contextView,this.createChildInjector(),this.get_reflector());
	return this.mediatorMap;
}
robothaxe.mvcs.Context.prototype.get_viewMap = function() {
	if(this.viewMap == null) this.viewMap = new robothaxe.base.ViewMap(this.contextView,this.get_injector());
	return this.viewMap;
}
robothaxe.mvcs.Context.prototype.mapInjections = function() {
	this.get_injector().mapValue(robothaxe.core.IReflector,this.get_reflector());
	this.get_injector().mapValue(robothaxe.core.IInjector,this.get_injector());
	this.get_injector().mapValue(robothaxe.event.IEventDispatcher,this.eventDispatcher);
	this.get_injector().mapValue(robothaxe.core.IViewContainer,this.contextView);
	this.get_injector().mapValue(robothaxe.core.ICommandMap,this.get_commandMap());
	this.get_injector().mapValue(robothaxe.core.IMediatorMap,this.get_mediatorMap());
	this.get_injector().mapValue(robothaxe.core.IViewMap,this.get_viewMap());
	this.get_injector().mapClass(robothaxe.core.IEventMap,robothaxe.base.EventMap);
}
robothaxe.mvcs.Context.prototype.checkAutoStartup = function() {
	if(this.autoStartup && this.contextView != null) this.startup();
}
robothaxe.mvcs.Context.prototype.onAddedToStage = function(e) {
	this.startup();
}
robothaxe.mvcs.Context.prototype.createInjector = function() {
	this.injector = new robothaxe.injector.Injector();
	return this.get_injector();
}
robothaxe.mvcs.Context.prototype.createChildInjector = function() {
	return this.get_injector().createChildInjector();
}
robothaxe.mvcs.Context.prototype.__class__ = robothaxe.mvcs.Context;
robothaxe.mvcs.Context.__interfaces__ = [robothaxe.core.IContext];
if(!robothaxe.event._EventDispatcher) robothaxe.event._EventDispatcher = {}
robothaxe.event._EventDispatcher.Listener = function(inListener,inUseCapture,inPriority) {
	if( inListener === $_ ) return;
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = robothaxe.event._EventDispatcher.Listener.sIDs++;
}
robothaxe.event._EventDispatcher.Listener.__name__ = ["robothaxe","event","_EventDispatcher","Listener"];
robothaxe.event._EventDispatcher.Listener.prototype.mListner = null;
robothaxe.event._EventDispatcher.Listener.prototype.mUseCapture = null;
robothaxe.event._EventDispatcher.Listener.prototype.mPriority = null;
robothaxe.event._EventDispatcher.Listener.prototype.mID = null;
robothaxe.event._EventDispatcher.Listener.prototype.Is = function(inListener,inCapture) {
	return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
}
robothaxe.event._EventDispatcher.Listener.prototype.dispatchEvent = function(event) {
	this.mListner(event);
}
robothaxe.event._EventDispatcher.Listener.prototype.__class__ = robothaxe.event._EventDispatcher.Listener;
robothaxe.injector.Reflector = function(p) {
}
robothaxe.injector.Reflector.__name__ = ["robothaxe","injector","Reflector"];
robothaxe.injector.Reflector.prototype.classExtendsOrImplements = function(classOrClassName,superClass) {
	var actualClass = null;
	if(Std["is"](classOrClassName,Class)) actualClass = (function($this) {
		var $r;
		var $t = classOrClassName;
		if(Std["is"]($t,Class)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)); else if(Std["is"](classOrClassName,String)) try {
		actualClass = Type.resolveClass((function($this) {
			var $r;
			var $t = classOrClassName;
			if(Std["is"]($t,String)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	} catch( e ) {
		throw "The class name " + classOrClassName + " is not valid because of " + e + "\n" + e.getStackTrace();
	}
	if(actualClass == null) throw "The parameter classOrClassName must be a Class or fully qualified class name.";
	var classInstance = Type.createEmptyInstance(actualClass);
	return Std["is"](classInstance,superClass);
}
robothaxe.injector.Reflector.prototype.getClass = function(value) {
	if(Std["is"](value,Class)) return value;
	return Type.getClass(value);
}
robothaxe.injector.Reflector.prototype.getFQCN = function(value) {
	var fqcn;
	if(Std["is"](value,String)) return (function($this) {
		var $r;
		var $t = value;
		if(Std["is"]($t,String)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	return Type.getClassName(value);
}
robothaxe.injector.Reflector.prototype.__class__ = robothaxe.injector.Reflector;
robothaxe.injector.Reflector.__interfaces__ = [robothaxe.core.IReflector];
haxe.rtti.CType = { __ename__ : ["haxe","rtti","CType"], __constructs__ : ["CUnknown","CEnum","CClass","CTypedef","CFunction","CAnonymous","CDynamic"] }
haxe.rtti.CType.CUnknown = ["CUnknown",0];
haxe.rtti.CType.CUnknown.toString = $estr;
haxe.rtti.CType.CUnknown.__enum__ = haxe.rtti.CType;
haxe.rtti.CType.CEnum = function(name,params) { var $x = ["CEnum",1,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CClass = function(name,params) { var $x = ["CClass",2,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CTypedef = function(name,params) { var $x = ["CTypedef",3,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CFunction = function(args,ret) { var $x = ["CFunction",4,args,ret]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CAnonymous = function(fields) { var $x = ["CAnonymous",5,fields]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CDynamic = function(t) { var $x = ["CDynamic",6,t]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.Rights = { __ename__ : ["haxe","rtti","Rights"], __constructs__ : ["RNormal","RNo","RCall","RMethod","RDynamic","RInline"] }
haxe.rtti.Rights.RNormal = ["RNormal",0];
haxe.rtti.Rights.RNormal.toString = $estr;
haxe.rtti.Rights.RNormal.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RNo = ["RNo",1];
haxe.rtti.Rights.RNo.toString = $estr;
haxe.rtti.Rights.RNo.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RCall = function(m) { var $x = ["RCall",2,m]; $x.__enum__ = haxe.rtti.Rights; $x.toString = $estr; return $x; }
haxe.rtti.Rights.RMethod = ["RMethod",3];
haxe.rtti.Rights.RMethod.toString = $estr;
haxe.rtti.Rights.RMethod.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RDynamic = ["RDynamic",4];
haxe.rtti.Rights.RDynamic.toString = $estr;
haxe.rtti.Rights.RDynamic.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RInline = ["RInline",5];
haxe.rtti.Rights.RInline.toString = $estr;
haxe.rtti.Rights.RInline.__enum__ = haxe.rtti.Rights;
haxe.rtti.TypeTree = { __ename__ : ["haxe","rtti","TypeTree"], __constructs__ : ["TPackage","TClassdecl","TEnumdecl","TTypedecl"] }
haxe.rtti.TypeTree.TPackage = function(name,full,subs) { var $x = ["TPackage",0,name,full,subs]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TClassdecl = function(c) { var $x = ["TClassdecl",1,c]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TEnumdecl = function(e) { var $x = ["TEnumdecl",2,e]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TTypedecl = function(t) { var $x = ["TTypedecl",3,t]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeApi = function() { }
haxe.rtti.TypeApi.__name__ = ["haxe","rtti","TypeApi"];
haxe.rtti.TypeApi.typeInfos = function(t) {
	var inf;
	var $e = (t);
	switch( $e[1] ) {
	case 1:
		var c = $e[2];
		inf = c;
		break;
	case 2:
		var e = $e[2];
		inf = e;
		break;
	case 3:
		var t1 = $e[2];
		inf = t1;
		break;
	case 0:
		throw "Unexpected Package";
		break;
	}
	return inf;
}
haxe.rtti.TypeApi.isVar = function(t) {
	return (function($this) {
		var $r;
		switch( (t)[1] ) {
		case 4:
			$r = false;
			break;
		default:
			$r = true;
		}
		return $r;
	}(this));
}
haxe.rtti.TypeApi.leq = function(f,l1,l2) {
	var it = l2.iterator();
	var $it0 = l1.iterator();
	while( $it0.hasNext() ) {
		var e1 = $it0.next();
		if(!it.hasNext()) return false;
		var e2 = it.next();
		if(!f(e1,e2)) return false;
	}
	if(it.hasNext()) return false;
	return true;
}
haxe.rtti.TypeApi.rightsEq = function(r1,r2) {
	if(r1 == r2) return true;
	var $e = (r1);
	switch( $e[1] ) {
	case 2:
		var m1 = $e[2];
		var $e = (r2);
		switch( $e[1] ) {
		case 2:
			var m2 = $e[2];
			return m1 == m2;
		default:
		}
		break;
	default:
	}
	return false;
}
haxe.rtti.TypeApi.typeEq = function(t1,t2) {
	var $e = (t1);
	switch( $e[1] ) {
	case 0:
		return t2 == haxe.rtti.CType.CUnknown;
	case 1:
		var params = $e[3], name = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 1:
			var params2 = $e[3], name2 = $e[2];
			return name == name2 && haxe.rtti.TypeApi.leq(haxe.rtti.TypeApi.typeEq,params,params2);
		default:
		}
		break;
	case 2:
		var params = $e[3], name = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 2:
			var params2 = $e[3], name2 = $e[2];
			return name == name2 && haxe.rtti.TypeApi.leq(haxe.rtti.TypeApi.typeEq,params,params2);
		default:
		}
		break;
	case 3:
		var params = $e[3], name = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 3:
			var params2 = $e[3], name2 = $e[2];
			return name == name2 && haxe.rtti.TypeApi.leq(haxe.rtti.TypeApi.typeEq,params,params2);
		default:
		}
		break;
	case 4:
		var ret = $e[3], args = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 4:
			var ret2 = $e[3], args2 = $e[2];
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},args,args2) && haxe.rtti.TypeApi.typeEq(ret,ret2);
		default:
		}
		break;
	case 5:
		var fields = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 5:
			var fields2 = $e[2];
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},fields,fields2);
		default:
		}
		break;
	case 6:
		var t = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 6:
			var t21 = $e[2];
			if(t == null != (t21 == null)) return false;
			return t == null || haxe.rtti.TypeApi.typeEq(t,t21);
		default:
		}
		break;
	}
	return false;
}
haxe.rtti.TypeApi.fieldEq = function(f1,f2) {
	if(f1.name != f2.name) return false;
	if(!haxe.rtti.TypeApi.typeEq(f1.type,f2.type)) return false;
	if(f1.isPublic != f2.isPublic) return false;
	if(f1.doc != f2.doc) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.get,f2.get)) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.set,f2.set)) return false;
	if(f1.params == null != (f2.params == null)) return false;
	if(f1.params != null && f1.params.join(":") != f2.params.join(":")) return false;
	return true;
}
haxe.rtti.TypeApi.constructorEq = function(c1,c2) {
	if(c1.name != c2.name) return false;
	if(c1.doc != c2.doc) return false;
	if(c1.args == null != (c2.args == null)) return false;
	if(c1.args != null && !haxe.rtti.TypeApi.leq(function(a,b) {
		return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
	},c1.args,c2.args)) return false;
	return true;
}
haxe.rtti.TypeApi.prototype.__class__ = haxe.rtti.TypeApi;
robothaxe.util.Dictionary = function(weakKeys) {
	if( weakKeys === $_ ) return;
	if(weakKeys == null) weakKeys = false;
	this.keys = [];
	this.values = [];
}
robothaxe.util.Dictionary.__name__ = ["robothaxe","util","Dictionary"];
robothaxe.util.Dictionary.prototype.keys = null;
robothaxe.util.Dictionary.prototype.values = null;
robothaxe.util.Dictionary.prototype.add = function(key,value) {
	var _g1 = 0, _g = this.keys.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.keys[i] == key) {
			this.keys[i] = key;
			this.values[i] = value;
			return value;
		}
	}
	this.keys.push(key);
	this.values.push(value);
	return value;
}
robothaxe.util.Dictionary.prototype.get = function(key) {
	var _g1 = 0, _g = this.keys.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.keys[i] == key) return this.values[i];
	}
	return null;
}
robothaxe.util.Dictionary.prototype.remove = function(key) {
	var _g1 = 0, _g = this.keys.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.keys[i] == key) {
			this.keys.splice(i,1);
			this.values.splice(i,1);
			return;
		}
	}
}
robothaxe.util.Dictionary.prototype.empty = function() {
	this.keys = [];
	this.values = [];
}
robothaxe.util.Dictionary.prototype.iterator = function() {
	return this.keys.iterator();
}
robothaxe.util.Dictionary.prototype.__class__ = robothaxe.util.Dictionary;
robothaxe.injector.InjectorError = function(message) {
	if( message === $_ ) return;
	this.message = message;
}
robothaxe.injector.InjectorError.__name__ = ["robothaxe","injector","InjectorError"];
robothaxe.injector.InjectorError.prototype.message = null;
robothaxe.injector.InjectorError.prototype.toString = function() {
	return this.message;
}
robothaxe.injector.InjectorError.prototype.__class__ = robothaxe.injector.InjectorError;
robothaxe.base.EventMap = function(eventDispatcher) {
	if( eventDispatcher === $_ ) return;
	this.dispatcherListeningEnabled = true;
	this.listeners = [];
	this.eventDispatcher = eventDispatcher;
}
robothaxe.base.EventMap.__name__ = ["robothaxe","base","EventMap"];
robothaxe.base.EventMap.prototype.dispatcherListeningEnabled = null;
robothaxe.base.EventMap.prototype.eventDispatcher = null;
robothaxe.base.EventMap.prototype.listeners = null;
robothaxe.base.EventMap.prototype.mapListener = function(dispatcher,type,listener,eventClass,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = true;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	if(this.dispatcherListeningEnabled == false && dispatcher == this.eventDispatcher) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_EVENTMAP_NOSNOOPING);
	if(eventClass == null) eventClass = robothaxe.event.Event;
	var _g = 0, _g1 = this.listeners;
	while(_g < _g1.length) {
		var params = _g1[_g];
		++_g;
		if(params.dispatcher == dispatcher && params.type == type && Reflect.compareMethods(params.listener,listener) && params.useCapture == useCapture && params.eventClass == eventClass) return;
	}
	var me = this;
	var eventCallback = function(event) {
		me.routeEventToListener(event,listener,eventClass);
	};
	var params = { dispatcher : dispatcher, type : type, listener : listener, eventClass : eventClass, eventCallback : eventCallback, useCapture : useCapture};
	this.listeners.push(params);
	dispatcher.addEventListener(type,eventCallback,useCapture,priority,useWeakReference);
}
robothaxe.base.EventMap.prototype.unmapListener = function(dispatcher,type,listener,eventClass,useCapture) {
	if(useCapture == null) useCapture = false;
	if(eventClass == null) eventClass = robothaxe.event.Event;
	var params;
	var i = this.listeners.length;
	while(i-- > 0) {
		params = this.listeners[i];
		if(params.dispatcher == dispatcher && params.type == type && Reflect.compareMethods(params.listener,listener) && params.useCapture == useCapture && params.eventClass == eventClass) {
			dispatcher.removeEventListener(type,params.eventCallback,useCapture);
			this.listeners.splice(i,1);
			return;
		}
	}
}
robothaxe.base.EventMap.prototype.unmapListeners = function() {
	var params;
	var dispatcher;
	while(params = this.listeners.pop()) {
		dispatcher = params.dispatcher;
		dispatcher.removeEventListener(params.type,params.eventCallback,params.useCapture);
	}
}
robothaxe.base.EventMap.prototype.routeEventToListener = function(event,listener,originalEventClass) {
	if(Std["is"](event,originalEventClass)) listener(event);
}
robothaxe.base.EventMap.prototype.__class__ = robothaxe.base.EventMap;
robothaxe.base.EventMap.__interfaces__ = [robothaxe.core.IEventMap];
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
demos.hellojs.HelloJsContext = function(contextView) {
	if( contextView === $_ ) return;
	robothaxe.mvcs.Context.call(this,contextView);
}
demos.hellojs.HelloJsContext.__name__ = ["demos","hellojs","HelloJsContext"];
demos.hellojs.HelloJsContext.__super__ = robothaxe.mvcs.Context;
for(var k in robothaxe.mvcs.Context.prototype ) demos.hellojs.HelloJsContext.prototype[k] = robothaxe.mvcs.Context.prototype[k];
demos.hellojs.HelloJsContext.prototype.startup = function() {
	this.get_commandMap().mapEvent(robothaxe.base.ContextEvent.STARTUP_COMPLETE,demos.hellojs.controller.CreateBallCommand,robothaxe.base.ContextEvent,true);
	this.get_commandMap().mapEvent(demos.hellojs.controller.HelloJsEvent.BALL_CLICKED,demos.hellojs.controller.CreateBallCommand,demos.hellojs.controller.HelloJsEvent);
	this.get_injector().mapSingleton(demos.hellojs.model.StatsModel);
	this.get_mediatorMap().mapView(demos.hellojs.view.Ball,demos.hellojs.view.BallMediator);
	this.get_mediatorMap().mapView(demos.hellojs.view.Readout,demos.hellojs.view.ReadoutMediator);
	var ro = new demos.hellojs.view.Readout();
	((function($this) {
		var $r;
		var $t = $this.contextView;
		if(Std["is"]($t,demos.hellojs.view.BaseJsView)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).add(ro);
	robothaxe.mvcs.Context.prototype.startup.call(this);
}
demos.hellojs.HelloJsContext.prototype.__class__ = demos.hellojs.HelloJsContext;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
if(typeof(haxe_timers) == "undefined") haxe_timers = [];
{
	/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);
;
	var q = window.jQuery;
	js.JQuery = q;
	q.fn.noBubble = q.fn.bind;
	q.fn.loadURL = q.fn.load;
	q.fn.toggleClick = q.fn.toggle;
	q.of = q;
	q.fn.iterator = function() {
		return { pos : 0, j : this, hasNext : function() {
			return this.pos < this.j.length;
		}, next : function() {
			return $(this.j[this.pos++]);
		}};
	};
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
robothaxe.base.ContextError.E_COMMANDMAP_NOIMPL = "Command Class does not implement an execute() method";
robothaxe.base.ContextError.E_COMMANDMAP_OVR = "Cannot overwrite map";
robothaxe.base.ContextError.E_MEDIATORMAP_NOIMPL = "Mediator Class does not implement IMediator";
robothaxe.base.ContextError.E_MEDIATORMAP_OVR = "Mediator Class has already been mapped to a View Class in this context";
robothaxe.base.ContextError.E_EVENTMAP_NOSNOOPING = "Listening to the context eventDispatcher is not enabled for this EventMap";
robothaxe.base.ContextError.E_CONTEXT_INJECTOR = "The ContextBase does not specify a concrete IInjector. Please override the injector getter in your concrete or abstract Context.";
robothaxe.base.ContextError.E_CONTEXT_REFLECTOR = "The ContextBase does not specify a concrete IReflector. Please override the reflector getter in your concrete or abstract Context.";
robothaxe.event.EventPhase.CAPTURING_PHASE = 0;
robothaxe.event.EventPhase.AT_TARGET = 1;
robothaxe.event.EventPhase.BUBBLING_PHASE = 2;
robothaxe.mvcs.Command.__meta__ = { fields : { contextView : { name : ["contextView"], type : ["robothaxe.core.IViewContainer"], inject : null}, commandMap : { name : ["commandMap"], type : ["robothaxe.core.ICommandMap"], inject : null}, eventDispatcher : { name : ["eventDispatcher"], type : ["robothaxe.event.IEventDispatcher"], inject : null}, injector : { name : ["injector"], type : ["robothaxe.core.IInjector"], inject : null}, mediatorMap : { name : ["mediatorMap"], type : ["robothaxe.core.IMediatorMap"], inject : null}}};
hxsignal.ISignalBinding.__meta__ = { obj : { 'interface' : null}};
hxsignal.ISignal.__meta__ = { obj : { 'interface' : null}};
robothaxe.core.IMediatorMap.__meta__ = { obj : { 'interface' : null}};
robothaxe.core.IViewContainer.__meta__ = { obj : { 'interface' : null}};
robothaxe.event.Event.ACTIVATE = "activate";
robothaxe.event.Event.ADDED = "added";
robothaxe.event.Event.ADDED_TO_STAGE = "addedToStage";
robothaxe.event.Event.CANCEL = "cancel";
robothaxe.event.Event.CHANGE = "change";
robothaxe.event.Event.CLOSE = "close";
robothaxe.event.Event.COMPLETE = "complete";
robothaxe.event.Event.CONNECT = "connect";
robothaxe.event.Event.DEACTIVATE = "deactivate";
robothaxe.event.Event.ENTER_FRAME = "enterFrame";
robothaxe.event.Event.ID3 = "id3";
robothaxe.event.Event.INIT = "init";
robothaxe.event.Event.MOUSE_LEAVE = "mouseLeave";
robothaxe.event.Event.OPEN = "open";
robothaxe.event.Event.REMOVED = "removed";
robothaxe.event.Event.REMOVED_FROM_STAGE = "removedFromStage";
robothaxe.event.Event.RENDER = "render";
robothaxe.event.Event.RESIZE = "resize";
robothaxe.event.Event.SCROLL = "scroll";
robothaxe.event.Event.SELECT = "select";
robothaxe.event.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
robothaxe.event.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
robothaxe.event.Event.TAB_INDEX_CHANGE = "tabIndexChange";
robothaxe.event.Event.UNLOAD = "unload";
robothaxe.base.ContextEvent.STARTUP = "startup";
robothaxe.base.ContextEvent.STARTUP_COMPLETE = "startupComplete";
robothaxe.base.ContextEvent.SHUTDOWN = "shutdown";
robothaxe.base.ContextEvent.SHUTDOWN_COMPLETE = "shutdownComplete";
robothaxe.core.IEventMap.__meta__ = { obj : { 'interface' : null}};
robothaxe.core.IReflector.__meta__ = { obj : { 'interface' : null}};
robothaxe.core.IInjector.__meta__ = { obj : { 'interface' : null}};
hxsignal.SignalBindingList.NIL = new hxsignal.SignalBindingList(null,null);
hxsignal.Signal.NIL = hxsignal.SignalBindingList.NIL;
robothaxe.mvcs.Actor.__meta__ = { fields : { eventDispatcher : { name : ["eventDispatcher"], type : ["robothaxe.event.IEventDispatcher"], inject : null}}};
robothaxe.core.IMediator.__meta__ = { obj : { 'interface' : null}};
robothaxe.mvcs.Mediator.__meta__ = { fields : { eventDispatcher : { name : ["eventDispatcher"], type : ["robothaxe.event.IEventDispatcher"], inject : null}, contextView : { name : ["contextView"], type : ["robothaxe.core.IViewContainer"], inject : null}, mediatorMap : { name : ["mediatorMap"], type : ["robothaxe.core.IMediatorMap"], inject : null}}};
robothaxe.core.ICommandMap.__meta__ = { obj : { 'interface' : null}};
demos.hellojs.view.ReadoutMediator.__meta__ = { fields : { view : { name : ["view"], type : ["demos.hellojs.view.Readout"], inject : null}, statsModel : { name : ["statsModel"], type : ["demos.hellojs.model.StatsModel"], inject : null}}};
robothaxe.core.IViewMap.__meta__ = { obj : { 'interface' : null}};
demos.hellojs.controller.HelloJsEvent.BALL_CLICKED = "BALL_CLICKED";
demos.hellojs.controller.HelloJsEvent.CLICK = "CLICK";
robothaxe.event.IEventDispatcher.__meta__ = { obj : { 'interface' : null}};
robothaxe.event.EventDispatcher.mIDBase = 0;
robothaxe.core.IContext.__meta__ = { obj : { 'interface' : null}};
demos.hellojs.view.BallMediator.__meta__ = { fields : { view : { name : ["view"], type : ["demos.hellojs.view.Ball"], inject : null}, statsModel : { name : ["statsModel"], type : ["demos.hellojs.model.StatsModel"], inject : null}}};
robothaxe.event._EventDispatcher.Listener.sIDs = 1;
js.Lib.onerror = null;
demos.hellojs.HelloJs.main()