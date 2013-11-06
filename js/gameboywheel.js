function GameboyWheel(id)
{
	var canvas = document.getElementById(id);
	canvas.width  = 52;
	canvas.height = 52;
	
	var val = 10;
	var x = -31;
	var ctx = canvas.getContext('2d');
	this.isHovering = false;
	
	ctx.font = '10px teachers_pet_sans_serif_bolRg';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'rgb(225, 225, 225)';
	
	var wheel = document.createElement('img');
	wheel.src = 'art/framework/Wheel.png';
	wheel.width = 52;
	wheel.heigh = 52;
	
	wheel.onload = function()
	{
		drawWheel();
		setInterval(draw, 10);
		
		canvas.onmousemove  = function (event)
		{
			console.log("over");
			this.isHovering = true;
		}
	}
	
	var draw = function()
	{
		if(this.isHovering || x >= -30)
		{
			console.log("ok!");
			if(this.isHovering && x < 0)
			{
				x += 1.5;
			}
			else if(!this.isHovering  && x >= -30)
			{
				x -= 1.5;
			}
			drawWheel();
		}
	}
	
	var drawWheel = function()
	{
		ctx.clearRect(0,0,canvas.width, canvas.height);
		ctx.drawImage(wheel, x, 0);
		ctx.fillText(val.toString(), x + 27, 30);
	}
}
