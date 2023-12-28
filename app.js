let d, bgColor, circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  circleColor = color(random(255), random(255), random(255));
  reset();
}

function draw() {
  d += 4;
  if (d / 2 > dist(0, 0, width / 2, height / 2)) {
    reset();
  }

  background(bgColor);
  fill(circleColor);
  circle(width / 2, height / 2, d);
}

function reset() {
  d = 0;
  bgColor = circleColor;
  circleColor = color(random(255), random(255), random(255));
}
