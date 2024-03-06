let r = 55;
let k = 1;
let vueltas = 1;

window.addEventListener('load', function(event) {
    this.document.getElementById("r").addEventListener('input', function (event) {
        r = event.target.value;
        draw();
    });
    
    this.document.getElementById("k").addEventListener('input', function (event) {
        k = event.target.value;
        draw();
    });
    
    this.document.getElementById("vueltas").addEventListener('input', function (event) {
        vueltas = event.target.value;
        draw();
    });

    draw();
});

function draw() {  
    console.log("Draw requested");
    let canvas = this.document.getElementById('canvas_id');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillWidth = 10;
    context.lineCap = 'butt';
    context.setLineDash([10, 10]);
    context.moveTo(400, 10);
    context.lineTo(400, 600-10);
    
    context.moveTo(10, 300);
    context.lineTo(800-10, 300);
    context.stroke();

    let axisX = canvas.width/2;
    let axisY = canvas.height/2;
    
    context.beginPath();
    context.setLineDash([])

    context.strokeStyle = 'black';
    context.lineJoin = 'bevel';

    const k2 = 1 + + k;

    for (t = 0; t < 2*vueltas*Math.PI; t+=0.01){
        context.lineTo(
            axisX + r*(k2*Math.cos(t)-Math.cos(k2*t)), 
            axisY + r*(k2*Math.sin(t)-Math.sin(k2*t))
        );

    }
    context.stroke();
}