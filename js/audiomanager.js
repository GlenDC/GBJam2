var AudioManager = new function()
{
	var background = null,
		effect = null,
		gameboy = null,
		volumeText = null;
	
	var backgroundVolume = 0.75;
	var effectVolume = 1.0;
	var gameboyVolume = 0.85;
	
	var gamevolume = 0.5;
	
	var isInitialized = false;
	
	this.increaseVolume = function()
	{
		gamevolume += 0.1;
		if(gamevolume > 1)
		{
			gamevolume = 1;
		}
		this.setVolume(gamevolume);
	}
	
	this.decreaseVolume = function()
	{
		gamevolume -= 0.1;
		if(gamevolume < 0)
		{
			gamevolume = 0;
		}
		this.setVolume(gamevolume);
	}
	
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
		volumeText.innerHTML = this.getVolumeText();
	}
	
	var initialize = function()
	{
		background = document.getElementById('audio-background');
		effect = document.getElementById('audio-effect');
		gameboy = document.getElementById('audio-gameboy');
		volumeText = document.getElementById('volume-text');
		
		background.volume = backgroundVolume * gamevolume;
		effect.volume = effectVolume * gamevolume;
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
	
	this.getVolumeText = function()
	{
		var vol = Math.floor(gamevolume * 10);
		return vol.toString();
	}
}