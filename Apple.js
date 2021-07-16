img = "";
status = "";

function preload(){
    img = loadImage('Apple.jpg');
}

function setup(){
    canvas = createCanvas(640, 640);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 640);
}

function modelLoaded(){
    console.log("Model Loaded!");

    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}