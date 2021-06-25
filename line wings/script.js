var lineEndHeight = 1;
var lineStartHeight = 0.3;
var lineStartWidth = 0.1;

var i = 0;
var speed = 0.05;

function setup() {
    w = 500;
    h = 500;
    createCanvas(w, h);
    background(0);
}

function draw() {
    background(0);    
    stroke(255);
    
    i += speed;

    for(o = 125; o > 0; o--) {
        makeLine((100 - o) * -speed, (100 - o) * -2);
    }
}

function makeLine(offset, height,) {
    lineEndHeight = 0.8 -Math.sin(i + offset + 5) * 0.08;
    lineStartWidth = 0.3 +Math.sin(i + offset ) * 0.08 - cos(i + offset) * 0.15;
    lineStartHeight = 0.25 -Math.cos(i + offset ) * 0.08 + cos(i + offset) * 0.15;
    line(w * lineStartWidth, h * lineStartHeight + height, width/2, h * lineEndHeight + height);

    lineEndHeight = 0.8 -Math.sin(i + offset + 5) * 0.08;
    lineStartWidth = 0.7 +Math.sin(i + offset ) * -0.08 - cos(i + offset) * -0.15;
    lineStartHeight = 0.25 -Math.cos(i + offset ) * 0.08 + cos(i + offset) * 0.15;
    line(w * lineStartWidth, h * lineStartHeight + height, width/2, h * lineEndHeight + height);

}

