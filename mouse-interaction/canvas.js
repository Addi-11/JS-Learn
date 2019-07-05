var canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x:undefined,
    y:undefined
}

var minRadius = 5;
var maxRadius = 60;

var colorArray = [
    '#476480',
    '#DBEEFF',
    '#8FC9FF',
    '#18538A',
    '#72A1CC'
]

window.addEventListener('mousemove', function(event){

    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

window.addEventListener('resize', function(event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;

    this.color = colorArray[Math.floor(Math.random()*colorArray.length)]

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        
        c.fill();
    }

    this.update  = function(){

    if(this.x + this.radius > innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx;
    }

    if(this.y + this.radius > innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy;
    }
    this.x +=this.dx;
    this.y +=this.dy;

    //interactivity

    if(mouse.x - this.x < 50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && mouse.x -this.x >-50 && this.radius < maxRadius){
        this.radius++;
    }
    else if(this.radius > minRadius){
        this.radius--;
    }

    this.draw();

    }

}



var circleArray = [];

function init(){

    circleArray = [];
    for(var i =0; i < 1000; i++){

        var radius = Math.random()*3+1;
        var x = Math.random()*(innerWidth-2*radius) + radius;
        var y = Math.random()*(innerHeight-2*radius) + radius;
        var dx = (Math.random()-0.5)*7;
        var dy = (Math.random()-0.5)*7;
        circleArray.push(new Circle(x, y ,dx, dy, radius));
    }

}




function animate(){
     requestAnimationFrame(animate);

     c.clearRect(0,0,innerWidth,innerHeight);
     for( var i = 0; i < circleArray.length; i++){
         circleArray[i].update();
     }

}
init();
animate();

