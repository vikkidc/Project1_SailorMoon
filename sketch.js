var slider;
let img1, img2;

let song;

let c1, c2, c3;

function preload() {
  //load images
  img1 = loadImage('media/BlueMoon.png');
  img2 = loadImage('media/SailorMoon_and_TuxedoMask.png');
  
  //music
  song = loadSound('media/SailorMoon_MoonlightDensets.mp3');
}

function setup() {
  createCanvas(600, 600);
  slider = createSlider(200,600,47);
    song.loop();
    c1 = color(0, 0, 51);
    c2 = color(38, 0, 77);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() {
  //moon
  image(img1, -90, 10, 600, 600);
  
  //draw image2
  image(img2, 30, 50, 300, 300);
  
  //moon phases
  noStroke();
  fill(68, 50, 103);
  circle(slider.value(),200, 400);
}