let eDiam = 60;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("eggshell");
  randomSeed(100);

  for (let xpos = 0; xpos < width; xpos += eDiam + random(27, (eDiam/2)+2)) {
    for (let ypos = 0; ypos < height; ypos += eDiam + random(25, eDiam/2)) {
      let yindex = random (0,40)
      let xindex = random (0,40)
      let circlesize= random(25,eDiam);

        fill(84,142,255)
        strokeWeight(0)
        ellipse((xpos + xindex), (ypos + yindex), circlesize);
    }
  }
}
