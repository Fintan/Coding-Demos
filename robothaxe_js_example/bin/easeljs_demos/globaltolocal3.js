$estr = function() { return js.Boot.__string_rec(this,''); }
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
if(typeof demos=='undefined') demos = {}
if(!demos.easel) demos.easel = {}
demos.easel.GlobalToLocal3Test = function(p) {
	if( p === $_ ) return;
	this.init();
}
demos.easel.GlobalToLocal3Test.__name__ = ["demos","easel","GlobalToLocal3Test"];
demos.easel.GlobalToLocal3Test.main = function() {
	new demos.easel.GlobalToLocal3Test();
}
demos.easel.GlobalToLocal3Test.prototype.canvas = null;
demos.easel.GlobalToLocal3Test.prototype.stage = null;
demos.easel.GlobalToLocal3Test.prototype.minDistance = null;
demos.easel.GlobalToLocal3Test.prototype.butt = null;
demos.easel.GlobalToLocal3Test.prototype.butt2 = null;
demos.easel.GlobalToLocal3Test.prototype.bottom = null;
demos.easel.GlobalToLocal3Test.prototype.topBoundary = null;
demos.easel.GlobalToLocal3Test.prototype.right = null;
demos.easel.GlobalToLocal3Test.prototype.left = null;
demos.easel.GlobalToLocal3Test.prototype.ball = null;
demos.easel.GlobalToLocal3Test.prototype.ball2 = null;
demos.easel.GlobalToLocal3Test.prototype.init = function() {
	this.minDistance = 120;
	this.canvas = js.Lib.document.getElementById("myCanvas");
	this.butt = new DOMElement(js.Lib.document.getElementById("myButton"));
	this.butt2 = new DOMElement(js.Lib.document.getElementById("myButton2"));
	this.stage = new Stage(this.canvas);
	this.bottom = this.canvas.height;
	this.topBoundary = 0;
	this.left = 0;
	this.right = this.canvas.width;
	this.ball = new SimpleBall("#00FF00",60);
	this.ball2 = new SimpleBall("#00FF00",60);
	this.setupBallValue();
	this.stage.addChild(this.ball);
	this.stage.addChild(this.ball2);
	this.stage.addChild(this.butt);
	this.stage.addChild(this.butt2);
	this.stage.update();
	Ticker.addListener(this);
}
demos.easel.GlobalToLocal3Test.prototype.checkbounds = function(ball) {
	if(ball.x + ball.radius > this.right) {
		ball.x = this.right - ball.radius;
		ball.vx *= -0.7;
	} else if(ball.x - ball.radius < 0) {
		ball.x = this.left + ball.radius;
		ball.vx *= -0.7;
	}
	if(ball.y + ball.radius > this.bottom) {
		ball.y = this.canvas.height - ball.radius;
		ball.vy *= -0.7;
	} else if(ball.y - ball.radius < this.topBoundary) {
		ball.y = this.topBoundary + ball.radius;
		ball.vy *= -0.7;
	}
}
demos.easel.GlobalToLocal3Test.prototype.tick = function() {
	this.ball.x += this.ball.vx;
	this.ball.y += this.ball.vy;
	this.ball2.x += this.ball2.vx;
	this.ball2.y += this.ball2.vy;
	this.checkbounds(this.ball);
	this.checkbounds(this.ball2);
	var dx = this.ball2.x - this.ball.x;
	var dy = this.ball2.y - this.ball.y;
	var distance = Math.sqrt(dx * dx + dy * dy);
	if(distance < this.minDistance) {
		this.ball.vx *= -0.7;
		this.ball.vy *= -0.7;
		this.ball2.vx /= -0.7;
		this.ball2.vy /= -0.7;
		this.ball.vx += 2.5;
		this.ball.vy += 2.5;
		this.ball2.vx += 2.5;
		this.ball2.vy += 2.5;
		this.ball.selectedColor = "#FF0066";
		this.ball2.selectedColor = "#FF0066";
		var ptA = this.ball.localToGlobal(0,0);
		var ptB = this.ball2.localToGlobal(0,0);
		this.butt.x = ptA.x;
		this.butt.y = ptA.y;
		this.butt2.x = ptB.x;
		this.butt2.y = ptB.y;
	} else {
		this.ball.selectedColor = "#00FF00";
		this.ball2.selectedColor = "#00FF00";
	}
	this.ball.changeColor();
	this.ball2.changeColor();
	this.ball.rotation += this.ball.vx;
	this.ball2.rotation += this.ball2.vx;
	this.stage.update();
}
demos.easel.GlobalToLocal3Test.prototype.setupBallValue = function() {
	this.ball.x = Math.random() * this.canvas.width;
	this.ball.y = Math.random() * this.canvas.height;
	this.ball2.x = Math.random() * this.canvas.width;
	this.ball2.y = Math.random() * this.canvas.height;
	this.ball.vx = Math.random() * 60 - 3;
	this.ball.vy = Math.random() * 60 - 3;
	this.ball2.vx = Math.random() * 60 - 3;
	this.ball2.vy = Math.random() * 60 - 3;
}
demos.easel.GlobalToLocal3Test.prototype.handleButtonClick = function(event) {
	this.setupBallValue();
}
demos.easel.GlobalToLocal3Test.prototype.__class__ = demos.easel.GlobalToLocal3Test;
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
if(typeof js=='undefined') js = {}
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
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Object.prototype.iterator = function() {
      var o = this.instanceKeys();
      var y = this;
      return {
        cur : 0,
        arr : o,
        hasNext: function() { return this.cur < this.arr.length; },
        next: function() { return y[this.arr[this.cur++]]; }
      };
    }
	Object.prototype.instanceKeys = function(proto) {
      var keys = [];
      proto = !proto;
      for(var i in this) {
        if(proto && Object.prototype[i]) continue;
        keys.push(i);
      }
      return keys;
    }
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
js.Lib.onerror = null;
demos.easel.GlobalToLocal3Test.main()