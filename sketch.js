var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1200,400);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "beige";

  wall = createSprite(1100,200,thickness,400);
  wall.shapeColor = "white";

  speed = random(30,52);
  bullet.velocityX = speed;

  weight = random(223,321);

  thickness = random(22,83);
}

function draw() {
  background(0);  

    if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {
      bullet.velocityX = 0;

      var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
      
      if(damage > 10) {
        wall.shapeColor = color(255,0,0);
      }

      if(damage < 10) {
        wall.shapeColor = color(0,255,0);
      }

    }

  drawSprites();
}

