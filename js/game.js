var audioscript = document.createElement('script');
audioscript.src = "js/audiomanager.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(audioscript);

Game = function()
{
	this.loadContent = function()
	{
		AudioManager.playBackground("TempBGMusic.mp3");
	}
	
	this.unloadContent = function()
	{
		AudioManager.stop();
	}
	
	this.update = function(dt)
	{
	
	}
	
	this.render = function(dt)
	{
	
	}
}