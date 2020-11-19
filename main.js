noseX = [0];
noseY = [0];

function preload() {
    loadClown = loadImage('https://i.postimg.cc/jd00cNvD/Clown-Image.png');
}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(img, 0, 0, 300, 300);
    image(loadClown, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('Filter_image.jpg')
}