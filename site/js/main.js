(function() {


var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    mouseX,
    mouseY,

    pivotY1 = 100,
    pivotY2 = 600,
    pivotX1 = 600,
    pivotX2 = 600,
    
    movingDownwards1 = true,
    movingDownwards2 = true,
    angle = 0,
    angle2 = 0;


window.addEventListener("mousemove",onMouseMove,false);

function onMouseMove(event) {

    mouseX = event.pageX - canvas.offsetLeft;
    mouseY = event.pageY - canvas.offsetLeft;
}


main();
    
    
function main() {

    window.setTimeout(main,33);
    context.clearRect(0,0,canvas.width,canvas.height);

    //context.beginPath();
    //context.moveTo(600,pivotY1);
    //context.stroke();


    for(var j = 20; j < canvas.width; j += 10) {

        context.globalAlpha = .4;
        context.beginPath();
        context.lineWidth = Math.random() * 3;
        context.moveTo(pivotX1 + Math.sin(angle) * 50, pivotY1 + Math.cos(angle) * 100);
        context.lineTo(900, j);
        context.stroke();

        context.beginPath();
        context.lineWidth = Math.random() * 3;
        context.moveTo(pivotX1 + Math.sin(angle) * 50, pivotY1 + Math.cos(angle) * 100);
        context.lineTo(300, j);
        context.stroke();

        //POINTING DOWN
        context.beginPath();
        context.lineWidth = Math.random() * 3;
        context.moveTo(pivotX2 + Math.sin(angle2) * 200, pivotY1, pivotY2);
        context.lineTo(900, j) ;
        context.stroke();

        context.beginPath();
        context.lineWidth = Math.random() * 3;
        context.moveTo(pivotX2 + Math.sin(angle2) * 200, pivotY1, pivotY2);
        context.lineTo(300, j);
        context.stroke();
    }



	angle += .23;  //.23
    angle2 += .21;  //-.21
	

	context.strokeStyle = "#000";
	context.fillStyle = "#000";

	context.save();
	context.font  = "38pt Verdana";
	context.globalAlpha = .3;
	context.fillStyle = "#f00"
	context.fillText("WARM SEA ORCHARD",320,340);
    context.fillStyle = "#fff"
	context.font  = "26pt Verdana";
	context.fillText("SITE UNDER CONSTRUCTION",340,560);
	context.fill();
	context.restore();

	if(movingDownwards1)
	pivotY1 += 5;
	
	if(!movingDownwards1)
	pivotY1 += -5;
	
	if(movingDownwards2)
	pivotY2 += 5;
	
	if(!movingDownwards2)
	pivotY2 += -5;
	

	
	if(pivotY1 > 450)
	movingDownwards1 = false;
	
	if(pivotY1 <= 150)
	movingDownwards1 = true;
	
	if(pivotY2 > 450)
	movingDownwards2 = false;
	
	if(pivotY2 <= 150)
	movingDownwards2 = true;
	
}
    
    
    
})();