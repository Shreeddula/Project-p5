function preload(){
}

function setup(){
    canvas=createCanvas(850,600);
    canvas.position(385,200);

    video=createCapture(VIDEO);
    video.size(315,250);
    video.hide();

    
}

function draw(){
    image(video,270,175,315,250);
    fill('green');
    rect(175, 60, 500, 30);
    rect(175,510,500,30);
    rect(110,120,30,350);
    rect(710,120,30,350);
    fill('red');
    circle(125, 70, 100);
    circle(725, 70, 100);
    circle(725, 521, 100);
    circle(125, 521, 100);
}

function take_snapshot(){
    save("capturedImage.png");
}

