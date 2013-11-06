<?php
	include_once 'php/global.php';

	function pCreateImageBtn(
		$class, $id, $src, $mOver, $mOut, $mDown, $mUp
		)
	{
		global $dir_framework;
		
		echo '<img ';
		if($class != "")
		{
			echo 'class=' . $class . ' ';
		}
		echo 'id=' . $id;
		echo ' draggable=false class=unselectable src="' . $dir_framework;
		echo $src . '" onmouseover="' . $mOver . '" ';
		echo 'onmouseout="' . $mOut . '" ';
		echo 'onmousedown="' . $mDown . '" ';
		echo 'onmouseup="' . $mUp . '" />';
	}
	
	function pCreateCrossButtonArea(
		$id, $coords, $alt, $mOver, $mOut, $mDown, $mUp
		)
	{
		echo '<area shape=rect onmouseover="' . $mOver . '" ';
		echo 'onmouseout="' . $mOut . '" onmousedown="' . $mDown .'" ';
		echo 'onmouseup="' . $mUp . '" coords="';
		echo $coords . '" alt="' . $alt . '" />';
	}
	
	function pCreateAudio($id, $file)
	{
		global $dir_audio;
		echo '<audio id=' . $id . ' src="' . $dir_audio;
		echo $file . '"></audio>';
	}
	
	function pPrintKey($key)
	{
		echo '&lt;' . $key . '&gt;';
	}
	
	function pCreateControlInfo($src, $description, $a)
	{
		global $dir_framework;
		echo '<li><img src="' . $dir_framework . $src;
		echo '" class=unselectable/> ' . $description;
		echo ' ';
		pPrintKey($a);
		echo '</li>';
	}
	
	function pCreateControlsInfo($src, $description, $a, $b)
	{
		global $dir_framework;
		echo '<li><img src="' . $dir_framework . $src;
		echo '" class=unselectable/> ' . $description;
		echo ' ';
		pPrintKey($a);
		echo ' or ';
		pPrintKey($b);
		echo '</li>';
	}
	
	function pCreateImage($id, $src)
	{
		global $dir_framework;
		echo '<img id=' . $id . ' draggable=false class=unselectable src="';
		echo $dir_framework . $src . '" />';
	}
	
	function pCreateCanvas($id, $mOver, $mOut, $mDown, $mUp)
	{
		echo '<canvas id=' . $id . ' class=unselectable></canvas>';
	}
?>
