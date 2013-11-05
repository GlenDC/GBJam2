var GameIsPaused = true;
var GameboyIsOn = false;
var GameHasStarted = false;

var ShowInfoHUD = false;
var HoverOverPowerButton = false;
var GamebuttonPowerBlink = false;

var btnA, btnB, btnStart, btnSelect,
	btnUp, btnDown, btnLeft, btnRight,
	btnPower, btnInfo;

var btnscript = document.createElement('script');
btnscript.src = "js/button.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(btnscript);

btnscript.onload = function() 
{
	btnA = new Button("button-A", RoundIdle.src, 
		RoundHover.src, RoundDown.src);
	btnA.audio = "gameboy-audio-hard";
	btnA.downCB = function()
	{
		SetInfoHiddenIfNeeded();
	}
		
	btnB = new Button("button-B", RoundIdle.src, 
		RoundHover.src, RoundDown.src);
	btnB.audio = "gameboy-audio-hard";
		
	btnStart = new Button("button-start", RectIdle.src, 
		RectHover.src, RectDown.src);
	btnStart.audio = "gameboy-audio-soft";
	btnStart.downCB = function()
	{
		SetInfoHiddenIfNeeded();
	}
		
	btnSelect = new Button("button-select", RectIdle.src, 
		RectHover.src, RectDown.src);
	btnSelect.audio = "gameboy-audio-soft";
		
	btnUp = new Button("button-cross-img", CrossIdle.src, 
		CrossUpHover.src, CrossUpDown.src);
	btnUp.audio = "gameboy-audio-hard";
		
	btnDown = new Button("button-cross-img", CrossIdle.src, 
		CrossDownHover.src, CrossDownDown.src);
	btnDown.audio = "gameboy-audio-hard";
		
	btnRight = new Button("button-cross-img", CrossIdle.src, 
		CrossRightHover.src, CrossRightDown.src);
	btnRight.audio = "gameboy-audio-hard";
		
	btnLeft = new Button("button-cross-img", CrossIdle.src, 
		CrossLeftHover.src, CrossLeftDown.src);
	btnLeft.audio = "gameboy-audio-hard";
		
	btnInfo = new Button("button-info", InfoIdle.src,
		InfoHover.src, InfoDown.src);
	btnInfo.audio = "gameboy-audio-soft";
	btnInfo.downCB = function()
	{
		SetInfoHUDHidden(ShowInfoHUD);
	}
		
	btnPower = new ButtonSwitch("button-P", PowerOffIdle.src,
		PowerOffHover.src, PowerOnIdle.src, PowerOnHover.src);
	btnPower.alwaysActive = true;
	btnPower.audio = "gameboy-audio-button-start";
	btnPower.downCB = function() 
	{
		GameboyIsOn = !GameboyIsOn;
		SetLight(GameboyIsOn);
		if(GameboyIsOn)
		{
			StartGameBoy();
		}
		else
		{
			GameStop();
		}
	}
}

function SetLight(is_on)
{
	var img = document.getElementById("gb-light");
	if(is_on == true)
	{
		img.src = LightOn.src;
	}
	else
	{
		img.src = LightOff.src;
	}
}

document.addEventListener('keydown', function(event)
{
	if(event.keyCode == 37)
	{
		btnLeft.down();
	}
	else if(event.keyCode == 39)
	{
		btnRight.down();
	}
	else if(event.keyCode == 38)
	{
		btnUp.down();
	}
	else if(event.keyCode == 40)
	{
		btnDown.down();
	}
	else if(event.keyCode == 13)
	{
		btnStart.down();
	}
	else if(event.keyCode == 32)
	{
		btnSelect.down();
	}
	else if(event.keyCode == 73)
	{
		btnInfo.down();
	}
	else if(event.keyCode == 88)
	{
		btnA.down();
	}
	else if(event.keyCode == 87 || event.keyCode == 90)
	{
		btnB.down();
	}
	else if(event.keyCode == 27)
	{
		btnPower.down();
	}
});

document.addEventListener('keyup', function(event)
{
	if( event.keyCode == 37 )
	{
		btnLeft.up();
	}
	else if(event.keyCode == 39)
	{
		btnRight.up();
	}
	else if(event.keyCode == 38)
	{
		btnUp.up();
	}
	else if(event.keyCode == 40)
	{
		btnDown.up();
	}
	else if(event.keyCode == 13)
	{
		btnStart.up();
	}
	else if(event.keyCode == 32)
	{
		btnSelect.up();
	}
	else if(event.keyCode == 73)
	{
		btnInfo.up();
	}
	else if(event.keyCode == 88)
	{
		btnA.up();
	}
	else if(event.keyCode == 90 || event.keyCode == 87)
	{
		btnB.up();
	}
	else if(event.keyCode == 27)
	{
		btnPower.up();
	}
});

window.addEventListener('touchstart',function(event)
{
	var t = event.touches[0];
	//window.alert("Touch = { " + t.pageX + ", " + t.pageY + " }");
}, false);

window.addEventListener('touchend',function(event)
{
}, false);

function SetInfoHUDHidden(is_hidden)
{
	ShowInfoHUD = !is_hidden;
	var canvas = document.getElementById('main-canvas');
	var infoHUD = document.getElementById('gameboy-help-article');
	canvas.style.visibility = !is_hidden ? 'hidden' : 'visible';
	infoHUD.style.visibility = is_hidden ? 'hidden' : 'visible';
	if(ShowInfoHUD)
	{
		var infoHUDText = document.getElementById('info-button-hover-text');
		infoHUDText.style.visibility = 'hidden';
	}
}

function SetGameHidden(is_hidden)
{
	if(is_hidden)
	{
		var canvas = document.getElementById('main-canvas');
		var infoHUD = document.getElementById('gameboy-help-article');
		canvas.style.visibility = 'hidden';
		infoHUD.style.visibility = 'hidden';
	}
	else
	{
		SetInfoHUDHidden(true);
	}
}

function BrowserStart()
{
	SetGameHidden(true);
	StartPowerButtonBlinking();
	document.getElementById('info-button-hover-text').style.visibility = 'hidden';
}

function StartPowerButtonBlinking()
{
	BlinkInterval = setInterval(ButtonBlinking, 300);
}

function ButtonBlinking()
{
	GamebuttonPowerBlink = !GamebuttonPowerBlink;
	var bp = document.getElementById("button-P");
	if(GamebuttonPowerBlink)
	{
		bp.src = PowerOffBlink.src;
	}
	else
	{
		bp.src = PowerOffIdle.src;
	}
}

function StopPowerButtonBlinking()
{
	clearInterval(BlinkInterval);
}

function StartGameBoy()
{
	StopPowerButtonBlinking();
	SetGameHidden(false);
	LoadPreGameContent();
	IntroATimeOut = window.setTimeout(function() {
		if(GameboyIsOn)
		{
			document.getElementById('gameboy-audio-start').play();
			IntroAComplete = true;
		}
	}, 650);
	IntroBTimeOut = window.setTimeout(function() {
		if(GameboyIsOn)
		{
			StartTheGame();
			GameHasStarted = true;
			IntroBComplete = true;
		}
	}, 2350);
}

function StartTheGame()
{
	GameIsPaused = false;
	UnloadPreGameContent();
	LoadGameContent();
	clearTimeout(IntroATimeOut);
	clearTimeout(IntroBTimeOut);
}

function GameStop()
{
	StartPowerButtonBlinking();
	UnloadPreGameContent();
	UnloadGameContent();
	SetGameHidden(true);
	GameIsPaused = true;
	GameHasStarted = false;
	IntroAComplete = false;
	IntroBComplete = false;
}

function SetInfoHiddenIfNeeded()
{
	if(ShowInfoHUD)
	{
		SetInfoHUDHidden(true);
	}
}
