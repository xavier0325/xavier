var MARGIN_TOP = 20;
var MARGIN_LEFT = 10;

var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var balls = [];
var colors = ['#8A2BE2','#FF7F50','#008000','#B0E0E6','#FA8072','#FF6347','#EE82EE','#FFA500','#87CEFA','#FFD700'];


window.onload = function(){
	CAN_X = document.body.clientWidth;
	CAN_Y = document.body.clientHeight/9;

	RADIUS = Math.round(CAN_X*4/5/108)-1.2;
	if (document.body.clientWidth > 768) {		
		CAN_Y *=5;
		RADIUS = Math.round(CAN_X*4/5/108/2)-1;
	}
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	canvas.width = CAN_X-30;
	canvas.height = CAN_Y;
	if (document.body.clientWidth > 768) {
		canvas.width -= 400;
	}
setInterval(
	function(){
		draw(context);
		update();
	} , 50);
}
function update(){
	var nextTime = new Date();
	var nextHour = nextTime.getHours();
	var nextMinute = nextTime.getMinutes();
	var nextSecond = nextTime.getSeconds();

	if(second != nextSecond)
	{
		if(parseInt(hour/10) != parseInt(nextHour/10)){
			hour = nextHour;
			colorBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(nextHour/10));
		 }
		 if(parseInt(hour%10) != parseInt(nextHour%10)){
			hour = nextHour;
			colorBalls(MARGIN_LEFT + 15*(RADIUS + 1), MARGIN_TOP, parseInt(nextHour%10));
		 }
		 if(parseInt(minute/10) != parseInt(nextMinute/10)){
			minute = nextMinute;
			colorBalls(MARGIN_LEFT + 39*(RADIUS + 1), MARGIN_TOP, parseInt(nextMinute/10));
		 }
		 if(parseInt(minute%10) != parseInt(nextMinute%10)){
			minute = nextMinute;
			colorBalls(MARGIN_LEFT + 54*(RADIUS + 1), MARGIN_TOP, parseInt(nextMinute%10));
		 }
		 if(parseInt(second/10) != parseInt(nextSecond/10)){
			second = nextSecond;
			colorBalls(MARGIN_LEFT + 78*(RADIUS + 1), MARGIN_TOP, parseInt(nextSecond/10));
		 }
		 if(parseInt(second%10) != parseInt(nextSecond%10)){
			second = nextSecond;
			colorBalls(MARGIN_LEFT + 93*(RADIUS + 1), MARGIN_TOP, parseInt(nextSecond%10));
		 }
	}
	updateBalls();	
}

function updateBalls(){
	for(var i = 0; i < balls.length; i++)
	{
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if(balls[i].y >= CAN_Y - RADIUS){
			balls[i].y = CAN_Y - RADIUS;
			balls[i].vy = -balls[i].vy*0.6;
		}
	}
}

function draw(cxt){

	cxt.clearRect(0,0,CAN_X,CAN_Y);


	drawTime(MARGIN_LEFT, MARGIN_TOP, parseInt(hour/10), cxt);
	drawTime(MARGIN_LEFT + 15*(RADIUS + 1), MARGIN_TOP, parseInt(hour%10), cxt); 
	drawTime(MARGIN_LEFT + 30*(RADIUS + 1), MARGIN_TOP, 10, cxt);
	drawTime(MARGIN_LEFT + 39*(RADIUS + 1), MARGIN_TOP, parseInt(minute/10), cxt); 
	drawTime(MARGIN_LEFT + 54*(RADIUS + 1), MARGIN_TOP, parseInt(minute%10), cxt); 
	drawTime(MARGIN_LEFT + 69*(RADIUS + 1), MARGIN_TOP, 10, cxt);
	drawTime(MARGIN_LEFT + 78*(RADIUS + 1), MARGIN_TOP, parseInt(second/10), cxt); 
	drawTime(MARGIN_LEFT + 93*(RADIUS + 1), MARGIN_TOP, parseInt(second%10), cxt); 

	for(var i = 0; i < balls.length; i++)
	{
		cxt.fillStyle = balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, false);
		cxt.closePath();

		cxt.fill();
	}
}

function drawTime(x, y, num ,cxt){
	cxt.fillStyle = '#8A2BE2';

	for(var i = 0;i < data[num].length; i++)
		for(var j = 0;j <data[num][i].length;j++)
			if(data[num][i][j] == 1)
			{
				cxt.beginPath();
                cxt.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI )
                cxt.closePath()

                cxt.fill()

			}
}

function colorBalls(x,y,num){
	for(var i = 0; i < data[num].length; i++)
		for(var j = 0; j < data[num][i].length; j++)
			if(data[num][i][j] == 1)
		   {
				var aBall = {
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+i*2*(RADIUS+1)+(RADIUS+1),
					g:1.5 + Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-7,
					color:colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall);
			}

}