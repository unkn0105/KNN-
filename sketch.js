let bt;
let img_less;
let img_average;
let temp, no2, no3, pH, level, p1;

function setup() {
  createCanvas(1510, 770);
  bt = createButton('feed');
  bt.position(800, 180);
  bt.size(112.5, 90);
  img_average = createImg('average.png', imageReady);
  img_less = createImg('less.png', imageReady);
  temp = createP();
  no2 = createP();
  no3 = createP();
  pH = createP();
  level = createP();
  p1 = createP('Mozillan KNN <br> Aquaponics');
  p1.style('font-size', '60px');
  p1.style('color','#ffffff');
  p1.position(800, 460);
  
  noStroke(); //black rect
  fill(0);
  rect(760, 130, 525, 480, 30);
  
  noStroke();//big white rect
  fill(255);
  rect(922.5, 180, 335, 250, 30);

  noStroke(); //small white rect under button
  fill(255);
  rect(800, 280, 112.5, 150, 30);
}

function draw() { 
}

function imageReady() {
  console.log('image is ready!');
  image(img_average, 150, 130, 600, 480);
  image(img_less, 150, 130, 600, 480);
  img_average.hide();
  img_less.hide();
}