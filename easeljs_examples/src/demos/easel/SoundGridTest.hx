package demos.easel;
import createjs.sound.HTMLAudioPlugin;
import createjs.sound.FlashPlugin;
import createjs.preload.PreloadJS;
import createjs.sound.SoundJS;

import js.Lib;
import js.Dom.HtmlDom;

class SoundGridTest
{
	var preload:PreloadJS;
	
	public function new()
	{
		init();
	}
	
	function init()
	{
		if (Lib.window.top != Lib.window) {
			Lib.document.getElementById("header").style.display = "none";
		}
		
		untyped __js__('SoundJS.FlashPlugin.BASE_PATH = "assets/";'); // Initialize the base path from this document to the Flash Plugin
		
		if (getUrlParams().get("type") == "flash") {
	        SoundJS.registerPlugins([untyped __js__('SoundJS.FlashPlugin')]);
	    } else {
	        //untyped SoundJS.registerPlugins([SoundJS.HTMLAudioPlugin, SoundJS.FlashPlugin]);
	        SoundJS.registerPlugins([untyped __js__('SoundJS.HTMLAudioPlugin')]);
	    }
	
		if (!SoundJS.checkPlugin(true)) {
			Lib.document.getElementById("error").style.display = "block";
			Lib.document.getElementById("content").style.display = "none";
			return;
		}
		
		var assetsPath = "assets/";
		var manifest = [
		    {src:assetsPath+"Game-Break.mp3|"+assetsPath+"Game-Break.ogg", id:1, data: 1},
		    {src:assetsPath+"Game-Spawn.mp3|"+assetsPath+"Game-Spawn.ogg", id:2, data: 1},
		    {src:assetsPath+"Game-Shot.mp3|"+assetsPath+"Game-Shot.ogg", id:3, data: 1},

		    {src:assetsPath+"GU-StealDaisy.mp3|"+assetsPath+"GU-StealDaisy.ogg", id:4, data: 1},
		    {src:assetsPath+"Humm.mp3|"+assetsPath+"Humm.ogg", id:5, data: 1},
		    {src:assetsPath+"R-Damage.mp3|"+assetsPath+"R-Damage.ogg", id:6, data: 1},

		    {src:assetsPath+"Thunder1.mp3|"+assetsPath+"Thunder1.ogg", id:7, data: 1},
		    {src:assetsPath+"S-Damage.mp3|"+assetsPath+"S-Damage.ogg", id:8, data: 1},
		    {src:assetsPath+"U-CabinBoy3.mp3|"+assetsPath+"U-CabinBoy3.ogg", id:9, data: 1},

		    {src:assetsPath+"ToneWobble.mp3|"+assetsPath+"ToneWobble.ogg", id:10, data: 1},
		    {src:assetsPath+"Game-Death.mp3|"+assetsPath+"Game-Death.ogg", id:11, data: 1},
		    {src:assetsPath+"Game-Break.mp3|"+assetsPath+"Game-Break.ogg", id:12, data: 1}
		];

	    preload = new PreloadJS();
	    //Install SoundJS as a plugin, then PreloadJS will initialize it automatically.
	    preload.installPlugin(SoundJS);
	
		untyped
		{
			//Available PreloadJS callbacks
		    preload.onFileLoad = function(event) {
			    // Show the icon on loaded items.
				var div = Lib.document.getElementById(event.id);
			    div.style.backgroundImage = "url('assets/audioButtonSheet.png')";
		    };
			preload.onComplete = function(event) {
				Lib.document.getElementById("loader").className = "";
			}
		}

	    //Load the manifest and pass 'true' to start loading immediately. Otherwise, you can call load() manually.
	    preload.loadManifest(manifest, true);
	
		for(i in 1...13)
		{
			Lib.document.getElementById(Std.string(i)).onclick = function(e){
				trace("clicked "+i);
				playSound(e.target);
			};
		}
	
	}
	
	function stop() {
		if (preload != null) { preload.close(); }
		SoundJS.stop();
	}

	function playSound(target) {
	    //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
	    var instance = SoundJS.play(target.id, SoundJS.INTERRUPT_NONE, 0, 0, 0, 1);
		if (instance == null) { return; }
		target.className = "gridBox active";
		untyped{
			instance.onComplete = function(instance) {
				target.className = "gridBox";
			}
		}

	}
	
	function getUrlParams():Hash<String> 
	{
		var params:Hash<String> = new Hash();
		
		var url = js.Lib.window.location.href.split("?");
		if(url.length > 1)
		{
			var urlParams = url[1].split("&");
			for(ob in urlParams)
			{
				var obAr = ob.split("=");
				if(obAr.length>1)
				{
					params.set(obAr[0], obAr[1]);
				}	
			}
		}
		
		return params;
	}
	
	static function main()
	{
		new SoundGridTest();
	}
}