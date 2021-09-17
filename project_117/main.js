
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/G-RC8VIXt/model.json',modelLoaded)
}

function draw() {
    image(video,0,0,300,300);
}

function modelLoaded() {
    console.log("the model is somehow loaded");
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0];
        document.getElementById("result_person_accuracy").innerHTML = results[0].confindence.toFixed(2);
    }
}