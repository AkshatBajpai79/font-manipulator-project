noseX=0;
noseY=0;
left_wrist_X=0;
right_wrist_X=0;
difference=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(560, 550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("grey");
    document.getElementById("square_side").innerHTML="width and height of square will be= "+difference;
    textSize(difference);
    stroke('#F90093');
    text('Akshat', 50, 400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            noseX=results[0].pose.nose.x;
            nosey=results[0].pose.nose.y;
            console.log("noseX = "+ noseX +" noseY = "+ noseY);

            left_wrist_X=results[0].pose.leftWrist.x;
            right_wrist_X_wrist_X=results[0].pose.leftWrist.x;
            difference= floor(left_wrist_X - right_wrist_X);
            console.log("leftWristX="+ right_wrist_X+" difference = "+difference);
        }
}
