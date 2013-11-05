var gamescript = document.createElement('script');
gamescript.src = "js/game.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(gamescript);

/* Pre-Logic: 
   Applies to everything that happens before the game starts. 
  -------------------------------------------------------------
*/
	
function LoadPreGameContent()
{	
	logo = document.createElement('img');
	var rnd = Math.floor((Math.random()*10)+1);
	if(rnd < 4)
	{
		logo.src = 'art/framework/Gameboy_LogoCrap.png';
	}
	else
	{
		logo.src = 'art/framework/Gameboy_Logo.png';
	}
	logo.width = 160;
	logo.height = 17;
	
	lastUpdate = Date.now();
	myInterval = setInterval(pretick, 0);
}

function UnloadPreGameContent()
{
	drawBG();
	delete window.logo;
	logo_y = -45;
}

function pretick()
{
	var now = Date.now();
	var dt = now - lastUpdate;
	lastUpdate = now;
	
	dt /= 100;

	preupdate(dt);
	prerender(dt);
}

function preupdate(dt)
{
	if(logo_y < canvas.height / 2.5)
	{
		logo_y += dt * 12;
	}
}

function prerender(dt)
{
	drawBG();
	ctx.drawImage(logo, 0, logo_y);
}

/* Game-Locic: 
   Applies to everything from the game itself. 
  -------------------------------------------------------------
*/

var showTempText = false;
game = null;

function LoadGameContent()
{	
	intCustomText = setInterval(stt, 650);
	lastUpdate = Date.now();
	clearInterval(myInterval);
	myInterval = setInterval(tick, 0);
	
	game = new Game();
	game.loadContent();
}

function UnloadGameContent()
{
	drawBG();
	
	game.unloadContent();
	delete window.game;
	
	clearInterval(intCustomText);
	clearInterval(myInterval);
	showTempText = false;
}

function tick()
{
	var now = Date.now();
	var dt = now - lastUpdate;
	lastUpdate = now;
	
	dt /= 100;

	update(dt);
	render(dt);
}

function stt()
{
	showTempText = !showTempText;
}

function update(dt)
{
	game.update(dt);
}

function render(dt)
{
	drawBG();
	game.render(dt);
	if(showTempText)
	{
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.fillText("-= NO GAME IS LOADING =-", 12,130);
	}
}
