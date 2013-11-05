var AudioManager = new function()
{
	var background = null,
		effect = null,
		gameboy = null;
	
	var backgroundVolume = 0.75;
	var effectVolume = 1.0;
	var gameboyVolume = 0.85;
	
	var gamevolume = 0.5;
	
	var isInitialized = false;
	
	this.setVolume = function(volume)
	{
		gamevolume = volume;
		
		if(!isInitialized) 
		{
			isInitialized = true;
			initialize();
		}
		background.volume = backgroundVolume * volume;
		effect.volume = effectVolume * volume;
		gameboy.volume = gameboyVolume * volume;
	}
	
	var initialize = function()
	{
		background = document.getElementById('audio-background');
		effect = document.getElementById('audio-effect');
		gameboy = document.getElementById('audio-gameboy');
		
		background.volume = backgroundVolume * gamevolume;
		effect.volume = effectVolume * gamevolume;
		gameboy.volume = gameboyVolume * gamevolume;
	}
	
	this.stop = function()
	{
		if(!isInitialized) 
		{
			isInitialized = true;
			initialize();
		}
		effect.pause();
		background.pause();
	}

	this.playBackground = function(file)
	{
		if(!isInitialized) 
		{
			isInitialized = true;
			initialize();
		}
		background.src = "audio/background/" + file;
		background.play();
	}

	this.playEffect = function(file)
	{
		if(!isInitialized) 
		{
			isInitialized = true;
			initialize();
		}
		effect.src = "audio/effect/" + file;
		effect.play();
	}

	this.playGameboy = function(file)
	{
		if(!isInitialized) 
		{
			isInitialized = true;
			initialize();
		}
		gameboy.src = "audio/gameboy/" + file;
		gameboy.play();
	}
}