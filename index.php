<!doctype html>
<html>
	<?php 
		include_once 'php/global.php';
	?>
	<head>
		<meta encoding=utf-8>
		<title><?php echo $title . ' - ' . $subtitle; ?></title>
		<link rel="stylesheet" type="text/css" href="css/framework.css">
		<link rel="stylesheet" type="text/css" href="css/help.css">	
		<link rel="shortcut icon" href="art/favicon.ico" />
	
		<script src="js/gameboy-pc.js"></script>
		
		<?php 
			include_once 'php/scripts/web-factory.php';
		?>
		
	</head>
	<body>
		<article>
			<?php
				pCreateImageBtn("", "button-P",	"PowerButtonOff_Idle.png", 
						"SetPowerButtonOver(this);StopPowerButtonBlinking(this);",
						"SetPowerButtonOut(this);", "GameSwitch();","");
			?>
			
			<img src="art/framework/GameBoy.png" id=gameboy-img 
				draggable=false class=unselectable />
			
			<article id=gameboy-help-article>
				<header id=help-header>-= CONTROLS =-</header>
				<ul>
				<?php
					pCreateControlInfo("help-cross.png", "move", "ARROWS");
					pCreateControlsInfo("help-a.png", "shoot", "W", "Z");
					pCreateControlInfo("help-b.png", "jump", "X");
					pCreateControlInfo("help-l.png", "pause", "SPACE");
					pCreateControlInfo("help-r.png", "special", "ENTER");
				?>
				</ul>
				<footer id=help-footer>Press 
					<div class=help-control-text><?php pPrintKey("START"); ?></div> or 
					<div class=help-control-text><?php pPrintKey("A"); ?></div><br/>
					to close this screen</footer>
			</article>
			
			<!-- Canvas for all game content -->
			<canvas id=main-canvas></canvas>
			
			<?php 
				pCreateAudio("gameboy-audio-hard", "ButtonHardClick.mp3");
				pCreateAudio("gameboy-audio-soft", "ButtonSoftClick.mp3");
				pCreateAudio("gameboy-audio-start", "GameboyStart.mp3");
				pCreateAudio("gameboy-audio-button-start", "ButtonStart.mp3");
			?>
			
			<div id=info-button-hover-text>SHOW CONTROLS</div>
			<div id=no-mobile-support-text class=unselectable>
				MOBILE DEVICES NOT SUPPORTED YET</div>
			
			<?php
				pCreateImage("gb-light", "Light_Off.png");
			
				pCreateImageBtn("button-round", "button-A",	"Round_Idle.png", 
					"ButtonAOver(this);", "ButtonAOut(this);", "ButtonADown(this);",
					"ButtonAUp(this,false);");
				pCreateImageBtn("button-round", "button-B", "Round_Idle.png", 
					"ButtonBOver(this);", "ButtonBOut(this);", "ButtonBDown(this);",
					"ButtonBUp(this,false);");
				pCreateImageBtn("button-rect", "button-select", "Rect_Idle.png", 
					"ButtonSelectOver(this);", "ButtonSelectOut(this);",
					"ButtonSelectDown(this);", "ButtonSelectUp(this,false);");
				pCreateImageBtn("button-rect", "button-start", "Rect_Idle.png", 
					"ButtonStartOver(this);", "ButtonStartOut(this);",
					"ButtonStartDown(this);", "ButtonStartUp(this,false);");
			?>
			
			<div id=button-cross>
				<img src="<?php echo $dir_framework; ?>Cross_Idle.png" draggable=false 
					usemap="#button-cross-map" id=button-cross-img class=unselectable>
				<map name=button-cross-map>
				<?php
					pCreateCrossButtonArea(0, "23,0,46,23", "Up");
					pCreateCrossButtonArea(1, "0,23,23,46", "Left");
					pCreateCrossButtonArea(2, "46,23,69,46", "Right");
					pCreateCrossButtonArea(3, "23,46,46,69", "Down");
				?>
				</map>
			</div>
			
			<?php
				pCreateImageBtn("", "button-info", "Info_Idle.png", 
					"ButtonInfoOver(this);", "ButtonInfoOut(this);",
					"ButtonInfoDown(this);", "ButtonInfoUp(this,false);");
			?>
			
			<footer id=website-footer>
				<?php include 'php/footer.php' ?>
			</footer>
		</article>
		
		<!-- temp code -->
		<script>
			var canvas = document.querySelector('canvas');
			var ctx = canvas.getContext('2d');
			intCustomText = null, logo = null, logo_y = -45;
			
			ctx.font = 'italic 400 14px/2 helvetica neue, sans-serif';
			
			canvas.width = 160;
			canvas.height = 144;
			
			drawBG();
			
			function drawBG() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = 'rgb(158, 151, 21)';
				ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			}
		</script>
		
		<script src="js/main.js"></script>
		
		<script>
			BrowserStart();
		</script>
	</body>
</html>
