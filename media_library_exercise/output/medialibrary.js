(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	customReplace: function(s,f) {
		var buf = new StringBuf();
		while(true) {
			if(!this.match(s)) break;
			buf.b += Std.string(this.matchedLeft());
			buf.b += Std.string(f(this));
			s = this.matchedRight();
		}
		buf.b += Std.string(s);
		return buf.b;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,r: null
	,__class__: EReg
}
var Hash = function() {
	this.h = { };
};
$hxClasses["Hash"] = Hash;
Hash.__name__ = ["Hash"];
Hash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,h: null
	,__class__: Hash
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
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
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var IntHash = function() {
	this.h = { };
};
$hxClasses["IntHash"] = IntHash;
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,h: null
	,__class__: IntHash
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIter"] = IntIter;
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
	,max: null
	,min: null
	,__class__: IntIter
}
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !$iterator(it)().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = $iterator(a)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = $iterator(b)();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b += Std.string(sep);
			s.b += Std.string(l[0]);
			l = l[1];
		}
		return s.b;
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b += Std.string("{");
		while(l != null) {
			if(first) first = false; else s.b += Std.string(", ");
			s.b += Std.string(Std.string(l[0]));
			l = l[1];
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,remove: function(v) {
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
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,last: function() {
		return this.q == null?null:this.q[0];
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,length: null
	,q: null
	,h: null
	,__class__: List
}
var Main = function() {
	this.runner = new utest.Runner();
	this.runner.addCase(new TestMediaLibrary());
	utest.ui.Report.create(this.runner);
	this.runner.run();
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	new Main();
}
Main.prototype = {
	runner: null
	,__class__: Main
}
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
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
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
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
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && (v.__name__ || v.__ename__);
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
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	toString: function() {
		return this.b;
	}
	,addSub: function(s,pos,len) {
		this.b += HxOverrides.substr(s,pos,len);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
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
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += HxOverrides.substr(c,0,l - sl);
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
		ns += HxOverrides.substr(c,0,l - sl);
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
	return s.charCodeAt(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
var TestMediaLibrary = function() {
};
$hxClasses["TestMediaLibrary"] = TestMediaLibrary;
TestMediaLibrary.__name__ = ["TestMediaLibrary"];
TestMediaLibrary.prototype = {
	testSimpleQuery: function() {
		var result = this.model.getItems(new medialibrary.SimpleQuery("Javascript: the bad parts"));
		utest.Assert.equals(result.length,1,"expecting one match using a correct book title",{ fileName : "TestMediaLibrary.hx", lineNumber : 78, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result2 = this.model.getItems(new medialibrary.SimpleQuery("sdgsgfgfg"));
		utest.Assert.equals(result2.length,0,"expecting no match using a random string",{ fileName : "TestMediaLibrary.hx", lineNumber : 80, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result3 = this.model.getItems(new medialibrary.SimpleQuery("O'Reilly"));
		utest.Assert.equals(result3.length,2,"expecting two matches using a correct publisher name" + Std.string(result3),{ fileName : "TestMediaLibrary.hx", lineNumber : 82, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result4 = this.model.getItems(new medialibrary.SimpleQuery("1001"));
		utest.Assert.equals(result4.length,1,"expecting a match for a correct isbn",{ fileName : "TestMediaLibrary.hx", lineNumber : 84, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result5 = this.model.getItems(new medialibrary.SimpleQuery(null));
		utest.Assert.equals(result5.length,0,"expecting no match when passing null ",{ fileName : "TestMediaLibrary.hx", lineNumber : 86, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result6 = this.model.getItems(new medialibrary.SimpleQuery("Terminator"));
		utest.Assert.equals(result6.length,1,"expecting a match when passing a correct movie name",{ fileName : "TestMediaLibrary.hx", lineNumber : 88, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result7 = this.model.getItems(new medialibrary.SimpleQuery("Takk"));
		utest.Assert.equals(result7.length,1,"expecting a match when passing a correct album name",{ fileName : "TestMediaLibrary.hx", lineNumber : 90, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result8 = this.model.getItems(new medialibrary.SimpleQuery("1985"));
		utest.Assert.equals(result8.length,2,"expecting two matches for 1985 - a cd and a dvd",{ fileName : "TestMediaLibrary.hx", lineNumber : 92, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
		var result9 = this.model.getItems(new medialibrary.SimpleQuery("Douglas Crockford"));
		utest.Assert.equals(result9.length,2,"expecting two matches for Douglas Crockford",{ fileName : "TestMediaLibrary.hx", lineNumber : 94, className : "TestMediaLibrary", methodName : "testSimpleQuery"});
	}
	,testCdQuery: function() {
		var result = this.model.getItems(new medialibrary.CdQuery("Takk",["Sigur Rós"],2009));
		utest.Assert.equals(result.length,1,"expecting one match using complete matching arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 63, className : "TestMediaLibrary", methodName : "testCdQuery"});
		var result2 = this.model.getItems(new medialibrary.CdQuery("Takk"));
		utest.Assert.equals(result2.length,1,"expecting one match using one matching argument and null arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 65, className : "TestMediaLibrary", methodName : "testCdQuery"});
		var result3 = this.model.getItems(new medialibrary.CdQuery("Takkafasafasd"));
		utest.Assert.equals(result3.length,0,"expecting no match using one incorrect matching argument and null arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 67, className : "TestMediaLibrary", methodName : "testCdQuery"});
		var result4 = this.model.getItems(new medialibrary.CdQuery("Takk",["Sigur Rós"],2029));
		utest.Assert.equals(result4.length,0,"expecting no match using complete matching arguments except for the year",{ fileName : "TestMediaLibrary.hx", lineNumber : 69, className : "TestMediaLibrary", methodName : "testCdQuery"});
		var result5 = this.model.getItems(new medialibrary.CdQuery(null,["Sigur Rós"],null));
		utest.Assert.equals(result5.length,1,"expecting a match for the artist name",{ fileName : "TestMediaLibrary.hx", lineNumber : 71, className : "TestMediaLibrary", methodName : "testCdQuery"});
	}
	,testDvdQuery: function() {
		var result = this.model.getItems(new medialibrary.DvdQuery("Terminator",["Arnold Schwarzenegger","Linda Hamilton"],"James Cameron",1985));
		utest.Assert.equals(result.length,1,"expecting one match using complete matching arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 48, className : "TestMediaLibrary", methodName : "testDvdQuery"});
		var result2 = this.model.getItems(new medialibrary.DvdQuery("Terminator"));
		utest.Assert.equals(result2.length,1,"expecting one match using one matching argument and null arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 50, className : "TestMediaLibrary", methodName : "testDvdQuery"});
		var result3 = this.model.getItems(new medialibrary.DvdQuery("Termkgljhlkjinator"));
		utest.Assert.equals(result3.length,0,"expecting no match using one incorrect matching argument and null arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 52, className : "TestMediaLibrary", methodName : "testDvdQuery"});
		var result4 = this.model.getItems(new medialibrary.DvdQuery("Terminator",["Arnold Schwarzenegger","Linda Hamilton"],"Jem Kameron",1985));
		utest.Assert.equals(result4.length,0,"expecting no match using complete matching arguments except for the director name",{ fileName : "TestMediaLibrary.hx", lineNumber : 54, className : "TestMediaLibrary", methodName : "testDvdQuery"});
		var result5 = this.model.getItems(new medialibrary.DvdQuery(null,["Linda Hamilton"],null,null));
		utest.Assert.equals(result5.length,2,"expecting two matches for Linda Hamilton",{ fileName : "TestMediaLibrary.hx", lineNumber : 56, className : "TestMediaLibrary", methodName : "testDvdQuery"});
	}
	,testBookQuery: function() {
		var result = this.model.getItems(new medialibrary.BookQuery(1001,"Javascript: the good parts",["Douglas Crockford"],"O'Reilly"));
		utest.Assert.equals(result.length,1,"expecting one match using complete matching arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 34, className : "TestMediaLibrary", methodName : "testBookQuery"});
		var result2 = this.model.getItems(new medialibrary.BookQuery(null,"Javascript: the good parts",null,null));
		utest.Assert.equals(result2.length,1,"expecting one match using one matching argument and null arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 36, className : "TestMediaLibrary", methodName : "testBookQuery"});
		var result3 = this.model.getItems(new medialibrary.BookQuery(null,"Javascccccript: the good parts",null,null));
		utest.Assert.equals(result3.length,0,"expecting no match using one incorrect matching argument and null arguments",{ fileName : "TestMediaLibrary.hx", lineNumber : 38, className : "TestMediaLibrary", methodName : "testBookQuery"});
		var result4 = this.model.getItems(new medialibrary.BookQuery(1011,"Javascript: the good parts",["Douglas Crockford"],"O'Reilly"));
		utest.Assert.equals(result4.length,0,"expecting no match using complete matching arguments except for the ispn number",{ fileName : "TestMediaLibrary.hx", lineNumber : 40, className : "TestMediaLibrary", methodName : "testBookQuery"});
		var result5 = this.model.getItems(new medialibrary.BookQuery(null,null,["Douglas Crockford"],null));
		utest.Assert.equals(result5.length,2,"expecting two matches for Douglas Crockford",{ fileName : "TestMediaLibrary.hx", lineNumber : 42, className : "TestMediaLibrary", methodName : "testBookQuery"});
	}
	,setup: function() {
		this.model = new medialibrary.MediaShelf();
		this.model.addItem(new medialibrary.Book(1001,"Javascript: the good parts",["Douglas Crockford"],"O'Reilly"));
		this.model.addItem(new medialibrary.Book(1002,"Javascript: the bad parts",["Douglas Crockford"],"O'Reilly"));
		this.model.addItem(new medialibrary.Dvd("Terminator",["Arnold Schwarzenegger","Linda Hamilton"],"James Cameron",1985));
		this.model.addItem(new medialibrary.Dvd("Dante's Peak",["Pierce Brosnan","Linda Hamilton"],"Roger Donaldson",1997));
		this.model.addItem(new medialibrary.Cd("Takk",["Sigur Rós"],2009));
		this.model.addItem(new medialibrary.Cd("Top Of The Pops: 1985",["Various"],1985));
	}
	,model: null
	,__class__: TestMediaLibrary
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
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
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
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
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
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
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
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
		if(v.__name__ || v.__ename__) return ValueType.TObject;
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
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
var haxe = {}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Public = function() { }
$hxClasses["haxe.Public"] = haxe.Public;
haxe.Public.__name__ = ["haxe","Public"];
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new Hash();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype = {
	serializeException: function(e) {
		this.buf.b += Std.string("x");
		this.serialize(e);
	}
	,serialize: function(v) {
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			this.buf.b += Std.string("n");
			break;
		case 1:
			if(v == 0) {
				this.buf.b += Std.string("z");
				return;
			}
			this.buf.b += Std.string("i");
			this.buf.b += Std.string(v);
			break;
		case 2:
			if(Math.isNaN(v)) this.buf.b += Std.string("k"); else if(!Math.isFinite(v)) this.buf.b += Std.string(v < 0?"m":"p"); else {
				this.buf.b += Std.string("d");
				this.buf.b += Std.string(v);
			}
			break;
		case 3:
			this.buf.b += Std.string(v?"t":"f");
			break;
		case 6:
			var c = $e[2];
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) return;
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += Std.string("a");
				var l = v.length;
				var _g = 0;
				while(_g < l) {
					var i = _g++;
					if(v[i] == null) ucount++; else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += Std.string("n"); else {
								this.buf.b += Std.string("u");
								this.buf.b += Std.string(ucount);
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) this.buf.b += Std.string("n"); else {
						this.buf.b += Std.string("u");
						this.buf.b += Std.string(ucount);
					}
				}
				this.buf.b += Std.string("h");
				break;
			case List:
				this.buf.b += Std.string("l");
				var v1 = v;
				var $it0 = v1.iterator();
				while( $it0.hasNext() ) {
					var i = $it0.next();
					this.serialize(i);
				}
				this.buf.b += Std.string("h");
				break;
			case Date:
				var d = v;
				this.buf.b += Std.string("v");
				this.buf.b += Std.string(HxOverrides.dateStr(d));
				break;
			case Hash:
				this.buf.b += Std.string("b");
				var v1 = v;
				var $it1 = v1.keys();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					this.serializeString(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += Std.string("h");
				break;
			case IntHash:
				this.buf.b += Std.string("q");
				var v1 = v;
				var $it2 = v1.keys();
				while( $it2.hasNext() ) {
					var k = $it2.next();
					this.buf.b += Std.string(":");
					this.buf.b += Std.string(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += Std.string("h");
				break;
			case haxe.io.Bytes:
				var v1 = v;
				var i = 0;
				var max = v1.length - 2;
				var charsBuf = new StringBuf();
				var b64 = haxe.Serializer.BASE64;
				while(i < max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					var b3 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt((b2 << 2 | b3 >> 6) & 63));
					charsBuf.b += Std.string(b64.charAt(b3 & 63));
				}
				if(i == max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt(b2 << 2 & 63));
				} else if(i == max + 1) {
					var b1 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt(b1 << 4 & 63));
				}
				var chars = charsBuf.b;
				this.buf.b += Std.string("s");
				this.buf.b += Std.string(chars.length);
				this.buf.b += Std.string(":");
				this.buf.b += Std.string(chars);
				break;
			default:
				this.cache.pop();
				if(v.hxSerialize != null) {
					this.buf.b += Std.string("C");
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					v.hxSerialize(this);
					this.buf.b += Std.string("g");
				} else {
					this.buf.b += Std.string("c");
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					this.serializeFields(v);
				}
			}
			break;
		case 4:
			if(this.useCache && this.serializeRef(v)) return;
			this.buf.b += Std.string("o");
			this.serializeFields(v);
			break;
		case 7:
			var e = $e[2];
			if(this.useCache && this.serializeRef(v)) return;
			this.cache.pop();
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(e));
			if(this.useEnumIndex) {
				this.buf.b += Std.string(":");
				this.buf.b += Std.string(v[1]);
			} else this.serializeString(v[0]);
			this.buf.b += Std.string(":");
			var l = v.length;
			this.buf.b += Std.string(l - 2);
			var _g = 2;
			while(_g < l) {
				var i = _g++;
				this.serialize(v[i]);
			}
			this.cache.push(v);
			break;
		case 5:
			throw "Cannot serialize function";
			break;
		default:
			throw "Cannot serialize " + Std.string(v);
		}
	}
	,serializeFields: function(v) {
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += Std.string("g");
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += Std.string("r");
				this.buf.b += Std.string(i);
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += Std.string("R");
			this.buf.b += Std.string(x);
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += Std.string("y");
		s = StringTools.urlEncode(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += Std.string(":");
		this.buf.b += Std.string(s);
	}
	,toString: function() {
		return this.buf.b;
	}
	,useEnumIndex: null
	,useCache: null
	,scount: null
	,shash: null
	,cache: null
	,buf: null
	,__class__: haxe.Serializer
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
$hxClasses["haxe.Stack"] = haxe.Stack;
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.Stack.makeStack(new Error().stack);
	a.shift();
	Error.prepareStackTrace = oldValue;
	return a;
}
haxe.Stack.exceptionStack = function() {
	return [];
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += Std.string("\nCalled from ");
		haxe.Stack.itemToString(b,s);
	}
	return b.b;
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += Std.string("a C function");
		break;
	case 1:
		var m = $e[2];
		b.b += Std.string("module ");
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b += Std.string(" (");
		}
		b.b += Std.string(file);
		b.b += Std.string(" line ");
		b.b += Std.string(line);
		if(s1 != null) b.b += Std.string(")");
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += Std.string(".");
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += Std.string("local function #");
		b.b += Std.string(n);
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	if(typeof(s) == "string") {
		var stack = s.split("\n");
		var m = [];
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			m.push(haxe.StackItem.Module(line));
		}
		return m;
	} else return s;
}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
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
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new Hash();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new IntHash();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntHash format";
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,getResolver: function() {
		return this.resolver;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,resolver: null
	,scache: null
	,cache: null
	,length: null
	,pos: null
	,buf: null
	,__class__: haxe.Unserializer
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype = {
	getData: function() {
		return this.b;
	}
	,toHex: function() {
		var s = new StringBuf();
		var chars = [];
		var str = "0123456789abcdef";
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g1 = 0, _g = this.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.b[i];
			s.b += String.fromCharCode(chars[c >> 4]);
			s.b += String.fromCharCode(chars[c & 15]);
		}
		return s.b;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len = this.length < other.length?this.length:other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,get: function(pos) {
		return this.b[pos];
	}
	,b: null
	,length: null
	,__class__: haxe.io.Bytes
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.isClass = function(o) {
	return o.__name__;
}
js.Boot.isEnum = function(e) {
	return e.__ename__;
}
js.Boot.getClass = function(o) {
	return o.__class__;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
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
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
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
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Lib = function() { }
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.debug = function() {
	debugger;
}
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib["eval"] = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
var medialibrary = {}
medialibrary.IMediaItem = function() { }
$hxClasses["medialibrary.IMediaItem"] = medialibrary.IMediaItem;
medialibrary.IMediaItem.__name__ = ["medialibrary","IMediaItem"];
medialibrary.Book = function(isbn,title,authors,publisher) {
	this.isbn = isbn;
	this.title = title;
	this.authors = authors;
	this.publisher = publisher;
};
$hxClasses["medialibrary.Book"] = medialibrary.Book;
medialibrary.Book.__name__ = ["medialibrary","Book"];
medialibrary.Book.__interfaces__ = [medialibrary.IMediaItem,haxe.Public];
medialibrary.Book.prototype = {
	toString: function() {
		return this.isbn + " : " + this.title + " : " + this.authors.toString() + " : " + this.publisher;
	}
	,publisher: null
	,authors: null
	,title: null
	,isbn: null
	,__class__: medialibrary.Book
}
medialibrary.IMediaQuery = function() { }
$hxClasses["medialibrary.IMediaQuery"] = medialibrary.IMediaQuery;
medialibrary.IMediaQuery.__name__ = ["medialibrary","IMediaQuery"];
medialibrary.IMediaQuery.prototype = {
	find: null
	,__class__: medialibrary.IMediaQuery
}
medialibrary.BookQuery = function(isbn,title,authors,publisher) {
	this.query = new medialibrary.Book(isbn,title,authors,publisher);
};
$hxClasses["medialibrary.BookQuery"] = medialibrary.BookQuery;
medialibrary.BookQuery.__name__ = ["medialibrary","BookQuery"];
medialibrary.BookQuery.__interfaces__ = [medialibrary.IMediaQuery];
medialibrary.BookQuery.prototype = {
	find: function(item,exact) {
		if(exact == null) exact = true;
		if(Type.getClass(item) == medialibrary.Book) {
			var book = js.Boot.__cast(item , medialibrary.Book);
			return exact?(function($this) {
				var $r;
				var titleMatch = $this.query.title != null?book.title == $this.query.title:true;
				var isbnMatch = $this.query.isbn != null?book.isbn == $this.query.isbn:true;
				var authorsMatch = $this.query.authors != null && book.authors != null?org.casalib.util.ArrayUtil.containsAny(book.authors,$this.query.authors):true;
				var publisherMatch = $this.query.publisher != null?book.publisher == $this.query.publisher:true;
				var allNull = $this.query.title == null && $this.query.isbn == null && $this.query.publisher == null && $this.query.authors == null;
				$r = titleMatch && isbnMatch && publisherMatch && authorsMatch && !allNull;
				return $r;
			}(this)):book.title == this.query.title || book.isbn == this.query.isbn || book.publisher == this.query.publisher || book.authors != null && this.query.authors != null && org.casalib.util.ArrayUtil.containsAny(book.authors,this.query.authors);
		}
		return false;
	}
	,query: null
	,__class__: medialibrary.BookQuery
}
medialibrary.Cd = function(album,artists,year) {
	this.album = album;
	this.artists = artists;
	this.year = year;
};
$hxClasses["medialibrary.Cd"] = medialibrary.Cd;
medialibrary.Cd.__name__ = ["medialibrary","Cd"];
medialibrary.Cd.__interfaces__ = [medialibrary.IMediaItem,haxe.Public];
medialibrary.Cd.prototype = {
	toString: function() {
		return this.album + " : " + this.artists.toString() + " : " + this.year;
	}
	,year: null
	,artists: null
	,album: null
	,__class__: medialibrary.Cd
}
medialibrary.CdQuery = function(album,artists,year) {
	this.query = new medialibrary.Cd(album,artists,year);
};
$hxClasses["medialibrary.CdQuery"] = medialibrary.CdQuery;
medialibrary.CdQuery.__name__ = ["medialibrary","CdQuery"];
medialibrary.CdQuery.__interfaces__ = [medialibrary.IMediaQuery];
medialibrary.CdQuery.prototype = {
	find: function(item,exact) {
		if(exact == null) exact = true;
		if(Type.getClass(item) == medialibrary.Cd) {
			var cd = js.Boot.__cast(item , medialibrary.Cd);
			return exact?(function($this) {
				var $r;
				var albumMatch = $this.query.album != null?cd.album == $this.query.album:true;
				var artistsMatch = $this.query.artists != null && cd.artists != null?org.casalib.util.ArrayUtil.containsAny(cd.artists,$this.query.artists):true;
				var yearMatch = $this.query.year != null?cd.year == $this.query.year:true;
				var allNull = $this.query.album == null && $this.query.artists == null && $this.query.year == null && $this.query.artists == null;
				$r = albumMatch && yearMatch && artistsMatch && !allNull;
				return $r;
			}(this)):cd.album == this.query.album || cd.year == this.query.year || this.query.artists != null && cd.artists != null && org.casalib.util.ArrayUtil.containsAny(cd.artists,this.query.artists);
		}
		return false;
	}
	,query: null
	,__class__: medialibrary.CdQuery
}
medialibrary.Dvd = function(movieName,starring,director,year) {
	this.movieName = movieName;
	this.starring = starring;
	this.director = director;
	this.year = year;
};
$hxClasses["medialibrary.Dvd"] = medialibrary.Dvd;
medialibrary.Dvd.__name__ = ["medialibrary","Dvd"];
medialibrary.Dvd.__interfaces__ = [medialibrary.IMediaItem,haxe.Public];
medialibrary.Dvd.prototype = {
	toString: function() {
		return this.movieName + " : " + this.starring.toString() + " : " + this.director + " : " + this.year;
	}
	,year: null
	,director: null
	,starring: null
	,movieName: null
	,__class__: medialibrary.Dvd
}
medialibrary.DvdQuery = function(movieName,starring,director,year) {
	this.query = new medialibrary.Dvd(movieName,starring,director,year);
};
$hxClasses["medialibrary.DvdQuery"] = medialibrary.DvdQuery;
medialibrary.DvdQuery.__name__ = ["medialibrary","DvdQuery"];
medialibrary.DvdQuery.__interfaces__ = [medialibrary.IMediaQuery];
medialibrary.DvdQuery.prototype = {
	find: function(item,exact) {
		if(exact == null) exact = true;
		if(Type.getClass(item) == medialibrary.Dvd) {
			var dvd = js.Boot.__cast(item , medialibrary.Dvd);
			return exact?(function($this) {
				var $r;
				var movieNameMatch = $this.query.movieName != null?dvd.movieName == $this.query.movieName:true;
				var starringMatch = $this.query.starring != null && dvd.starring != null?org.casalib.util.ArrayUtil.containsAny(dvd.starring,$this.query.starring):true;
				var directorMatch = $this.query.director != null?dvd.director == $this.query.director:true;
				var yearMatch = $this.query.year != null?dvd.year == $this.query.year:true;
				var allNull = $this.query.movieName == null && $this.query.director == null && $this.query.year == null && $this.query.starring == null;
				$r = movieNameMatch && directorMatch && yearMatch && starringMatch && !allNull;
				return $r;
			}(this)):dvd.movieName == this.query.movieName || dvd.director == this.query.director || dvd.year == this.query.year || this.query.starring != null && dvd.starring != null && org.casalib.util.ArrayUtil.containsAny(dvd.starring,this.query.starring);
		}
		return false;
	}
	,query: null
	,__class__: medialibrary.DvdQuery
}
medialibrary.MediaShelf = function() {
	this.library = [];
};
$hxClasses["medialibrary.MediaShelf"] = medialibrary.MediaShelf;
medialibrary.MediaShelf.__name__ = ["medialibrary","MediaShelf"];
medialibrary.MediaShelf.prototype = {
	getItems: function(query) {
		var matchingItems = [];
		var _g = 0, _g1 = this.library;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			if(query.find(item)) matchingItems.push(item);
		}
		return matchingItems;
	}
	,addItem: function(item) {
		this.library.push(item);
	}
	,library: null
	,__class__: medialibrary.MediaShelf
}
medialibrary.SimpleQuery = function(searchStr) {
	this.bookQuery = new medialibrary.BookQuery(Std.parseInt(searchStr),searchStr,searchStr != null?searchStr.split(","):null,searchStr);
	this.cdQuery = new medialibrary.CdQuery(searchStr,searchStr != null?searchStr.split(","):null,Std.parseInt(searchStr));
	this.dvdQuery = new medialibrary.DvdQuery(searchStr,searchStr != null?searchStr.split(","):null,searchStr,Std.parseInt(searchStr));
};
$hxClasses["medialibrary.SimpleQuery"] = medialibrary.SimpleQuery;
medialibrary.SimpleQuery.__name__ = ["medialibrary","SimpleQuery"];
medialibrary.SimpleQuery.__interfaces__ = [medialibrary.IMediaQuery];
medialibrary.SimpleQuery.prototype = {
	find: function(item,exact) {
		if(exact == null) exact = true;
		return (function($this) {
			var $r;
			switch(Type.getClass(item)) {
			case medialibrary.Book:
				$r = $this.bookQuery.find(item,false);
				break;
			case medialibrary.Dvd:
				$r = $this.dvdQuery.find(item,false);
				break;
			case medialibrary.Cd:
				$r = $this.cdQuery.find(item,false);
				break;
			default:
				$r = false;
			}
			return $r;
		}(this));
	}
	,dvdQuery: null
	,cdQuery: null
	,bookQuery: null
	,__class__: medialibrary.SimpleQuery
}
var org = {}
org.casalib = {}
org.casalib.math = {}
org.casalib.math.Percent = function(percentage,isDecimalPercentage) {
	if(isDecimalPercentage == null) isDecimalPercentage = true;
	if(percentage == null) percentage = 0;
	if(isDecimalPercentage) {
		this._percent = percentage;
		percentage;
	} else {
		this._percent = percentage * .01;
		percentage;
	}
};
$hxClasses["org.casalib.math.Percent"] = org.casalib.math.Percent;
org.casalib.math.Percent.__name__ = ["org","casalib","math","Percent"];
org.casalib.math.Percent.prototype = {
	toString: function() {
		return Std.string(this._percent);
	}
	,valueOf: function() {
		return this._percent;
	}
	,clone: function() {
		return new org.casalib.math.Percent(this._percent);
	}
	,equals: function(percent) {
		return this._percent == percent._percent;
	}
	,setDecimalPercentage: function(percent) {
		this._percent = percent;
		return percent;
	}
	,getDecimalPercentage: function() {
		return this._percent;
	}
	,setPercentage: function(percent) {
		this._percent = percent * .01;
		return percent;
	}
	,getPercentage: function() {
		return 100 * this._percent;
	}
	,_percent: null
	,percentage: null
	,decimalPercentage: null
	,__class__: org.casalib.math.Percent
	,__properties__: {set_decimalPercentage:"setDecimalPercentage",get_decimalPercentage:"getDecimalPercentage",set_percentage:"setPercentage",get_percentage:"getPercentage"}
}
org.casalib.util = {}
org.casalib.util.ArrayUtil = function() { }
$hxClasses["org.casalib.util.ArrayUtil"] = org.casalib.util.ArrayUtil;
org.casalib.util.ArrayUtil.__name__ = ["org","casalib","util","ArrayUtil"];
org.casalib.util.ArrayUtil.indexOf = function(inArray,match,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var i = fromIndex - 1;
	while(++i < inArray.length) if(inArray[i] == match) return i;
	return -1;
}
org.casalib.util.ArrayUtil.lastIndexOf = function(inArray,match,fromIndex) {
	var i;
	if(fromIndex == null) i = inArray.length; else i = Math.round(Math.min(inArray.length,fromIndex + 1));
	while(--i > 0) if(inArray[i] == match) return i;
	return -1;
}
org.casalib.util.ArrayUtil.filter = function(inArray,callBack) {
	var newArray = [];
	var iter = new IntIter(0,inArray.length);
	while( iter.hasNext() ) {
		var i = iter.next();
		if(callBack(inArray[i],i,inArray)) newArray.push(inArray[i]);
	}
	return newArray;
}
org.casalib.util.ArrayUtil.sortOn = function(inArray,fieldNames,options) {
	if(options == null) options = 0;
	var result = [];
	if(inArray.length != 0) {
		var oNumeric = (options >> 4 & 1) == 1;
		var oReturnindexedarray = (options >> 3 & 1) == 1;
		var oUniquesort = (options >> 2 & 1) == 1;
		var oDescending = (options >> 1 & 1) == 1;
		var oCaseinsensitive = (options & 1) == 1;
		var hasDup = false;
		if(oUniquesort) {
			var testCase = new Array();
			var _g1 = 0, _g = inArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				testCase[i] = new Array();
				var _g2 = 0;
				while(_g2 < fieldNames.length) {
					var f = fieldNames[_g2];
					++_g2;
					var fi = Reflect.field(inArray[i],f);
					var isString = !(js.Boot.__instanceof(fi,Float) || js.Boot.__instanceof(fi,Int));
					var ele = oCaseinsensitive && isString?Std.string(fi).toLowerCase():inArray[i];
					testCase[i].push(ele);
				}
			}
			var removedDup = org.casalib.util.ArrayUtil.removeDuplicates2(testCase);
			if(removedDup.length != testCase.length) hasDup = true;
		}
		if(!hasDup) {
			var sortArray = oReturnindexedarray?inArray.slice():inArray;
			sortArray.sort(org.casalib.util.ArrayUtil.getSortingFunction(oNumeric,oReturnindexedarray,oUniquesort,oDescending,oCaseinsensitive,fieldNames));
			if(!oReturnindexedarray) result = sortArray; else {
				var usedArray = new Array();
				var _g = 0;
				while(_g < inArray.length) {
					var e = inArray[_g];
					++_g;
					usedArray.push(false);
				}
				var _g = 0;
				while(_g < inArray.length) {
					var e = inArray[_g];
					++_g;
					var index = 0;
					do index = org.casalib.util.ArrayUtil.indexOf(sortArray,e,index); while(index < usedArray.length && usedArray[index] == true);
					usedArray[index] = true;
					result.push(index);
				}
			}
		}
	}
	return result;
}
org.casalib.util.ArrayUtil.sortOnLite = function(inArray,fieldNames,options) {
	if(options == null) options = 0;
	var result = [];
	if(inArray.length != 0) {
		var oNumeric = (options >> 4 & 1) == 1;
		var oUniquesort = (options >> 2 & 1) == 1;
		var oDescending = (options >> 1 & 1) == 1;
		var oCaseinsensitive = (options & 1) == 1;
		var hasDup = false;
		if(oUniquesort) {
			var testCase = new Array();
			var _g1 = 0, _g = inArray.length;
			while(_g1 < _g) {
				var i = _g1++;
				testCase[i] = new Array();
				var _g2 = 0;
				while(_g2 < fieldNames.length) {
					var f = fieldNames[_g2];
					++_g2;
					var fi = Reflect.field(inArray[i],f);
					var isString = !(js.Boot.__instanceof(fi,Float) || js.Boot.__instanceof(fi,Int));
					var ele;
					if(oCaseinsensitive && isString) ele = Std.string(fi).toLowerCase(); else ele = inArray[i];
					testCase[i].push(ele);
				}
			}
			var removedDup = org.casalib.util.ArrayUtil.removeDuplicates2(testCase);
			if(removedDup.length != testCase.length) hasDup = true;
		}
		if(!hasDup) {
			inArray.sort(org.casalib.util.ArrayUtil.getSortingFunction(oNumeric,false,oUniquesort,oDescending,oCaseinsensitive,fieldNames));
			result = inArray;
		}
	}
	return result;
}
org.casalib.util.ArrayUtil.indicesOfSorted = function(inArray,fieldNames,options) {
	if(options == null) options = 0;
	var result = [];
	var sortArray = org.casalib.util.ArrayUtil.sortOnLite(inArray.slice(),fieldNames,options);
	if(sortArray.length != 0) {
		var usedArray = new Array();
		var _g = 0;
		while(_g < inArray.length) {
			var e = inArray[_g];
			++_g;
			usedArray.push(false);
		}
		var _g = 0;
		while(_g < inArray.length) {
			var e = inArray[_g];
			++_g;
			var index = 0;
			do index = org.casalib.util.ArrayUtil.indexOf(sortArray,e,index); while(index < usedArray.length && usedArray[index] == true);
			usedArray[index] = true;
			result.push(index);
		}
	}
	return result;
}
org.casalib.util.ArrayUtil.getSortingFunction = function(oNumeric,oReturnindexedarray,oUniquesort,oDescending,oCaseinsensitive,fieldNames) {
	return function(a,b) {
		var r = 0;
		var _g = 0;
		while(_g < fieldNames.length) {
			var f = fieldNames[_g];
			++_g;
			var af = Reflect.field(a,f);
			var bf = Reflect.field(b,f);
			if(!oNumeric) {
				if(js.Boot.__instanceof(af,Float) || js.Boot.__instanceof(af,Int)) af = Std.string(af);
				if(js.Boot.__instanceof(bf,Float) || js.Boot.__instanceof(bf,Int)) bf = Std.string(bf);
			}
			if(oCaseinsensitive) {
				if(js.Boot.__instanceof(af,String)) af = af.toLowerCase();
				if(js.Boot.__instanceof(bf,String)) bf = bf.toLowerCase();
			}
			if(af != bf) {
				if(!oDescending) {
					if(!oNumeric) r = org.casalib.util.ArrayUtil.strcmp(af,bf) > 0?1:-1; else r = af > bf?1:-1;
				} else if(!oNumeric) r = org.casalib.util.ArrayUtil.strcmp(af,bf) < 0?1:-1; else r = af < bf?1:-1;
			}
		}
		return r;
	};
}
org.casalib.util.ArrayUtil.strcmp = function(s0,s1) {
	var r = s0.length - s1.length;
	var _g1 = 0, _g = Math.floor(Math.min(s0.length,s1.length));
	while(_g1 < _g) {
		var i = _g1++;
		if(s0.charAt(i) != s1.charAt(i)) {
			r = HxOverrides.cca(s0,i) - HxOverrides.cca(s1,i);
			break;
		}
	}
	return r;
}
org.casalib.util.ArrayUtil.removeDuplicates2 = function(inArray) {
	var i = 0;
	var cp = inArray.slice();
	var outArray = inArray.slice();
	var _g = 0;
	while(_g < cp.length) {
		var i1 = cp[_g];
		++_g;
		var _g2 = 1, _g1 = org.casalib.util.ArrayUtil.contains2(outArray,i1);
		while(_g2 < _g1) {
			var j = _g2++;
			HxOverrides.remove(outArray,i1);
		}
	}
	return outArray;
}
org.casalib.util.ArrayUtil.contains2 = function(inArray,item) {
	var i = org.casalib.util.ArrayUtil.indexOf(inArray,item,0);
	var t = 0;
	while(i != -1) {
		i = org.casalib.util.ArrayUtil.indexOf2(inArray,item,i + 1);
		t++;
	}
	return t;
}
org.casalib.util.ArrayUtil.indexOf2 = function(inArray,match,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var i = fromIndex - 1;
	while(++i < inArray.length) if(org.casalib.util.ArrayUtil.equals(inArray[i],match)) return i;
	return -1;
}
org.casalib.util.ArrayUtil.getItemByKeys = function(inArray,keyValues) {
	var i = -1;
	var item;
	var hasKeys;
	while(++i < inArray.length) {
		item = inArray[i];
		hasKeys = true;
		var _g = 0, _g1 = org.casalib.util.ObjectUtil.getKeys(keyValues);
		while(_g < _g1.length) {
			var j = _g1[_g];
			++_g;
			var val = Reflect.field(item,j);
			var val2 = Reflect.field(keyValues,j);
			if(val == null || val != val2) hasKeys = false;
		}
		if(hasKeys) return item;
	}
	return null;
}
org.casalib.util.ArrayUtil.getItemsByKeys = function(inArray,keyValues) {
	var t = new Array();
	var i = -1;
	var item;
	var hasKeys;
	while(++i < inArray.length) {
		item = inArray[i];
		hasKeys = true;
		var _g = 0, _g1 = org.casalib.util.ObjectUtil.getKeys(keyValues);
		while(_g < _g1.length) {
			var j = _g1[_g];
			++_g;
			var val = Reflect.field(item,j);
			var val2 = Reflect.field(keyValues,j);
			if(val == null || val != val2) hasKeys = false;
		}
		if(hasKeys) t.push(item);
	}
	return t;
}
org.casalib.util.ArrayUtil.getItemByAnyKey = function(inArray,keyValues) {
	var i = -1;
	var item;
	while(++i < inArray.length) {
		item = inArray[i];
		var _g = 0, _g1 = org.casalib.util.ObjectUtil.getKeys(keyValues);
		while(_g < _g1.length) {
			var j = _g1[_g];
			++_g;
			var val = Reflect.field(item,j);
			var val2 = Reflect.field(keyValues,j);
			if(val != null && val == val2) return item;
		}
	}
	return null;
}
org.casalib.util.ArrayUtil.getItemsByAnyKey = function(inArray,keyValues) {
	var t = new Array();
	var i = -1;
	var item;
	var hasKeys = false;
	while(++i < inArray.length) {
		item = inArray[i];
		hasKeys = true;
		var _g = 0, _g1 = org.casalib.util.ObjectUtil.getKeys(keyValues);
		while(_g < _g1.length) {
			var j = _g1[_g];
			++_g;
			var val = Reflect.field(item,j);
			var val2 = Reflect.field(keyValues,j);
			if(val != null && val == val2) {
				t.push(item);
				break;
			}
		}
	}
	return t;
}
org.casalib.util.ArrayUtil.getItemByKey = function(inArray,key,match) {
	var _g = 0;
	while(_g < inArray.length) {
		var item = inArray[_g];
		++_g;
		var value = Reflect.field(item,key);
		if(value != null && value == match) return item;
	}
	return null;
}
org.casalib.util.ArrayUtil.getItemsByKey = function(inArray,key,match) {
	var t = new Array();
	var _g = 0;
	while(_g < inArray.length) {
		var item = inArray[_g];
		++_g;
		var value = Reflect.field(item,key);
		if(value != null && value == match) t.push(item);
	}
	return t;
}
org.casalib.util.ArrayUtil.getItemByType = function(inArray,type) {
	var _g = 0;
	while(_g < inArray.length) {
		var item = inArray[_g];
		++_g;
		if(js.Boot.__instanceof(item,type)) return item;
	}
	return null;
}
org.casalib.util.ArrayUtil.getItemsByType = function(inArray,type) {
	var t = new Array();
	var _g = 0;
	while(_g < inArray.length) {
		var item = inArray[_g];
		++_g;
		if(js.Boot.__instanceof(item,type)) t.push(item);
	}
	return t;
}
org.casalib.util.ArrayUtil.getValuesByKey = function(inArray,key) {
	var k = new Array();
	var _g = 0;
	while(_g < inArray.length) {
		var item = inArray[_g];
		++_g;
		var v = Reflect.field(item,key);
		if(v != null) k.push(v);
	}
	return k;
}
org.casalib.util.ArrayUtil.equals = function(first,second) {
	var i = first.length;
	var result = true;
	if(i != second.length) result = false; else while(i-- > 0) if(first[i] != second[i]) {
		result = false;
		break;
	}
	return result;
}
org.casalib.util.ArrayUtil.addItemsAt = function(tarArray,items,index) {
	if(index == null) index = 2147483647;
	if(items.length == 0) return false; else {
		var i = -1;
		while(++i < items.length) tarArray.splice(index++,0,items[i]);
		return true;
	}
}
org.casalib.util.ArrayUtil.removeDuplicates = function(inArray) {
	var i = 0;
	var cp = inArray.slice();
	var outArray = inArray.slice();
	var _g = 0;
	while(_g < cp.length) {
		var i1 = cp[_g];
		++_g;
		var _g2 = 1, _g1 = org.casalib.util.ArrayUtil.contains(outArray,i1);
		while(_g2 < _g1) {
			var j = _g2++;
			HxOverrides.remove(outArray,i1);
		}
	}
	return outArray;
}
org.casalib.util.ArrayUtil.removeItem = function(tarArray,item) {
	var i = org.casalib.util.ArrayUtil.indexOf(tarArray,item);
	var f = 0;
	while(i != -1) {
		tarArray.splice(i,1);
		i = org.casalib.util.ArrayUtil.indexOf(tarArray,item,i);
		f++;
	}
	return f;
}
org.casalib.util.ArrayUtil.removeItems = function(tarArray,items) {
	var removed = false;
	var l = tarArray.length;
	while(l-- > 0) if(org.casalib.util.ArrayUtil.indexOf(items,tarArray[l]) > -1) {
		tarArray.splice(l,1);
		removed = true;
	}
	return removed;
}
org.casalib.util.ArrayUtil.retainItems = function(tarArray,items) {
	var removed = false;
	var l = tarArray.length;
	while(l-- > 0) if(org.casalib.util.ArrayUtil.indexOf(items,tarArray[l]) == -1) {
		tarArray.splice(l,1);
		removed = true;
	}
	return removed;
}
org.casalib.util.ArrayUtil.contains = function(inArray,item) {
	var i = org.casalib.util.ArrayUtil.indexOf(inArray,item,0);
	var t = 0;
	while(i != -1) {
		i = org.casalib.util.ArrayUtil.indexOf(inArray,item,i + 1);
		t++;
	}
	return t;
}
org.casalib.util.ArrayUtil.containsAll = function(inArray,items) {
	var l = items.length;
	while(l-- > 0) if(org.casalib.util.ArrayUtil.indexOf(inArray,items[l]) == -1) return false;
	return true;
}
org.casalib.util.ArrayUtil.containsAny = function(inArray,items) {
	var l = items.length;
	while(l-- > 0) if(org.casalib.util.ArrayUtil.indexOf(inArray,items[l]) > -1) return true;
	return false;
}
org.casalib.util.ArrayUtil.getIndexOfDifference = function(first,second,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var i = fromIndex - 1;
	while(++i < first.length) if(first[i] != second[i]) return i;
	return -1;
}
org.casalib.util.ArrayUtil.random = function(inArray) {
	return org.casalib.util.ArrayUtil.randomize(inArray)[0];
}
org.casalib.util.ArrayUtil.randomize = function(inArray) {
	var t = new Array();
	var c = inArray.slice();
	while(c.length > 0) t.push(c.splice(Math.round(Math.random() * (c.length - 1)),1)[0]);
	return t;
}
org.casalib.util.ArrayUtil.sum = function(inArray) {
	var t = 0;
	var l = inArray.length;
	while(l-- > 0) t += inArray[l];
	return t;
}
org.casalib.util.ArrayUtil.average = function(inArray) {
	if(inArray.length == 0) return 0;
	return org.casalib.util.ArrayUtil.sum(inArray) / inArray.length;
}
org.casalib.util.ArrayUtil.getLowestValue = function(inArray) {
	var lowest = inArray[0];
	var _g = 0;
	while(_g < inArray.length) {
		var i = inArray[_g];
		++_g;
		lowest = org.casalib.util.NumberUtil.min(i,lowest);
	}
	return lowest;
}
org.casalib.util.ArrayUtil.getHighestValue = function(inArray) {
	var lowest = inArray[0];
	var _g = 0;
	while(_g < inArray.length) {
		var i = inArray[_g];
		++_g;
		lowest = org.casalib.util.NumberUtil.max(i,lowest);
	}
	return lowest;
}
org.casalib.util.NumberUtil = function() { }
$hxClasses["org.casalib.util.NumberUtil"] = org.casalib.util.NumberUtil;
org.casalib.util.NumberUtil.__name__ = ["org","casalib","util","NumberUtil"];
org.casalib.util.NumberUtil.isEqual = function(val1,val2,precision) {
	if(precision == null) precision = 0;
	return Math.abs(val1 - val2) <= Math.abs(precision);
}
org.casalib.util.NumberUtil.min = function(val1,val2) {
	if(val1 == Math.NaN && val2 == Math.NaN || val1 == null && val2 == null) return Math.NaN;
	if(val1 == null || val2 == null) return val2 == null?val1:val2;
	if(val1 == Math.NaN || val2 == Math.NaN) return val2 == Math.NaN?val1:val2;
	if(!js.Boot.__instanceof(val1,Float) || !js.Boot.__instanceof(val2,Float)) return js.Boot.__instanceof(val1,Float)?val1:val2;
	return Math.min(val1,val2);
}
org.casalib.util.NumberUtil.max = function(val1,val2) {
	if(val1 == Math.NaN && val2 == Math.NaN || val1 == null && val2 == null) return Math.NaN;
	if(val1 == null || val2 == null) return val2 == null?val1:val2;
	if(val1 == Math.NaN || val2 == Math.NaN) return val2 == Math.NaN?val1:val2;
	if(!js.Boot.__instanceof(val1,Float) || !js.Boot.__instanceof(val2,Float)) return js.Boot.__instanceof(val1,Float)?val1:val2;
	return Math.max(val1,val2);
}
org.casalib.util.NumberUtil.randomWithinRange = function(min,max) {
	return min + Math.random() * (max - min);
}
org.casalib.util.NumberUtil.randomIntegerWithinRange = function(min,max) {
	return Math.round(min + Math.random() * (max - min));
}
org.casalib.util.NumberUtil.isEven = function(value) {
	return (value & 1) == 0;
}
org.casalib.util.NumberUtil.isOdd = function(value) {
	return !((value & 1) == 0);
}
org.casalib.util.NumberUtil.isInteger = function(value) {
	return value % 1 == 0;
}
org.casalib.util.NumberUtil.isPrime = function(value) {
	if(value == 1 || value == 2) return true;
	if((value & 1) == 0) return false;
	var s = Math.sqrt(value);
	var _g1 = 3, _g = s | 0;
	while(_g1 < _g) {
		var i = _g1++;
		if(value % i == 0) return false;
	}
	return true;
}
org.casalib.util.NumberUtil.roundDecimalToPlace = function(value,place) {
	var p = Math.pow(10,place);
	return Math.round(value * p) / p;
}
org.casalib.util.NumberUtil.loopIndex = function(index,length) {
	if(index < 0) index = length + index % length;
	if(index >= length) index %= length;
	return index;
}
org.casalib.util.NumberUtil.isBetween = function(value,firstValue,secondValue) {
	return !(value < Math.min(firstValue,secondValue) || value > Math.max(firstValue,secondValue));
}
org.casalib.util.NumberUtil.constrain = function(value,firstValue,secondValue) {
	return Math.min(Math.max(value,Math.min(firstValue,secondValue)),Math.max(firstValue,secondValue));
}
org.casalib.util.NumberUtil.createStepsBetween = function(begin,end,steps) {
	steps++;
	var i = 0;
	var stepsBetween = new Array();
	var increment = (end - begin) / steps;
	while(++i < steps) stepsBetween.push(i * increment + begin);
	return stepsBetween;
}
org.casalib.util.NumberUtil.interpolate = function(amount,begin,end) {
	return begin + (end - begin) * amount._percent;
}
org.casalib.util.NumberUtil.normalize = function(value,minimum,maximum) {
	return new org.casalib.math.Percent((value - minimum) / (maximum - minimum));
}
org.casalib.util.NumberUtil.map = function(value,min1,max1,min2,max2) {
	return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
}
org.casalib.util.NumberUtil.getWeightedAverage = function(value,dest,n) {
	return value + (dest - value) / n;
}
org.casalib.util.NumberUtil.format = function(value,minLength,thouDelim,fillChar) {
	var num = Std.string(value);
	var len = num.length;
	if(thouDelim != null) {
		var numSplit = num.split("");
		var counter = 3;
		var i = numSplit.length;
		while(--i > 0) {
			counter--;
			if(counter == 0) {
				counter = 3;
				numSplit.splice(i,0,thouDelim);
			}
		}
		num = numSplit.join("");
	}
	if(minLength != 0) {
		if(len < minLength) {
			minLength -= len;
			var addChar = fillChar == null?"0":fillChar;
			while(minLength-- > 0) num = addChar + num;
		}
	}
	return num;
}
org.casalib.util.NumberUtil.getOrdinalSuffix = function(value) {
	if(value >= 10 && value <= 20) return "th";
	if(value == 0) return "";
	switch(value % 10) {
	case 3:
		return "rd";
	case 2:
		return "nd";
	case 1:
		return "st";
	default:
		return "th";
	}
}
org.casalib.util.NumberUtil.addLeadingZero = function(value) {
	return value < 10?"0" + value:Std.string(value);
}
org.casalib.util.ObjectUtil = function() { }
$hxClasses["org.casalib.util.ObjectUtil"] = org.casalib.util.ObjectUtil;
org.casalib.util.ObjectUtil.__name__ = ["org","casalib","util","ObjectUtil"];
org.casalib.util.ObjectUtil.contains = function(obj,member) {
	var _g = 0, _g1 = org.casalib.util.ObjectUtil.getKeys(obj);
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		var val = Reflect.field(obj,prop);
		if(val != null && val == member) return true;
	}
	return false;
}
org.casalib.util.ObjectUtil.clone = function(obj) {
	return haxe.Unserializer.run(haxe.Serializer.run(obj));
}
org.casalib.util.ObjectUtil.getKeys = function(obj) {
	return Reflect.fields(obj);
}
org.casalib.util.ObjectUtil.isUndefined = function(obj) {
	return obj == null;
}
org.casalib.util.ObjectUtil.isNull = function(obj) {
	return obj == null;
}
org.casalib.util.ObjectUtil.isEmpty = function(obj) {
	if(obj == null) return true;
	if(js.Boot.__instanceof(obj,Float) || js.Boot.__instanceof(obj,Int)) return Math.isNaN(obj);
	if(js.Boot.__instanceof(obj,Array) || js.Boot.__instanceof(obj,String)) return obj.length == 0;
	return org.casalib.util.ObjectUtil.getKeys(obj).length == 0;
}
var utest = {}
utest.Assert = function() { }
$hxClasses["utest.Assert"] = utest.Assert;
utest.Assert.__name__ = ["utest","Assert"];
utest.Assert.results = null;
utest.Assert.isTrue = function(cond,msg,pos) {
	if(utest.Assert.results == null) throw "Assert.results is not currently bound to any assert context";
	if(null == msg) msg = "expected true";
	if(cond) utest.Assert.results.add(utest.Assertation.Success(pos)); else utest.Assert.results.add(utest.Assertation.Failure(msg,pos));
}
utest.Assert.isFalse = function(value,msg,pos) {
	if(null == msg) msg = "expected false";
	utest.Assert.isTrue(value == false,msg,pos);
}
utest.Assert.isNull = function(value,msg,pos) {
	if(msg == null) msg = "expected null but was " + utest.Assert.q(value);
	utest.Assert.isTrue(value == null,msg,pos);
}
utest.Assert.notNull = function(value,msg,pos) {
	if(null == msg) msg = "expected false";
	utest.Assert.isTrue(value != null,msg,pos);
}
utest.Assert["is"] = function(value,type,msg,pos) {
	if(msg == null) msg = "expected type " + utest.Assert.typeToString(type) + " but was " + utest.Assert.typeToString(value);
	utest.Assert.isTrue(js.Boot.__instanceof(value,type),msg,pos);
}
utest.Assert.notEquals = function(expected,value,msg,pos) {
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " and testa value " + utest.Assert.q(value) + " should be different";
	utest.Assert.isFalse(expected == value,msg,pos);
}
utest.Assert.equals = function(expected,value,msg,pos) {
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " but was " + utest.Assert.q(value);
	utest.Assert.isTrue(expected == value,msg,pos);
}
utest.Assert.match = function(pattern,value,msg,pos) {
	if(msg == null) msg = "the value " + utest.Assert.q(value) + "does not match the provided pattern";
	utest.Assert.isTrue(pattern.match(value),msg,pos);
}
utest.Assert.floatEquals = function(expected,value,approx,msg,pos) {
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " but was " + utest.Assert.q(value);
	return utest.Assert.isTrue(utest.Assert._floatEquals(expected,value,approx),msg,pos);
}
utest.Assert._floatEquals = function(expected,value,approx) {
	if(Math.isNaN(expected)) return Math.isNaN(value); else if(Math.isNaN(value)) return false; else if(!Math.isFinite(expected) && !Math.isFinite(value)) return expected > 0 == value > 0;
	if(null == approx) approx = 1e-5;
	return Math.abs(value - expected) < approx;
}
utest.Assert.getTypeName = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return "[null]";
	case 1:
		return "Int";
	case 2:
		return "Float";
	case 3:
		return "Bool";
	case 5:
		return "function";
	case 6:
		var c = $e[2];
		return Type.getClassName(c);
	case 7:
		var e = $e[2];
		return Type.getEnumName(e);
	case 4:
		return "Object";
	case 8:
		return "Unknown";
	}
}
utest.Assert.isIterable = function(v,isAnonym) {
	var fields = isAnonym?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
}
utest.Assert.isIterator = function(v,isAnonym) {
	var fields = isAnonym?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
}
utest.Assert.sameAs = function(expected,value,status) {
	var texpected = utest.Assert.getTypeName(expected);
	var tvalue = utest.Assert.getTypeName(value);
	if(texpected != tvalue) {
		status.error = "expected type " + texpected + " but it is " + tvalue + (status.path == ""?"":" for field " + status.path);
		return false;
	}
	var $e = (Type["typeof"](expected));
	switch( $e[1] ) {
	case 2:
		if(!utest.Assert._floatEquals(expected,value)) {
			status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	case 0:
	case 1:
	case 3:
		if(expected != value) {
			status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	case 5:
		if(!Reflect.compareMethods(expected,value)) {
			status.error = "expected same function reference" + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	case 6:
		var c = $e[2];
		var cexpected = Type.getClassName(c);
		var cvalue = Type.getClassName(Type.getClass(value));
		if(cexpected != cvalue) {
			status.error = "expected instance of " + utest.Assert.q(cexpected) + " but it is " + utest.Assert.q(cvalue) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		if(js.Boot.__instanceof(expected,String) && expected != value) {
			status.error = "expected '" + Std.string(expected) + "' but it is '" + Std.string(value) + "'";
			return false;
		}
		if(js.Boot.__instanceof(expected,Array)) {
			if(status.recursive || status.path == "") {
				if(expected.length != value.length) {
					status.error = "expected " + Std.string(expected.length) + " elements but they were " + Std.string(value.length) + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = expected.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"array[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(expected[i],value[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						return false;
					}
				}
			}
			return true;
		}
		if(js.Boot.__instanceof(expected,Date)) {
			if(expected.getTime() != value.getTime()) {
				status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			return true;
		}
		if(js.Boot.__instanceof(expected,haxe.io.Bytes)) {
			if(status.recursive || status.path == "") {
				var ebytes = expected;
				var vbytes = value;
				if(ebytes.length != vbytes.length) return false;
				var _g1 = 0, _g = ebytes.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(ebytes.b[i] != vbytes.b[i]) {
						status.error = "expected byte " + ebytes.b[i] + " but wss " + ebytes.b[i] + (status.path == ""?"":" for field " + status.path);
						return false;
					}
				}
			}
			return true;
		}
		if(js.Boot.__instanceof(expected,Hash) || js.Boot.__instanceof(expected,IntHash)) {
			if(status.recursive || status.path == "") {
				var keys = Lambda.array({ iterator : function() {
					return expected.keys();
				}});
				var vkeys = Lambda.array({ iterator : function() {
					return value.keys();
				}});
				if(keys.length != vkeys.length) {
					status.error = "expected " + keys.length + " keys but they were " + vkeys.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					status.path = path == ""?"hash[" + key + "]":path + "[" + key + "]";
					if(!utest.Assert.sameAs(expected.get(key),value.get(key),status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						return false;
					}
				}
			}
			return true;
		}
		if(utest.Assert.isIterator(expected,false)) {
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array({ iterator : function() {
					return expected;
				}});
				var vvalues = Lambda.array({ iterator : function() {
					return value;
				}});
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterator but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterator[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						return false;
					}
				}
			}
			return true;
		}
		if(utest.Assert.isIterable(expected,false)) {
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array(expected);
				var vvalues = Lambda.array(value);
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterable but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) return false;
				}
			}
			return true;
		}
		if(status.recursive || status.path == "") {
			var fields = Type.getInstanceFields(Type.getClass(expected));
			var path = status.path;
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				status.path = path == ""?field:path + "." + field;
				var e = Reflect.field(expected,field);
				if(Reflect.isFunction(e)) continue;
				var v = Reflect.field(value,field);
				if(!utest.Assert.sameAs(e,v,status)) return false;
			}
		}
		return true;
	case 7:
		var e = $e[2];
		var eexpected = Type.getEnumName(e);
		var evalue = Type.getEnumName(Type.getEnum(value));
		if(eexpected != evalue) {
			status.error = "expected enumeration of " + utest.Assert.q(eexpected) + " but it is " + utest.Assert.q(evalue) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		if(status.recursive || status.path == "") {
			if(expected[1] != value[1]) {
				status.error = "expected " + utest.Assert.q(expected[0]) + " but is " + utest.Assert.q(value[0]) + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			var eparams = expected.slice(2);
			var vparams = value.slice(2);
			var path = status.path;
			var _g1 = 0, _g = eparams.length;
			while(_g1 < _g) {
				var i = _g1++;
				status.path = path == ""?"enum[" + i + "]":path + "[" + i + "]";
				if(!utest.Assert.sameAs(eparams[i],vparams[i],status)) {
					status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
					return false;
				}
			}
		}
		return true;
	case 4:
		if(status.recursive || status.path == "") {
			var tfields = Reflect.fields(value);
			var fields = Reflect.fields(expected);
			var path = status.path;
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				HxOverrides.remove(tfields,field);
				status.path = path == ""?field:path + "." + field;
				if(!Reflect.hasField(value,field)) {
					status.error = "expected field " + status.path + " does not exist in " + utest.Assert.q(value);
					return false;
				}
				var e = Reflect.field(expected,field);
				if(Reflect.isFunction(e)) continue;
				var v = Reflect.field(value,field);
				if(!utest.Assert.sameAs(e,v,status)) return false;
			}
			if(tfields.length > 0) {
				status.error = "the tested object has extra field(s) (" + tfields.join(", ") + ") not included in the expected ones";
				return false;
			}
		}
		if(utest.Assert.isIterator(expected,true)) {
			if(!utest.Assert.isIterator(value,true)) {
				status.error = "expected Iterable but it is not " + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array({ iterator : function() {
					return expected;
				}});
				var vvalues = Lambda.array({ iterator : function() {
					return value;
				}});
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterator but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterator[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						return false;
					}
				}
			}
			return true;
		}
		if(utest.Assert.isIterable(expected,true)) {
			if(!utest.Assert.isIterable(value,true)) {
				status.error = "expected Iterator but it is not " + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array(expected);
				var vvalues = Lambda.array(value);
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterable but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) return false;
				}
			}
			return true;
		}
		return true;
	case 8:
		return (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
	}
	return (function($this) {
		var $r;
		throw "Unable to compare values: " + utest.Assert.q(expected) + " and " + utest.Assert.q(value);
		return $r;
	}(this));
}
utest.Assert.q = function(v) {
	if(js.Boot.__instanceof(v,String)) return "\"" + StringTools.replace(v,"\"","\\\"") + "\""; else return Std.string(v);
}
utest.Assert.same = function(expected,value,recursive,msg,pos) {
	var status = { recursive : null == recursive?true:recursive, path : "", error : null};
	if(utest.Assert.sameAs(expected,value,status)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?status.error:msg,pos);
}
utest.Assert.raises = function(method,type,msgNotThrown,msgWrongType,pos) {
	if(type == null) type = String;
	try {
		method();
		var name = Type.getClassName(type);
		if(name == null) name = "" + Std.string(type);
		if(null == msgNotThrown) msgNotThrown = "exception of type " + name + " not raised";
		utest.Assert.fail(msgNotThrown,pos);
	} catch( ex ) {
		var name = Type.getClassName(type);
		if(name == null) name = "" + Std.string(type);
		if(null == msgWrongType) msgWrongType = "expected throw of type " + name + " but was " + Std.string(ex);
		utest.Assert.isTrue(js.Boot.__instanceof(ex,type),msgWrongType,pos);
	}
}
utest.Assert.allows = function(possibilities,value,msg,pos) {
	if(Lambda.has(possibilities,value)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " not found in the expected possibilities " + Std.string(possibilities):msg,pos);
}
utest.Assert.contains = function(match,values,msg,pos) {
	if(Lambda.has(values,match)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do not contain " + Std.string(match):msg,pos);
}
utest.Assert.notContains = function(match,values,msg,pos) {
	if(!Lambda.has(values,match)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do contain " + Std.string(match):msg,pos);
}
utest.Assert.stringContains = function(match,value,msg,pos) {
	if(value != null && value.indexOf(match) >= 0) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " does not contain " + utest.Assert.q(match):msg,pos);
}
utest.Assert.stringSequence = function(sequence,value,msg,pos) {
	if(null == value) {
		utest.Assert.fail(msg == null?"null argument value":msg,pos);
		return;
	}
	var p = 0;
	var _g = 0;
	while(_g < sequence.length) {
		var s = sequence[_g];
		++_g;
		var p2 = value.indexOf(s,p);
		if(p2 < 0) {
			if(msg == null) {
				msg = "expected '" + s + "' after ";
				if(p > 0) {
					var cut = HxOverrides.substr(value,0,p);
					if(cut.length > 30) cut = "..." + HxOverrides.substr(cut,-27,null);
					msg += " '" + cut + "'";
				} else msg += " begin";
			}
			utest.Assert.fail(msg,pos);
			return;
		}
		p = p2 + s.length;
	}
	utest.Assert.isTrue(true,msg,pos);
}
utest.Assert.fail = function(msg,pos) {
	if(msg == null) msg = "failure expected";
	utest.Assert.isTrue(false,msg,pos);
}
utest.Assert.warn = function(msg) {
	utest.Assert.results.add(utest.Assertation.Warning(msg));
}
utest.Assert.createAsync = function(f,timeout) {
	return function() {
	};
}
utest.Assert.createEvent = function(f,timeout) {
	return function(e) {
	};
}
utest.Assert.typeToString = function(t) {
	try {
		var _t = Type.getClass(t);
		if(_t != null) t = _t;
	} catch( e ) {
	}
	try {
		return Type.getClassName(t);
	} catch( e ) {
	}
	try {
		var _t = Type.getEnum(t);
		if(_t != null) t = _t;
	} catch( e ) {
	}
	try {
		return Type.getEnumName(t);
	} catch( e ) {
	}
	try {
		return Std.string(Type["typeof"](t));
	} catch( e ) {
	}
	try {
		return Std.string(t);
	} catch( e ) {
	}
	return "<unable to retrieve type name>";
}
utest.Assertation = $hxClasses["utest.Assertation"] = { __ename__ : ["utest","Assertation"], __constructs__ : ["Success","Failure","Error","SetupError","TeardownError","TimeoutError","AsyncError","Warning"] }
utest.Assertation.Success = function(pos) { var $x = ["Success",0,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Failure = function(msg,pos) { var $x = ["Failure",1,msg,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Error = function(e,stack) { var $x = ["Error",2,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.SetupError = function(e,stack) { var $x = ["SetupError",3,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TeardownError = function(e,stack) { var $x = ["TeardownError",4,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TimeoutError = function(missedAsyncs,stack) { var $x = ["TimeoutError",5,missedAsyncs,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.AsyncError = function(e,stack) { var $x = ["AsyncError",6,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Warning = function(msg) { var $x = ["Warning",7,msg]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest._Dispatcher = {}
utest._Dispatcher.EventException = $hxClasses["utest._Dispatcher.EventException"] = { __ename__ : ["utest","_Dispatcher","EventException"], __constructs__ : ["StopPropagation"] }
utest._Dispatcher.EventException.StopPropagation = ["StopPropagation",0];
utest._Dispatcher.EventException.StopPropagation.toString = $estr;
utest._Dispatcher.EventException.StopPropagation.__enum__ = utest._Dispatcher.EventException;
utest.Dispatcher = function() {
	this.handlers = new Array();
};
$hxClasses["utest.Dispatcher"] = utest.Dispatcher;
utest.Dispatcher.__name__ = ["utest","Dispatcher"];
utest.Dispatcher.stop = function() {
	throw utest._Dispatcher.EventException.StopPropagation;
}
utest.Dispatcher.prototype = {
	has: function() {
		return this.handlers.length > 0;
	}
	,dispatch: function(e) {
		try {
			var list = this.handlers.slice();
			var _g = 0;
			while(_g < list.length) {
				var l = list[_g];
				++_g;
				l(e);
			}
			return true;
		} catch( exc ) {
			if( js.Boot.__instanceof(exc,utest._Dispatcher.EventException) ) {
				return false;
			} else throw(exc);
		}
	}
	,clear: function() {
		this.handlers = new Array();
	}
	,remove: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
		return null;
	}
	,add: function(h) {
		this.handlers.push(h);
		return h;
	}
	,handlers: null
	,__class__: utest.Dispatcher
}
utest.Notifier = function() {
	this.handlers = new Array();
};
$hxClasses["utest.Notifier"] = utest.Notifier;
utest.Notifier.__name__ = ["utest","Notifier"];
utest.Notifier.stop = function() {
	throw utest._Dispatcher.EventException.StopPropagation;
}
utest.Notifier.prototype = {
	has: function() {
		return this.handlers.length > 0;
	}
	,dispatch: function() {
		try {
			var list = this.handlers.slice();
			var _g = 0;
			while(_g < list.length) {
				var l = list[_g];
				++_g;
				l();
			}
			return true;
		} catch( exc ) {
			if( js.Boot.__instanceof(exc,utest._Dispatcher.EventException) ) {
				return false;
			} else throw(exc);
		}
	}
	,clear: function() {
		this.handlers = new Array();
	}
	,remove: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
		return null;
	}
	,add: function(h) {
		this.handlers.push(h);
		return h;
	}
	,handlers: null
	,__class__: utest.Notifier
}
utest.Runner = function() {
	this.fixtures = new Array();
	this.onProgress = new utest.Dispatcher();
	this.onStart = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
	this.length = 0;
};
$hxClasses["utest.Runner"] = utest.Runner;
utest.Runner.__name__ = ["utest","Runner"];
utest.Runner.prototype = {
	testComplete: function(h) {
		this.onProgress.dispatch({ result : utest.TestResult.ofHandler(h), done : this.pos, totals : this.length});
		this.runNext();
	}
	,runFixture: function(fixture) {
		var handler = new utest.TestHandler(fixture);
		handler.onComplete.add($bind(this,this.testComplete));
		handler.execute();
	}
	,runNext: function() {
		if(this.fixtures.length > this.pos) this.runFixture(this.fixtures[this.pos++]); else this.onComplete.dispatch(this);
	}
	,run: function() {
		this.pos = 0;
		this.onStart.dispatch(this);
		this.runNext();
	}
	,pos: null
	,isMethod: function(test,name) {
		try {
			return Reflect.isFunction(Reflect.field(test,name));
		} catch( e ) {
			return false;
		}
	}
	,getFixture: function(index) {
		return this.fixtures[index];
	}
	,addFixture: function(fixture) {
		this.fixtures.push(fixture);
		this.length++;
	}
	,addCase: function(test,setup,teardown,prefix,pattern) {
		if(prefix == null) prefix = "test";
		if(teardown == null) teardown = "teardown";
		if(setup == null) setup = "setup";
		if(!Reflect.isObject(test)) throw "can't add a null object as a test case";
		if(!this.isMethod(test,setup)) setup = null;
		if(!this.isMethod(test,teardown)) teardown = null;
		var fields = Type.getInstanceFields(Type.getClass(test));
		if(pattern == null) {
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				if(!StringTools.startsWith(field,prefix)) continue;
				if(!this.isMethod(test,field)) continue;
				this.addFixture(new utest.TestFixture(test,field,setup,teardown));
			}
		} else {
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				if(!pattern.match(field)) continue;
				if(!this.isMethod(test,field)) continue;
				this.addFixture(new utest.TestFixture(test,field,setup,teardown));
			}
		}
	}
	,length: null
	,onComplete: null
	,onStart: null
	,onProgress: null
	,fixtures: null
	,__class__: utest.Runner
}
utest.TestFixture = function(target,method,setup,teardown) {
	this.target = target;
	this.method = method;
	this.setup = setup;
	this.teardown = teardown;
};
$hxClasses["utest.TestFixture"] = utest.TestFixture;
utest.TestFixture.__name__ = ["utest","TestFixture"];
utest.TestFixture.prototype = {
	checkMethod: function(name,arg) {
		var field = Reflect.field(this.target,name);
		if(field == null) throw arg + " function " + name + " is not a field of target";
		if(!Reflect.isFunction(field)) throw arg + " function " + name + " is not a function";
	}
	,teardown: null
	,setup: null
	,method: null
	,target: null
	,__class__: utest.TestFixture
}
utest.TestHandler = function(fixture) {
	if(fixture == null) throw "fixture argument is null";
	this.fixture = fixture;
	this.results = new List();
	this.asyncStack = new List();
	this.onTested = new utest.Dispatcher();
	this.onTimeout = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
};
$hxClasses["utest.TestHandler"] = utest.TestHandler;
utest.TestHandler.__name__ = ["utest","TestHandler"];
utest.TestHandler.exceptionStack = function(pops) {
	if(pops == null) pops = 2;
	var stack = haxe.Stack.exceptionStack();
	while(pops-- > 0) stack.pop();
	return stack;
}
utest.TestHandler.prototype = {
	completed: function() {
		try {
			this.executeMethod(this.fixture.teardown);
		} catch( e ) {
			this.results.add(utest.Assertation.TeardownError(e,utest.TestHandler.exceptionStack(2)));
		}
		this.unbindHandler();
		this.onComplete.dispatch(this);
	}
	,timeout: function() {
		this.results.add(utest.Assertation.TimeoutError(this.asyncStack.length,[]));
		this.onTimeout.dispatch(this);
		this.completed();
	}
	,tested: function() {
		if(this.results.length == 0) this.results.add(utest.Assertation.Warning("no assertions"));
		this.onTested.dispatch(this);
		this.completed();
	}
	,executeMethod: function(name) {
		if(name == null) return;
		this.bindHandler();
		Reflect.field(this.fixture.target,name).apply(this.fixture.target,[]);
	}
	,addEvent: function(f,timeout) {
		if(timeout == null) timeout = 250;
		this.asyncStack.add(f);
		var handler = this;
		this.setTimeout(timeout);
		return function(e) {
			if(!handler.asyncStack.remove(f)) {
				handler.results.add(utest.Assertation.AsyncError("event already executed",[]));
				return;
			}
			try {
				handler.bindHandler();
				f(e);
			} catch( e1 ) {
				handler.results.add(utest.Assertation.AsyncError(e1,utest.TestHandler.exceptionStack(0)));
			}
		};
	}
	,addAsync: function(f,timeout) {
		if(timeout == null) timeout = 250;
		if(null == f) f = function() {
		};
		this.asyncStack.add(f);
		var handler = this;
		this.setTimeout(timeout);
		return function() {
			if(!handler.asyncStack.remove(f)) {
				handler.results.add(utest.Assertation.AsyncError("method already executed",[]));
				return;
			}
			try {
				handler.bindHandler();
				f();
			} catch( e ) {
				handler.results.add(utest.Assertation.AsyncError(e,utest.TestHandler.exceptionStack(0)));
			}
		};
	}
	,unbindHandler: function() {
		utest.Assert.results = null;
		utest.Assert.createAsync = function(f,t) {
			return function() {
			};
		};
		utest.Assert.createEvent = function(f,t) {
			return function(e) {
			};
		};
	}
	,bindHandler: function() {
		utest.Assert.results = this.results;
		utest.Assert.createAsync = $bind(this,this.addAsync);
		utest.Assert.createEvent = $bind(this,this.addEvent);
	}
	,setTimeout: function(timeout) {
		var newexpire = haxe.Timer.stamp() + timeout / 1000;
		this.expireson = this.expireson == null?newexpire:newexpire > this.expireson?newexpire:this.expireson;
	}
	,expireson: null
	,checkTested: function() {
		if(this.expireson == null || this.asyncStack.length == 0) this.tested(); else if(haxe.Timer.stamp() > this.expireson) this.timeout(); else haxe.Timer.delay($bind(this,this.checkTested),10);
	}
	,execute: function() {
		try {
			this.executeMethod(this.fixture.setup);
			try {
				this.executeMethod(this.fixture.method);
			} catch( e ) {
				this.results.add(utest.Assertation.Error(e,utest.TestHandler.exceptionStack()));
			}
		} catch( e ) {
			this.results.add(utest.Assertation.SetupError(e,utest.TestHandler.exceptionStack()));
		}
		this.checkTested();
	}
	,onComplete: null
	,onTimeout: null
	,onTested: null
	,asyncStack: null
	,fixture: null
	,results: null
	,__class__: utest.TestHandler
}
utest.TestResult = function() {
};
$hxClasses["utest.TestResult"] = utest.TestResult;
utest.TestResult.__name__ = ["utest","TestResult"];
utest.TestResult.ofHandler = function(handler) {
	var r = new utest.TestResult();
	var path = Type.getClassName(Type.getClass(handler.fixture.target)).split(".");
	r.cls = path.pop();
	r.pack = path.join(".");
	r.method = handler.fixture.method;
	r.setup = handler.fixture.setup;
	r.teardown = handler.fixture.teardown;
	r.assertations = handler.results;
	return r;
}
utest.TestResult.prototype = {
	allOk: function() {
		try {
			var $it0 = this.assertations.iterator();
			while( $it0.hasNext() ) {
				var l = $it0.next();
				var $e = (l);
				switch( $e[1] ) {
				case 0:
					var pos = $e[2];
					throw "__break__";
					break;
				default:
					return false;
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return true;
	}
	,assertations: null
	,teardown: null
	,setup: null
	,method: null
	,cls: null
	,pack: null
	,__class__: utest.TestResult
}
utest.ui = {}
utest.ui.Report = function() { }
$hxClasses["utest.ui.Report"] = utest.ui.Report;
utest.ui.Report.__name__ = ["utest","ui","Report"];
utest.ui.Report.create = function(runner,displaySuccessResults,headerDisplayMode) {
	var report;
	report = new utest.ui.text.HtmlReport(runner,null,true);
	if(null == displaySuccessResults) report.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors; else report.displaySuccessResults = displaySuccessResults;
	if(null == headerDisplayMode) report.displayHeader = utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults; else report.displayHeader = headerDisplayMode;
	return report;
}
utest.ui.common = {}
utest.ui.common.ClassResult = function(className,setupName,teardownName) {
	this.fixtures = new Hash();
	this.className = className;
	this.setupName = setupName;
	this.hasSetup = setupName != null;
	this.teardownName = teardownName;
	this.hasTeardown = teardownName != null;
	this.methods = 0;
	this.stats = new utest.ui.common.ResultStats();
};
$hxClasses["utest.ui.common.ClassResult"] = utest.ui.common.ClassResult;
utest.ui.common.ClassResult.__name__ = ["utest","ui","common","ClassResult"];
utest.ui.common.ClassResult.prototype = {
	methodNames: function(errorsHavePriority) {
		if(errorsHavePriority == null) errorsHavePriority = true;
		var names = [];
		var $it0 = this.fixtures.keys();
		while( $it0.hasNext() ) {
			var name = $it0.next();
			names.push(name);
		}
		if(errorsHavePriority) {
			var me = this;
			names.sort(function(a,b) {
				var $as = me.get(a).stats;
				var bs = me.get(b).stats;
				if($as.hasErrors) return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors); else if(bs.hasErrors) return 1; else if($as.hasFailures) return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures); else if(bs.hasFailures) return 1; else if($as.hasWarnings) return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings); else if(bs.hasWarnings) return 1; else return Reflect.compare(a,b);
			});
		} else names.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		return names;
	}
	,exists: function(method) {
		return this.fixtures.exists(method);
	}
	,get: function(method) {
		return this.fixtures.get(method);
	}
	,add: function(result) {
		if(this.fixtures.exists(result.methodName)) throw "invalid duplicated fixture result";
		this.stats.wire(result.stats);
		this.methods++;
		this.fixtures.set(result.methodName,result);
	}
	,stats: null
	,methods: null
	,hasTeardown: null
	,hasSetup: null
	,teardownName: null
	,setupName: null
	,className: null
	,fixtures: null
	,__class__: utest.ui.common.ClassResult
}
utest.ui.common.FixtureResult = function(methodName) {
	this.methodName = methodName;
	this.list = new List();
	this.hasTestError = false;
	this.hasSetupError = false;
	this.hasTeardownError = false;
	this.hasTimeoutError = false;
	this.hasAsyncError = false;
	this.stats = new utest.ui.common.ResultStats();
};
$hxClasses["utest.ui.common.FixtureResult"] = utest.ui.common.FixtureResult;
utest.ui.common.FixtureResult.__name__ = ["utest","ui","common","FixtureResult"];
utest.ui.common.FixtureResult.prototype = {
	add: function(assertation) {
		this.list.add(assertation);
		switch( (assertation)[1] ) {
		case 0:
			this.stats.addSuccesses(1);
			break;
		case 1:
			this.stats.addFailures(1);
			break;
		case 2:
			this.stats.addErrors(1);
			break;
		case 3:
			this.stats.addErrors(1);
			this.hasSetupError = true;
			break;
		case 4:
			this.stats.addErrors(1);
			this.hasTeardownError = true;
			break;
		case 5:
			this.stats.addErrors(1);
			this.hasTimeoutError = true;
			break;
		case 6:
			this.stats.addErrors(1);
			this.hasAsyncError = true;
			break;
		case 7:
			this.stats.addWarnings(1);
			break;
		}
	}
	,iterator: function() {
		return this.list.iterator();
	}
	,list: null
	,stats: null
	,hasAsyncError: null
	,hasTimeoutError: null
	,hasTeardownError: null
	,hasSetupError: null
	,hasTestError: null
	,methodName: null
	,__class__: utest.ui.common.FixtureResult
}
utest.ui.common.HeaderDisplayMode = $hxClasses["utest.ui.common.HeaderDisplayMode"] = { __ename__ : ["utest","ui","common","HeaderDisplayMode"], __constructs__ : ["AlwaysShowHeader","NeverShowHeader","ShowHeaderWithResults"] }
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader = ["AlwaysShowHeader",0];
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader.toString = $estr;
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.HeaderDisplayMode.NeverShowHeader = ["NeverShowHeader",1];
utest.ui.common.HeaderDisplayMode.NeverShowHeader.toString = $estr;
utest.ui.common.HeaderDisplayMode.NeverShowHeader.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults = ["ShowHeaderWithResults",2];
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults.toString = $estr;
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.SuccessResultsDisplayMode = $hxClasses["utest.ui.common.SuccessResultsDisplayMode"] = { __ename__ : ["utest","ui","common","SuccessResultsDisplayMode"], __constructs__ : ["AlwaysShowSuccessResults","NeverShowSuccessResults","ShowSuccessResultsWithNoErrors"] }
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults = ["AlwaysShowSuccessResults",0];
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults = ["NeverShowSuccessResults",1];
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors = ["ShowSuccessResultsWithNoErrors",2];
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.IReport = function() { }
$hxClasses["utest.ui.common.IReport"] = utest.ui.common.IReport;
utest.ui.common.IReport.__name__ = ["utest","ui","common","IReport"];
utest.ui.common.IReport.prototype = {
	setHandler: null
	,displayHeader: null
	,displaySuccessResults: null
	,__class__: utest.ui.common.IReport
}
utest.ui.common.PackageResult = function(packageName) {
	this.packageName = packageName;
	this.classes = new Hash();
	this.packages = new Hash();
	this.stats = new utest.ui.common.ResultStats();
};
$hxClasses["utest.ui.common.PackageResult"] = utest.ui.common.PackageResult;
utest.ui.common.PackageResult.__name__ = ["utest","ui","common","PackageResult"];
utest.ui.common.PackageResult.prototype = {
	getOrCreatePackage: function(pack,flat,ref) {
		if(pack == null || pack == "") return ref;
		if(flat) {
			if(ref.existsPackage(pack)) return ref.getPackage(pack);
			var p = new utest.ui.common.PackageResult(pack);
			ref.addPackage(p);
			return p;
		} else {
			var parts = pack.split(".");
			var _g = 0;
			while(_g < parts.length) {
				var part = parts[_g];
				++_g;
				ref = this.getOrCreatePackage(part,true,ref);
			}
			return ref;
		}
	}
	,getOrCreateClass: function(pack,cls,setup,teardown) {
		if(pack.existsClass(cls)) return pack.getClass(cls);
		var c = new utest.ui.common.ClassResult(cls,setup,teardown);
		pack.addClass(c);
		return c;
	}
	,createFixture: function(method,assertations) {
		var f = new utest.ui.common.FixtureResult(method);
		var $it0 = $iterator(assertations)();
		while( $it0.hasNext() ) {
			var assertation = $it0.next();
			f.add(assertation);
		}
		return f;
	}
	,packageNames: function(errorsHavePriority) {
		if(errorsHavePriority == null) errorsHavePriority = true;
		var names = [];
		if(this.packageName == null) names.push("");
		var $it0 = this.packages.keys();
		while( $it0.hasNext() ) {
			var name = $it0.next();
			names.push(name);
		}
		if(errorsHavePriority) {
			var me = this;
			names.sort(function(a,b) {
				var $as = me.getPackage(a).stats;
				var bs = me.getPackage(b).stats;
				if($as.hasErrors) return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors); else if(bs.hasErrors) return 1; else if($as.hasFailures) return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures); else if(bs.hasFailures) return 1; else if($as.hasWarnings) return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings); else if(bs.hasWarnings) return 1; else return Reflect.compare(a,b);
			});
		} else names.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		return names;
	}
	,classNames: function(errorsHavePriority) {
		if(errorsHavePriority == null) errorsHavePriority = true;
		var names = [];
		var $it0 = this.classes.keys();
		while( $it0.hasNext() ) {
			var name = $it0.next();
			names.push(name);
		}
		if(errorsHavePriority) {
			var me = this;
			names.sort(function(a,b) {
				var $as = me.getClass(a).stats;
				var bs = me.getClass(b).stats;
				if($as.hasErrors) return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors); else if(bs.hasErrors) return 1; else if($as.hasFailures) return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures); else if(bs.hasFailures) return 1; else if($as.hasWarnings) return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings); else if(bs.hasWarnings) return 1; else return Reflect.compare(a,b);
			});
		} else names.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
		return names;
	}
	,getClass: function(name) {
		return this.classes.get(name);
	}
	,getPackage: function(name) {
		if(this.packageName == null && name == "") return this;
		return this.packages.get(name);
	}
	,existsClass: function(name) {
		return this.classes.exists(name);
	}
	,existsPackage: function(name) {
		return this.packages.exists(name);
	}
	,addPackage: function(result) {
		this.packages.set(result.packageName,result);
		this.stats.wire(result.stats);
	}
	,addClass: function(result) {
		this.classes.set(result.className,result);
		this.stats.wire(result.stats);
	}
	,addResult: function(result,flattenPackage) {
		var pack = this.getOrCreatePackage(result.pack,flattenPackage,this);
		var cls = this.getOrCreateClass(pack,result.cls,result.setup,result.teardown);
		var fix = this.createFixture(result.method,result.assertations);
		cls.add(fix);
	}
	,stats: null
	,packages: null
	,classes: null
	,packageName: null
	,__class__: utest.ui.common.PackageResult
}
utest.ui.common.ReportTools = function() { }
$hxClasses["utest.ui.common.ReportTools"] = utest.ui.common.ReportTools;
utest.ui.common.ReportTools.__name__ = ["utest","ui","common","ReportTools"];
utest.ui.common.ReportTools.hasHeader = function(report,stats) {
	switch( (report.displayHeader)[1] ) {
	case 1:
		return false;
	case 2:
		if(!stats.isOk) return true;
		switch( (report.displaySuccessResults)[1] ) {
		case 1:
			return false;
		case 0:
		case 2:
			return true;
		}
		break;
	case 0:
		return true;
	}
}
utest.ui.common.ReportTools.skipResult = function(report,stats,isOk) {
	if(!stats.isOk) return false;
	return (function($this) {
		var $r;
		switch( (report.displaySuccessResults)[1] ) {
		case 1:
			$r = true;
			break;
		case 0:
			$r = false;
			break;
		case 2:
			$r = !isOk;
			break;
		}
		return $r;
	}(this));
}
utest.ui.common.ReportTools.hasOutput = function(report,stats) {
	if(!stats.isOk) return true;
	return utest.ui.common.ReportTools.hasHeader(report,stats);
}
utest.ui.common.ResultAggregator = function(runner,flattenPackage) {
	if(flattenPackage == null) flattenPackage = false;
	if(runner == null) throw "runner argument is null";
	this.flattenPackage = flattenPackage;
	this.runner = runner;
	runner.onStart.add($bind(this,this.start));
	runner.onProgress.add($bind(this,this.progress));
	runner.onComplete.add($bind(this,this.complete));
	this.onStart = new utest.Notifier();
	this.onComplete = new utest.Dispatcher();
	this.onProgress = new utest.Dispatcher();
};
$hxClasses["utest.ui.common.ResultAggregator"] = utest.ui.common.ResultAggregator;
utest.ui.common.ResultAggregator.__name__ = ["utest","ui","common","ResultAggregator"];
utest.ui.common.ResultAggregator.prototype = {
	complete: function(runner) {
		this.onComplete.dispatch(this.root);
	}
	,progress: function(e) {
		this.root.addResult(e.result,this.flattenPackage);
		this.onProgress.dispatch(e);
	}
	,createFixture: function(result) {
		var f = new utest.ui.common.FixtureResult(result.method);
		var $it0 = result.assertations.iterator();
		while( $it0.hasNext() ) {
			var assertation = $it0.next();
			f.add(assertation);
		}
		return f;
	}
	,getOrCreateClass: function(pack,cls,setup,teardown) {
		if(pack.existsClass(cls)) return pack.getClass(cls);
		var c = new utest.ui.common.ClassResult(cls,setup,teardown);
		pack.addClass(c);
		return c;
	}
	,getOrCreatePackage: function(pack,flat,ref) {
		if(ref == null) ref = this.root;
		if(pack == null || pack == "") return ref;
		if(flat) {
			if(ref.existsPackage(pack)) return ref.getPackage(pack);
			var p = new utest.ui.common.PackageResult(pack);
			ref.addPackage(p);
			return p;
		} else {
			var parts = pack.split(".");
			var _g = 0;
			while(_g < parts.length) {
				var part = parts[_g];
				++_g;
				ref = this.getOrCreatePackage(part,true,ref);
			}
			return ref;
		}
	}
	,start: function(runner) {
		this.root = new utest.ui.common.PackageResult(null);
		this.onStart.dispatch();
	}
	,onProgress: null
	,onComplete: null
	,onStart: null
	,root: null
	,flattenPackage: null
	,runner: null
	,__class__: utest.ui.common.ResultAggregator
}
utest.ui.common.ResultStats = function() {
	this.assertations = 0;
	this.successes = 0;
	this.failures = 0;
	this.errors = 0;
	this.warnings = 0;
	this.isOk = true;
	this.hasFailures = false;
	this.hasErrors = false;
	this.hasWarnings = false;
	this.onAddSuccesses = new utest.Dispatcher();
	this.onAddFailures = new utest.Dispatcher();
	this.onAddErrors = new utest.Dispatcher();
	this.onAddWarnings = new utest.Dispatcher();
};
$hxClasses["utest.ui.common.ResultStats"] = utest.ui.common.ResultStats;
utest.ui.common.ResultStats.__name__ = ["utest","ui","common","ResultStats"];
utest.ui.common.ResultStats.prototype = {
	unwire: function(dependant) {
		dependant.onAddSuccesses.remove($bind(this,this.addSuccesses));
		dependant.onAddFailures.remove($bind(this,this.addFailures));
		dependant.onAddErrors.remove($bind(this,this.addErrors));
		dependant.onAddWarnings.remove($bind(this,this.addWarnings));
		this.subtract(dependant);
	}
	,wire: function(dependant) {
		dependant.onAddSuccesses.add($bind(this,this.addSuccesses));
		dependant.onAddFailures.add($bind(this,this.addFailures));
		dependant.onAddErrors.add($bind(this,this.addErrors));
		dependant.onAddWarnings.add($bind(this,this.addWarnings));
		this.sum(dependant);
	}
	,subtract: function(other) {
		this.addSuccesses(-other.successes);
		this.addFailures(-other.failures);
		this.addErrors(-other.errors);
		this.addWarnings(-other.warnings);
	}
	,sum: function(other) {
		this.addSuccesses(other.successes);
		this.addFailures(other.failures);
		this.addErrors(other.errors);
		this.addWarnings(other.warnings);
	}
	,addWarnings: function(v) {
		if(v == 0) return;
		this.assertations += v;
		this.warnings += v;
		this.hasWarnings = this.warnings > 0;
		this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
		this.onAddWarnings.dispatch(v);
	}
	,addErrors: function(v) {
		if(v == 0) return;
		this.assertations += v;
		this.errors += v;
		this.hasErrors = this.errors > 0;
		this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
		this.onAddErrors.dispatch(v);
	}
	,addFailures: function(v) {
		if(v == 0) return;
		this.assertations += v;
		this.failures += v;
		this.hasFailures = this.failures > 0;
		this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
		this.onAddFailures.dispatch(v);
	}
	,addSuccesses: function(v) {
		if(v == 0) return;
		this.assertations += v;
		this.successes += v;
		this.onAddSuccesses.dispatch(v);
	}
	,hasWarnings: null
	,hasErrors: null
	,hasFailures: null
	,isOk: null
	,onAddWarnings: null
	,onAddErrors: null
	,onAddFailures: null
	,onAddSuccesses: null
	,warnings: null
	,errors: null
	,failures: null
	,successes: null
	,assertations: null
	,__class__: utest.ui.common.ResultStats
}
utest.ui.text = {}
utest.ui.text.HtmlReport = function(runner,outputHandler,traceRedirected) {
	if(traceRedirected == null) traceRedirected = true;
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($bind(this,this.start));
	this.aggregator.onComplete.add($bind(this,this.complete));
	if(null == outputHandler) this.setHandler($bind(this,this._handler)); else this.setHandler(outputHandler);
	if(traceRedirected) this.redirectTrace();
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
};
$hxClasses["utest.ui.text.HtmlReport"] = utest.ui.text.HtmlReport;
utest.ui.text.HtmlReport.__name__ = ["utest","ui","text","HtmlReport"];
utest.ui.text.HtmlReport.__interfaces__ = [utest.ui.common.IReport];
utest.ui.text.HtmlReport.prototype = {
	_handler: function(report) {
		var isDef = function(v) {
			return typeof v != 'undefined';
		};
		var head = js.Lib.document.getElementsByTagName("head")[0];
		var script = js.Lib.document.createElement("script");
		script.type = "text/javascript";
		var sjs = report.jsScript();
		if(isDef(script.text)) script.text = sjs; else script.innerHTML = sjs;
		head.appendChild(script);
		var style = js.Lib.document.createElement("style");
		style.type = "text/css";
		var scss = report.cssStyle();
		if(isDef(style.styleSheet)) style.styleSheet.cssText = scss; else if(isDef(style.cssText)) style.cssText = scss; else if(isDef(style.innerText)) style.innerText = scss; else style.innerHTML = scss;
		head.appendChild(style);
		var el = js.Lib.document.getElementById("utest-results");
		if(null == el) {
			el = js.Lib.document.createElement("div");
			el.id = "utest-results";
			js.Lib.document.body.appendChild(el);
		}
		el.innerHTML = report.getAll();
	}
	,wrapHtml: function(title,s) {
		return "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" />\n<title>" + title + "</title>\r\n\t\t\t<style type=\"text/css\">" + this.cssStyle() + "</style>\r\n\t\t\t<script type=\"text/javascript\">\n" + this.jsScript() + "\n</script>\n</head>\r\n\t\t\t<body>\n" + s + "\n</body>\n</html>";
	}
	,jsScript: function() {
		return "function utestTooltip(ref, text) {\r\n\tvar el = document.getElementById(\"utesttip\");\r\n\tif(!el) {\r\n\t\tvar el = document.createElement(\"div\")\r\n\t\tel.id = \"utesttip\";\r\n\t\tel.style.position = \"absolute\";\r\n\t\tdocument.body.appendChild(el)\r\n\t}\r\n\tvar p = utestFindPos(ref);\r\n\tel.style.left = (4 + p[0]) + \"px\";\r\n\tel.style.top = (p[1] - 1) + \"px\";\r\n\tel.innerHTML =  text;\r\n}\r\n\r\nfunction utestFindPos(el) {\r\n\tvar left = 0;\r\n\tvar top = 0;\r\n\tdo {\r\n\t\tleft += el.offsetLeft;\r\n\t\ttop += el.offsetTop;\r\n\t} while(el = el.offsetParent)\r\n\treturn [left, top];\r\n}\r\n\r\nfunction utestRemoveTooltip() {\r\n\tvar el = document.getElementById(\"utesttip\")\r\n\tif(el)\r\n\t\tdocument.body.removeChild(el)\r\n}";
	}
	,cssStyle: function() {
		return "body, dd, dt {\r\n\tfont-family: Verdana, Arial, Sans-serif;\r\n\tfont-size: 12px;\r\n}\r\ndl {\r\n\twidth: 180px;\r\n}\r\ndd, dt {\r\n\tmargin : 0;\r\n\tpadding : 2px 5px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n}\r\ndd.value {\r\n\ttext-align: center;\r\n\tbackground-color: #eeeeee;\r\n}\r\ndt {\r\n\ttext-align: left;\r\n\tbackground-color: #e6e6e6;\r\n\tfloat: left;\r\n\twidth: 100px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nh1 {\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tpadding: 5px 0 4px 0;\r\n\tfont-family: Arial, Sans-serif;\r\n\tfont-size: 18px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tmargin: 0 2px 0px 2px;\r\n}\r\n\r\nh2 {\r\n\tfont-weight: bold;\r\n\tpadding: 2px 0 2px 8px;\r\n\tfont-family: Arial, Sans-serif;\r\n\tfont-size: 13px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tmargin: 0 0 0px 0;\r\n\tbackground-color: #FFFFFF;\r\n\tcolor: #777777;\r\n}\r\n\r\nh2.classname {\r\n\tcolor: #000000;\r\n}\r\n\r\n.okbg {\r\n\tbackground-color: #66FF55;\r\n}\r\n.errorbg {\r\n\tbackground-color: #CC1100;\r\n}\r\n.failurebg {\r\n\tbackground-color: #EE3322;\r\n}\r\n.warnbg {\r\n\tbackground-color: #FFCC99;\r\n}\r\n.headerinfo {\r\n\ttext-align: right;\r\n\tfont-size: 11px;\r\n\tfont - color: 0xCCCCCC;\r\n\tmargin: 0 2px 5px 2px;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tpadding: 2px;\r\n}\r\n\r\nli {\r\n\tpadding: 4px;\r\n\tmargin: 2px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tbackground-color: #e6e6e6;\r\n}\r\n\r\nli.fixture {\r\n\tbackground-color: #f6f6f6;\r\n\tpadding-bottom: 6px;\r\n}\r\n\r\ndiv.fixturedetails {\r\n\tpadding-left: 108px;\r\n}\r\n\r\nul {\r\n\tpadding: 0;\r\n\tmargin: 6px 0 0 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\nol {\r\n\tpadding: 0 0 0 28px;\r\n\tmargin: 0px 0 0 0;\r\n}\r\n\r\n.statnumbers {\r\n\tpadding: 2px 8px;\r\n}\r\n\r\n.fixtureresult {\r\n\twidth: 100px;\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tfont-weight: bold;\r\n\tpadding: 1px;\r\n\tmargin: 0 0 0 0;\r\n}\r\n\r\n.testoutput {\r\n\tborder: 1px dashed #CCCCCC;\r\n\tmargin: 4px 0 0 0;\r\n\tpadding: 4px 8px;\r\n\tbackground-color: #eeeeee;\r\n}\r\n\r\nspan.tracepos, span.traceposempty {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tfont-weight: bold;\r\n\tfont-size: 9px;\r\n\twidth: 170px;\r\n\tmargin: 2px 0 0 2px;\r\n}\r\n\r\nspan.tracepos:hover {\r\n\tcursor : pointer;\r\n\tbackground-color: #ffff99;\r\n}\r\n\r\nspan.tracemsg {\r\n\tdisplay: block;\r\n\tmargin-left: 180px;\r\n\tbackground-color: #eeeeee;\r\n\tpadding: 7px;\r\n}\r\n\r\nspan.tracetime {\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\tmargin: 2px;\r\n\tfont-size: 9px;\r\n\tcolor: #777777;\r\n}\r\n\r\n\r\ndiv.trace ol {\r\n\tpadding: 0 0 0 40px;\r\n\tcolor: #777777;\r\n}\r\n\r\ndiv.trace li {\r\n\tpadding: 0;\r\n}\r\n\r\ndiv.trace li div.li {\r\n\tcolor: #000000;\r\n}\r\n\r\ndiv.trace h2 {\r\n\tmargin: 0 2px 0px 2px;\r\n\tpadding-left: 4px;\r\n}\r\n\r\n.tracepackage {\r\n\tcolor: #777777;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.clr {\r\n\tclear: both;\r\n}\r\n\r\n#utesttip {\r\n\tmargin-top: -3px;\r\n\tmargin-left: 170px;\r\n\tfont-size: 9px;\r\n}\r\n\r\n#utesttip li {\r\n\tmargin: 0;\r\n\tbackground-color: #ffff99;\r\n\tpadding: 2px 4px;\r\n\tborder: 0;\r\n\tborder-bottom: 1px dashed #ffff33;\r\n}";
	}
	,formatTime: function(t) {
		return Math.round(t * 1000) + " ms";
	}
	,complete: function(result) {
		this.result = result;
		this.handler(this);
		this.restoreTrace();
	}
	,result: null
	,getHtml: function(title) {
		if(null == title) title = "utest: " + utest.ui.text.HtmlReport.platform;
		var s = this.getAll();
		if("" == s) return ""; else return this.wrapHtml(title,s);
	}
	,getAll: function() {
		if(!utest.ui.common.ReportTools.hasOutput(this,this.result.stats)) return ""; else return this.getHeader() + this.getTrace() + this.getResults();
	}
	,getResults: function() {
		var buf = new StringBuf();
		this.addPackages(buf,this.result,this.result.stats.isOk);
		return buf.b;
	}
	,getTrace: function() {
		var buf = new StringBuf();
		if(this._traces == null || this._traces.length == 0) return "";
		buf.b += Std.string("<div class=\"trace\"><h2>traces</h2><ol>");
		var _g = 0, _g1 = this._traces;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			buf.b += Std.string("<li><div class=\"li\">");
			var stack = StringTools.replace(this.formatStack(t.stack,false),"'","\\'");
			var method = "<span class=\"tracepackage\">" + t.infos.className + "</span><br/>" + t.infos.methodName + "(" + t.infos.lineNumber + ")";
			buf.b += Std.string("<span class=\"tracepos\" onmouseover=\"utestTooltip(this.parentNode, '" + stack + "')\" onmouseout=\"utestRemoveTooltip()\">");
			buf.b += Std.string(method);
			buf.b += Std.string("</span><span class=\"tracetime\">");
			buf.b += Std.string("@ " + this.formatTime(t.time));
			if(Math.round(t.delta * 1000) > 0) buf.b += Std.string(", ~" + this.formatTime(t.delta));
			buf.b += Std.string("</span><span class=\"tracemsg\">");
			buf.b += Std.string(StringTools.replace(StringTools.trim(t.msg),"\n","<br/>\n"));
			buf.b += Std.string("</span><div class=\"clr\"></div></div></li>");
		}
		buf.b += Std.string("</ol></div>");
		return buf.b;
	}
	,getHeader: function() {
		var buf = new StringBuf();
		if(!utest.ui.common.ReportTools.hasHeader(this,this.result.stats)) return "";
		var end = haxe.Timer.stamp();
		var time = ((end - this.startTime) * 1000 | 0) / 1000;
		var msg = "TEST OK";
		if(this.result.stats.hasErrors) msg = "TEST ERRORS"; else if(this.result.stats.hasFailures) msg = "TEST FAILED"; else if(this.result.stats.hasWarnings) msg = "WARNING REPORTED";
		buf.b += Std.string("<h1 class=\"" + this.cls(this.result.stats) + "bg header\">" + msg + "</h1>\n");
		buf.b += Std.string("<div class=\"headerinfo\">");
		this.resultNumbers(buf,this.result.stats);
		buf.b += Std.string(" performed on <strong>" + utest.ui.text.HtmlReport.platform + "</strong>, executed in <strong> " + time + " sec. </strong></div >\n ");
		return buf.b;
	}
	,addPackage: function(buf,result,name,isOk) {
		if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
		if(name == "" && result.classNames().length == 0) return;
		buf.b += Std.string("<li>");
		buf.b += Std.string("<h2>" + name + "</h2>");
		this.blockNumbers(buf,result.stats);
		buf.b += Std.string("<ul>\n");
		var _g = 0, _g1 = result.classNames();
		while(_g < _g1.length) {
			var cname = _g1[_g];
			++_g;
			this.addClass(buf,result.getClass(cname),cname,isOk);
		}
		buf.b += Std.string("</ul>\n");
		buf.b += Std.string("</li>\n");
	}
	,addPackages: function(buf,result,isOk) {
		if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
		buf.b += Std.string("<ul id=\"utest-results-packages\">\n");
		var _g = 0, _g1 = result.packageNames(false);
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			this.addPackage(buf,result.getPackage(name),name,isOk);
		}
		buf.b += Std.string("</ul>\n");
	}
	,addClass: function(buf,result,name,isOk) {
		if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
		buf.b += Std.string("<li>");
		buf.b += Std.string("<h2 class=\"classname\">" + name + "</h2>");
		this.blockNumbers(buf,result.stats);
		buf.b += Std.string("<ul>\n");
		var _g = 0, _g1 = result.methodNames();
		while(_g < _g1.length) {
			var mname = _g1[_g];
			++_g;
			this.addFixture(buf,result.get(mname),mname,isOk);
		}
		buf.b += Std.string("</ul>\n");
		buf.b += Std.string("</li>\n");
	}
	,getErrorStack: function(s,e) {
		return this.formatStack(s);
	}
	,getErrorDescription: function(e) {
		return Std.string(e);
	}
	,addFixture: function(buf,result,name,isOk) {
		if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
		buf.b += Std.string("<li class=\"fixture\"><div class=\"li\">");
		buf.b += Std.string("<span class=\"" + this.cls(result.stats) + "bg fixtureresult\">");
		if(result.stats.isOk) buf.b += Std.string("OK "); else if(result.stats.hasErrors) buf.b += Std.string("ERROR "); else if(result.stats.hasFailures) buf.b += Std.string("FAILURE "); else if(result.stats.hasWarnings) buf.b += Std.string("WARNING ");
		buf.b += Std.string("</span>");
		buf.b += Std.string("<div class=\"fixturedetails\">");
		buf.b += Std.string("<strong>" + name + "</strong>");
		buf.b += Std.string(": ");
		this.resultNumbers(buf,result.stats);
		var messages = [];
		var $it0 = result.iterator();
		while( $it0.hasNext() ) {
			var assertation = $it0.next();
			var $e = (assertation);
			switch( $e[1] ) {
			case 0:
				var pos = $e[2];
				break;
			case 1:
				var pos = $e[3], msg = $e[2];
				messages.push("<strong>line " + pos.lineNumber + "</strong>: <em>" + StringTools.htmlEscape(msg) + "</em>");
				break;
			case 2:
				var s = $e[3], e = $e[2];
				messages.push("<strong>error</strong>: <em>" + this.getErrorDescription(e) + "</em>\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
				break;
			case 3:
				var s = $e[3], e = $e[2];
				messages.push("<strong>setup error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
				break;
			case 4:
				var s = $e[3], e = $e[2];
				messages.push("<strong>tear-down error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
				break;
			case 5:
				var s = $e[3], missedAsyncs = $e[2];
				messages.push("<strong>missed async call(s)</strong>: " + missedAsyncs);
				break;
			case 6:
				var s = $e[3], e = $e[2];
				messages.push("<strong>async error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
				break;
			case 7:
				var msg = $e[2];
				messages.push(StringTools.htmlEscape(msg));
				break;
			}
		}
		if(messages.length > 0) {
			buf.b += Std.string("<div class=\"testoutput\">");
			buf.b += Std.string(messages.join("<br/>"));
			buf.b += Std.string("</div>\n");
		}
		buf.b += Std.string("</div>\n");
		buf.b += Std.string("</div></li>\n");
	}
	,formatStack: function(stack,addNL) {
		if(addNL == null) addNL = true;
		var parts = [];
		var nl = addNL?"\n":"";
		var last = null;
		var count = 1;
		var _g = 0, _g1 = haxe.Stack.toString(stack).split("\n");
		while(_g < _g1.length) {
			var part = _g1[_g];
			++_g;
			if(StringTools.trim(part) == "") continue;
			if(-1 < part.indexOf("Called from utest.")) continue;
			if(part == last) parts[parts.length - 1] = part + " (#" + ++count + ")"; else {
				count = 1;
				parts.push(last = part);
			}
		}
		var s = "<ul><li>" + parts.join("</li>" + nl + "<li>") + "</li></ul>" + nl;
		return "<div>" + s + "</div>" + nl;
	}
	,blockNumbers: function(buf,stats) {
		buf.b += Std.string("<div class=\"" + this.cls(stats) + "bg statnumbers\">");
		this.resultNumbers(buf,stats);
		buf.b += Std.string("</div>");
	}
	,resultNumbers: function(buf,stats) {
		var numbers = [];
		if(stats.assertations == 1) numbers.push("<strong>1</strong> test"); else numbers.push("<strong>" + stats.assertations + "</strong> tests");
		if(stats.successes != stats.assertations) {
			if(stats.successes == 1) numbers.push("<strong>1</strong> pass"); else if(stats.successes > 0) numbers.push("<strong>" + stats.successes + "</strong> passes");
		}
		if(stats.errors == 1) numbers.push("<strong>1</strong> error"); else if(stats.errors > 0) numbers.push("<strong>" + stats.errors + "</strong> errors");
		if(stats.failures == 1) numbers.push("<strong>1</strong> failure"); else if(stats.failures > 0) numbers.push("<strong>" + stats.failures + "</strong> failures");
		if(stats.warnings == 1) numbers.push("<strong>1</strong> warning"); else if(stats.warnings > 0) numbers.push("<strong>" + stats.warnings + "</strong> warnings");
		buf.b += Std.string(numbers.join(", "));
	}
	,cls: function(stats) {
		if(stats.hasErrors) return "error"; else if(stats.hasFailures) return "failure"; else if(stats.hasWarnings) return "warn"; else return "ok";
	}
	,start: function(e) {
		this.startTime = haxe.Timer.stamp();
	}
	,startTime: null
	,_trace: function(v,infos) {
		var time = haxe.Timer.stamp();
		var delta = this._traceTime == null?0:time - this._traceTime;
		this._traces.push({ msg : StringTools.htmlEscape(Std.string(v)), infos : infos, time : time - this.startTime, delta : delta, stack : haxe.Stack.callStack()});
		this._traceTime = haxe.Timer.stamp();
	}
	,_traceTime: null
	,restoreTrace: function() {
		if(!this.traceRedirected) return;
		haxe.Log.trace = this.oldTrace;
	}
	,redirectTrace: function() {
		if(this.traceRedirected) return;
		this._traces = [];
		this.oldTrace = haxe.Log.trace;
		haxe.Log.trace = $bind(this,this._trace);
	}
	,setHandler: function(handler) {
		this.handler = handler;
	}
	,_traces: null
	,oldTrace: null
	,aggregator: null
	,handler: null
	,displayHeader: null
	,displaySuccessResults: null
	,traceRedirected: null
	,__class__: utest.ui.text.HtmlReport
}
utest.ui.text.PlainTextReport = function(runner,outputHandler) {
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($bind(this,this.start));
	this.aggregator.onComplete.add($bind(this,this.complete));
	if(null != outputHandler) this.setHandler(outputHandler);
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
};
$hxClasses["utest.ui.text.PlainTextReport"] = utest.ui.text.PlainTextReport;
utest.ui.text.PlainTextReport.__name__ = ["utest","ui","text","PlainTextReport"];
utest.ui.text.PlainTextReport.__interfaces__ = [utest.ui.common.IReport];
utest.ui.text.PlainTextReport.prototype = {
	complete: function(result) {
		this.result = result;
		this.handler(this);
	}
	,getResults: function() {
		var buf = new StringBuf();
		this.addHeader(buf,this.result);
		var _g = 0, _g1 = this.result.packageNames();
		while(_g < _g1.length) {
			var pname = _g1[_g];
			++_g;
			var pack = this.result.getPackage(pname);
			if(utest.ui.common.ReportTools.skipResult(this,pack.stats,this.result.stats.isOk)) continue;
			var _g2 = 0, _g3 = pack.classNames();
			while(_g2 < _g3.length) {
				var cname = _g3[_g2];
				++_g2;
				var cls = pack.getClass(cname);
				if(utest.ui.common.ReportTools.skipResult(this,cls.stats,this.result.stats.isOk)) continue;
				buf.b += Std.string((pname == ""?"":pname + ".") + cname + this.newline);
				var _g4 = 0, _g5 = cls.methodNames();
				while(_g4 < _g5.length) {
					var mname = _g5[_g4];
					++_g4;
					var fix = cls.get(mname);
					if(utest.ui.common.ReportTools.skipResult(this,fix.stats,this.result.stats.isOk)) continue;
					buf.b += Std.string(this.indents(1) + mname + ": ");
					if(fix.stats.isOk) buf.b += Std.string("OK "); else if(fix.stats.hasErrors) buf.b += Std.string("ERROR "); else if(fix.stats.hasFailures) buf.b += Std.string("FAILURE "); else if(fix.stats.hasWarnings) buf.b += Std.string("WARNING ");
					var messages = "";
					var $it0 = fix.iterator();
					while( $it0.hasNext() ) {
						var assertation = $it0.next();
						var $e = (assertation);
						switch( $e[1] ) {
						case 0:
							var pos = $e[2];
							buf.b += Std.string(".");
							break;
						case 1:
							var pos = $e[3], msg = $e[2];
							buf.b += Std.string("F");
							messages += this.indents(2) + "line: " + pos.lineNumber + ", " + msg + this.newline;
							break;
						case 2:
							var s = $e[3], e = $e[2];
							buf.b += Std.string("E");
							messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
							break;
						case 3:
							var s = $e[3], e = $e[2];
							buf.b += Std.string("S");
							messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
							break;
						case 4:
							var s = $e[3], e = $e[2];
							buf.b += Std.string("T");
							messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
							break;
						case 5:
							var s = $e[3], missedAsyncs = $e[2];
							buf.b += Std.string("O");
							messages += this.indents(2) + "missed async calls: " + missedAsyncs + this.dumpStack(s) + this.newline;
							break;
						case 6:
							var s = $e[3], e = $e[2];
							buf.b += Std.string("A");
							messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
							break;
						case 7:
							var msg = $e[2];
							buf.b += Std.string("W");
							messages += this.indents(2) + msg + this.newline;
							break;
						}
					}
					buf.b += Std.string(this.newline);
					buf.b += Std.string(messages);
				}
			}
		}
		return buf.b;
	}
	,result: null
	,addHeader: function(buf,result) {
		if(!utest.ui.common.ReportTools.hasHeader(this,result.stats)) return;
		var end = haxe.Timer.stamp();
		var time = ((end - this.startTime) * 1000 | 0) / 1000;
		buf.b += Std.string("results: " + (result.stats.isOk?"ALL TESTS OK":"SOME TESTS FAILURES") + this.newline + " " + this.newline);
		buf.b += Std.string("assertations: " + result.stats.assertations + this.newline);
		buf.b += Std.string("successes: " + result.stats.successes + this.newline);
		buf.b += Std.string("errors: " + result.stats.errors + this.newline);
		buf.b += Std.string("failures: " + result.stats.failures + this.newline);
		buf.b += Std.string("warnings: " + result.stats.warnings + this.newline);
		buf.b += Std.string("execution time: " + time + this.newline);
		buf.b += Std.string(this.newline);
	}
	,dumpStack: function(stack) {
		if(stack.length == 0) return "";
		var parts = haxe.Stack.toString(stack).split("\n");
		var r = [];
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			if(part.indexOf(" utest.") >= 0) continue;
			r.push(part);
		}
		return r.join(this.newline);
	}
	,indents: function(c) {
		var s = "";
		var _g = 0;
		while(_g < c) {
			var _ = _g++;
			s += this.indent;
		}
		return s;
	}
	,start: function(e) {
		this.startTime = haxe.Timer.stamp();
	}
	,startTime: null
	,setHandler: function(handler) {
		this.handler = handler;
	}
	,indent: null
	,newline: null
	,aggregator: null
	,handler: null
	,displayHeader: null
	,displaySuccessResults: null
	,__class__: utest.ui.text.PlainTextReport
}
utest.ui.text.PrintReport = function(runner) {
	utest.ui.text.PlainTextReport.call(this,runner,$bind(this,this._handler));
	this.newline = "\n";
	this.indent = "  ";
};
$hxClasses["utest.ui.text.PrintReport"] = utest.ui.text.PrintReport;
utest.ui.text.PrintReport.__name__ = ["utest","ui","text","PrintReport"];
utest.ui.text.PrintReport.__super__ = utest.ui.text.PlainTextReport;
utest.ui.text.PrintReport.prototype = $extend(utest.ui.text.PlainTextReport.prototype,{
	_trace: function(s) {
		s = StringTools.replace(s,"  ",this.indent);
		s = StringTools.replace(s,"\n",this.newline);
		haxe.Log.trace(s,{ fileName : "PrintReport.hx", lineNumber : 66, className : "utest.ui.text.PrintReport", methodName : "_trace"});
	}
	,_handler: function(report) {
		this._trace(report.getResults());
	}
	,useTrace: null
	,__class__: utest.ui.text.PrintReport
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var Void = $hxClasses.Void = { __ename__ : ["Void"]};
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
js.Lib.onerror = null;
org.casalib.util.ArrayUtil.SORT_CASEINSENSITIVE = 1;
org.casalib.util.ArrayUtil.SORT_DESCENDING = 2;
org.casalib.util.ArrayUtil.SORT_UNIQUESORT = 4;
org.casalib.util.ArrayUtil.SORT_RETURNINDEXEDARRAY = 8;
org.casalib.util.ArrayUtil.SORT_NUMERIC = 16;
utest.TestHandler.POLLING_TIME = 10;
utest.ui.text.HtmlReport.platform = "javascript";
Main.main();
})();
