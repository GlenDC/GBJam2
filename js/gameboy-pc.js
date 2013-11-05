var	CrossIdle = new Image(70,70),
	CrossDownDown = new Image(70,70),
	CrossDownHover = new Image(70,70),
	CrossUpDown = new Image(70,70),
	CrossUpHover = new Image(70,70),
	CrossLeftDown = new Image(70,70),
	CrossLeftHover = new Image(70,70),
	CrossRightDown = new Image(70,70),
	CrossRightHover = new Image(70,70),
	InfoDown = new Image(28,28),
	InfoHover = new Image(28,28),
	InfoIdle = new Image(28,28),
	RoundDown = new Image(34,34),
	RoundHover = new Image(34,34),
	RoundIdle = new Image(34,34),
	RectDown = new Image(33,19),
	RectHover = new Image(33,19),
	RectIdle = new Image(33,19),
	LightOn = new Image(10,10),
	LightOff = new Image(10,10);
	
var GameIsPaused = true;
var GameboyIsOn = false;
var GameHasStarted = false;

var ButtonLeftIsDown = false;
var ButtonRightIsDown = false;
var ButtonUpIsDown = false;
var ButtonDownIsDown = false;
var ButtonAIsDown = false;
var ButtonBIsDown = false;
var ButtonStartIsDown = false;
var ButtonSelectIsDown = false;
var ButtonInfoIsDown = false;
var EscapeButtonIsDown = false;

var ShowInfoHUD = false;
var HoverOverPowerButton = false;
var GamebuttonPowerBlink = false;

CrossIdle.src = "art/framework/Cross_Idle.png";
CrossDownDown.src = "art/framework/Cross_Down_Down.png";
CrossDownHover.src = "art/framework/Cross_Down_Hover.png";
CrossUpDown.src = "art/framework/Cross_Up_Down.png";
CrossUpHover.src = "art/framework/Cross_Up_Hover.png";
CrossLeftDown.src = "art/framework/Cross_Left_Down.png";
CrossLeftHover.src = "art/framework/Cross_Left_Hover.png";
CrossRightDown.src = "art/framework/Cross_Right_Down.png";
CrossRightHover.src = "art/framework/Cross_Right_Hover.png";
InfoDown.src = "art/framework/Info_Down.png";
InfoHover.src = "art/framework/Info_Hover.png";
InfoIdle.src = "art/framework/Info_Idle.png";
RoundDown.src = "art/framework/Round_Down.png";
RoundHover.src = "art/framework/Round_Hover.png";
RoundIdle.src = "art/framework/Round_Idle.png";
RectDown.src = "art/framework/Rect_Down.png";
RectHover.src = "art/framework/Rect_Hover.png";
RectIdle.src = "art/framework/Rect_Idle.png";
LightOn.src = "art/framework/Light_On.png";
LightOff.src = "art/framework/Light_Off.png";

function SetCrossButtonHoverState(direction)
{
	var img = document.getElementById("button-cross-img");
	switch(direction)
	{
		case 0:
			img.src = CrossUpHover.src;
			break;
		case 1:
			img.src = CrossLeftHover.src;
			break;
		case 2:
			img.src = CrossRightHover.src;
			break;
		case 3:
			img.src = CrossDownHover.src;
			break;
	}
}

function CrossButtonOver(direction,element)
{
	element.style.cursor = "pointer";
	SetCrossButtonHoverState(direction);
}

function CrossButtonDown(direction,element)
{
	if(!GameIsPaused && GameboyIsOn)
	{
		var img = document.getElementById("button-cross-img");
		switch(direction)
		{
			case 0:
				img.src = CrossUpDown.src;
				if(!ButtonUpIsDown)
				{
					ButtonUpIsDown = true;
					document.getElementById("gameboy-audio-hard").play();
				}
				break;
			case 1:
				img.src = CrossLeftDown.src;
				if(!ButtonLeftIsDown)
				{
					ButtonLeftIsDown = true;
					document.getElementById("gameboy-audio-hard").play();
				}
				break;
			case 2:
				img.src = CrossRightDown.src
				if(!ButtonRightIsDown)
				{
					ButtonRightIsDown = true;
					document.getElementById("gameboy-audio-hard").play();
				}
				break;
			case 3:
				img.src = CrossDownDown.src;
				if(!ButtonDownIsDown)
				{
					ButtonDownIsDown = true;
					document.getElementById("gameboy-audio-hard").play();
				}
				break;
		}
	}
}

function SetRoundButton(element, state)
{
	switch(state)
	{
		case 0:
			element.src = RoundIdle.src;
			break;
		case 1:
			element.src = RoundHover.src
			break;
		case 2:
			element.src = RoundDown.src;
			break;
	}
}

function SetRectButton(element, state)
{
	switch(state)
	{
		case 0:
			element.src = RectIdle.src;
			break;
		case 1:
			element.src = RectHover.src;
			break;
		case 2:
			element.src = RectDown.src;
			break;
	}
}

function SetInfoButton(element, state)
{
	switch(state)
	{
		case 0:
			element.src = InfoIdle.src;
			break;
		case 1:
			element.src = InfoHover.src;
			break;
		case 2:
			element.src = InfoDown.src;
			break;
	}
}

function ButtonAUp(element, is_keyboard)
{
	SetRoundButton(element, is_keyboard == true ? 0 : 1);
	ButtonAIsDown = false;
}

function ButtonADown(element)
{
	if(!GameIsPaused && GameboyIsOn)
	{
		SetRoundButton(element, 2);
		if(!ButtonAIsDown)
		{
			ButtonAIsDown = true;
			SetInfoHiddenIfNeeded();
			document.getElementById("gameboy-audio-hard").play();
		}
	}
}

function ButtonAOver(element)
{
	SetRoundButton(element, 1);
}

function ButtonAOut(element)
{
	SetRoundButton(element, 0);
}

function ButtonBUp(element, is_keyboard)
{
	SetRoundButton(element, is_keyboard ? 0 : 1);
	ButtonBIsDown = false;
}

function ButtonBDown(element)
{
	if(!GameIsPaused && GameboyIsOn)
	{
		if(!ButtonBIsDown)
		{
			ButtonBIsDown = true;
			document.getElementById("gameboy-audio-hard").play();
		}
		SetRoundButton(element, 2);
	}
}

function ButtonBOver(element)
{
	SetRoundButton(element, 1);
}

function ButtonBOut(element)
{
	SetRoundButton(element, 0);
}

function ButtonStartUp(element, is_keyboard)
{
	SetRectButton(element, is_keyboard ? 0 : 1);
	ButtonStartIsDown = false;
}

function ButtonStartDown(element)
{
	if(!GameIsPaused && GameboyIsOn)
	{
		SetRectButton(element, 2);
		if(!ButtonStartIsDown)
		{
			ButtonStartIsDown = true;
			SetInfoHiddenIfNeeded();
			document.getElementById("gameboy-audio-soft").play();
		}
	}
}

function ButtonStartOver(element)
{
	SetRectButton(element, 1);
}

function ButtonStartOut(element)
{
	SetRectButton(element, 0);
}

function ButtonSelectUp(element,is_keyboard)
{
	SetRectButton(element, is_keyboard ? 0 : 1);
	ButtonSelectIsDown = false;
}

function ButtonSelectDown(element)
{
	if(!GameIsPaused && GameboyIsOn)
	{
		SetRectButton(element, 2);
		if(!ButtonSelectIsDown)
		{
			ButtonSelectIsDown = true;
			document.getElementById("gameboy-audio-soft").play();
		}
	}
}

function ButtonSelectOver(element)
{
	SetRectButton(element, 1);
}

function ButtonSelectOut(element)
{
	SetRectButton(element, 0);
}

function ButtonStartOut(element)
{
	SetRectButton(element, 0);
}

function ButtonInfoUp(element,is_keyboard)
{
	SetInfoButton(element, is_keyboard ? 0 : 1);
	ButtonInfoIsDown = false;
}

function ButtonInfoDown(element)
{
	if(!GameIsPaused && GameboyIsOn)
	{
		SetInfoButton(element, 2);
		if(!ButtonInfoIsDown)
		{
			ButtonInfoIsDown = true;
			document.getElementById("gameboy-audio-soft").play();
			SetInfoHUDHidden(ShowInfoHUD);
		}
	}
}

function ButtonInfoOver(element)
{
	SetInfoButton(element, 1);
	if(GameboyIsOn && !GameIsPaused && !ShowInfoHUD)
	{
		document.getElementById('info-button-hover-text').style.visibility = 'visible';
	}
}

function ButtonInfoOut(element)
{
	SetInfoButton(element, 0);
	document.getElementById('info-button-hover-text').style.visibility = 'hidden';
}

function CrossButtonUp(direction,element,is_keyboard)
{
	switch(direction)
	{
		case 3:
			ButtonDownIsDown = false;
			break;
		case 1:
			ButtonLeftIsDown = false;
			break;
		case 2:
			ButtonRightIsDown = false;
			break;
		case 0:
			ButtonUpIsDown = false;
			break;
	}
	if(is_keyboard)
	{
		CrossButtonOut(direction,element);
	}
	else
	{
		SetCrossButtonHoverState(direction);
	}
}

function CrossButtonOut(direction,element)
{
	var img = document.getElementById("button-cross-img");
	img.src = "art/framework/Cross_Idle.png";
	element.style.cursor = 'default';
	switch(direction)
	{
		case 3:
			// down
			break;
		case 1:
			// left
			break;
		case 2:
			// right
			break;
		case 0:
			// up
			break;
	}
}

function SetLight(is_on)
{
	var img = document.getElementById("gb-light");
	if(is_on == true)
	{
		img.src = "art/framework/Light_On.png";
	}
	else
	{
		img.src = "art/framework/Light_Off.png";
	}
}

function SetPowerButtonOver(elem)
{
	HoverOverPowerButton = true;
	SetPowerButtonState(elem);
}

function SetPowerButtonOut(elem)
{
	HoverOverPowerButton = false;
	SetPowerButtonState(elem);
}

function SetPowerButtonState(element)
{
	if(GameboyIsOn)
	{
		if(HoverOverPowerButton)
		{
			element.src = 'art/framework/PowerButtonOn_Hover.png';
		}
		else
		{
			element.src = 'art/framework/PowerButtonOn_Idle.png';
		}
	}
	else
	{
		if(HoverOverPowerButton)
		{
			element.src = 'art/framework/PowerButtonOff_Hover.png';
		}
		else
		{
			element.src = 'art/framework/PowerButtonOff_Idle.png';
		}
	}
}

document.addEventListener('keydown', function(event)
{
	if(event.keyCode == 37)
	{
		CrossButtonDown(1, document.getElementById("button-cross-img"));
	}
	else if(event.keyCode == 39)
	{
		CrossButtonDown(2, document.getElementById("button-cross-img"));
	}
	else if(event.keyCode == 38)
	{
		CrossButtonDown(0, document.getElementById("button-cross-img"));
	}
	else if(event.keyCode == 40)
	{
		CrossButtonDown(3, document.getElementById("button-cross-img"));
	}
	else if(event.keyCode == 13)
	{
		ButtonStartDown(document.getElementById("button-start"))
	}
	else if(event.keyCode == 32)
	{
		ButtonSelectDown(document.getElementById("button-select"))
	}
	else if(event.keyCode == 73)
	{
		ButtonInfoDown(document.getElementById("button-info"))
	}
	else if(event.keyCode == 88)
	{
		ButtonADown(document.getElementById("button-A"),true)
	}
	else if(event.keyCode == 87 || event.keyCode == 90)
	{
		ButtonBDown(document.getElementById("button-B"),true)
	}
	else if(event.keyCode == 27 && !EscapeButtonIsDown)
	{
		EscapeButtonIsDown = true;
		GameSwitch();
	}
});

document.addEventListener('keyup', function(event)
{
	if( event.keyCode == 37 )
	{
		CrossButtonUp(1, document.getElementById("button-cross-img"),true);
	}
	else if(event.keyCode == 39)
	{
		CrossButtonUp(2, document.getElementById("button-cross-img"),true);
	}
	else if(event.keyCode == 38)
	{
		CrossButtonUp(0, document.getElementById("button-cross-img"),true);
	}
	else if(event.keyCode == 40)
	{
		CrossButtonUp(3, document.getElementById("button-cross-img"),true);
	}
	else if(event.keyCode == 13)
	{
		ButtonStartUp(document.getElementById("button-start"),true)
	}
	else if(event.keyCode == 32)
	{
		ButtonSelectUp(document.getElementById("button-select"),true)
	}
	else if(event.keyCode == 73)
	{
		ButtonInfoUp(document.getElementById("button-info"),true)
	}
	else if(event.keyCode == 88)
	{
		ButtonAUp(document.getElementById("button-A"),true)
	}
	else if(event.keyCode == 90 || event.keyCode == 87)
	{
		ButtonBUp(document.getElementById("button-B"),true)
	}
	else if(event.keyCode == 27)
	{
		EscapeButtonIsDown = false;
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
		bp.src = 'art/framework/PowerButtonOff_Blink.png';
	}
	else
	{
		bp.src = 'art/framework/PowerButtonOff_Idle.png';
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

function GameSwitch()
{
	document.getElementById('gameboy-audio-button-start').play();
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
	SetPowerButtonState(document.getElementById("button-P"));
}
