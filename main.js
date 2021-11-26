Webcam.attach(camera);
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function dino(){
    Webcam.snap(function(a){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+a+'"/>';
    });
}

console.log("mlfiveversion10",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dm5Vt0EKj/model.json',modelloaded);
function modelloaded(){
    console.log("Hi. Kaka2.00 file loaded");
}

function adino(){
    kaka=document.getElementById("selfie_image");
    x.classify(kaka,gotresult);
}

function gotresult(error,results){
if(error){
    console.log(error); 
}
else{
    console.log(results);
    document.getElementById("objectname").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=(results[0].confidence*100).toFixed(3)+"%";
}
}