const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const {MouseConstraint, Mouse} = Matter;
var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;
var hero,monster,rope,ground; 
var box15,box16,box17,box18,box19,box20;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,400,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(800, 100, 70, 70);
  box4 = new Box(800, 100, 70, 70);
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  }
   mConstraint = MouseConstraint.create(engine, options);
   World.add(world,mConstraint);
 
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box4.display()
  box4.display()
  box4.display()
  hero.display();
  rope.display();
  monster.display();
if(monster.body.position.y > 1200) {
  textSize(100);
  fill("yellow");
  text("you killed the monstor!!",300,300);
}
}
