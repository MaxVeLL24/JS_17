// function sdf(){
//
// 	alert('hello')
// }
//
//
// document.getElementById('blok').onclick=sdf;
//
// function colorbord(){
// 	return document.getElementById('bordcolor').value;
//
// }
//
// function vzat(){
// 	var t= document.getElementById('tex').value;
// 	document.getElementById('vvv').innerHTML="цвет блока"+t;
// 	document.getElementById('blok').style.background=t;
// }
// function bord(){
// 	var t= document.getElementById('tex2').value;
// 	var col=colorbord();
// 	console.log(col);
// 	document.getElementById('blok').style.border=t+"px solid "+col;
// }
//
//
// document.getElementById('tex').oninput=vzat;
// document.getElementById('tex2').oninput=bord;

var color1 = document.getElementById('par1').innerHTML;
var color2 = document.getElementById('par2').innerHTML;
var color3 = document.getElementById('par3').innerHTML;

document.getElementById('par1').innerHTML = '<div id="p1"></div>';
document.getElementById('par2').innerHTML = '<div id="p2"></div>';
document.getElementById('par3').innerHTML = '<div id="p3"></div>';

document.getElementById('p1').style = "width: 50px; height: 50px; background: " + color1 + "";
document.getElementById('p2').style = "width: 50px; height: 50px; background: " + color2 + "";
document.getElementById('p3').style = "width: 50px; height: 50px; background: " + color3 + "";


