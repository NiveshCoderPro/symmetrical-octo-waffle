Webcam.set({
    width:350,
    height:240,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');



function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "' + data_uri + '"/>'
    });
}

console.log("ml5.version",ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LBZ3VXf-B/model.json",modelLoaded);


function modelLoaded() {
    console.log("model loaded");
}

function identifyimage() {
    img = document.getElementById("capture_image");
    classifier.classify(img , gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("member").innerHTML = results[0].label;
        document.getElementById("Accuaracy").innerHTML = results[0].confindence.toFixed(6);
    }
}