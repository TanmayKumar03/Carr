var arrowimg,strikerimg,striker,boardimg,red,yellow;
var queen,token1,token2,token3,token4;
var borders,wood1,wood2,wood3,wood4;

function preload(){
boardimg = loadImage("board.png");
arrowimg = loadAnimation("arrow1.png","arrow2.png","arrow3.png");

red = loadImage("red.png");
strikerimg = loadImage("striker.png");
yellow = loadImage("yellow.png");

}
function setup(){
createCanvas(550,550);

borders = createGroup();

wood1 = createSprite(275,0,550,72);
wood1.shapeColor = ('#68482F');
borders.add(wood1);


wood2 = createSprite(275,550,550,72);
wood2.shapeColor = ('#68482F');
borders.add(wood2);

wood3 = createSprite(0,275,72,550);
wood3.shapeColor = ('#68482F');
borders.add(wood3);

wood4 = createSprite(550,275,72,550);
wood4.shapeColor = ('#68482F');
borders.add(wood4);

borders.bounciness = 0.5;

arrow = createSprite(280,430);
arrow.addAnimation("arrow",arrowimg);
arrow.scale = 0.5;
arrow.visible = false;
arrow.rotateToDirection = true;
arrow.pause();

queen = createSprite(275,275);
queen.addImage("Queen",red);
queen.scale = 0.1;
queen.setCollider("circle",0,0,100);
//queen.debug = true;

token1 = createSprite(250,275)
token1.addImage("token",yellow);
token1.scale = 0.1;
token1.setCollider("circle",0,0,100);

token2 = createSprite(300,275)
token2.addImage("token1",yellow);
token2.scale = 0.1;
token2.setCollider("circle",0,0,100);

token3 = createSprite(275,303)
token3.addImage("token2",yellow);
token3.scale = 0.1
token3.setCollider("circle",0,0,100);

token4 = createSprite(275,250)
token4.addImage("token3",yellow);
token4.scale = 0.1
token4.setCollider("circle",0,0,100);

striker = createSprite(280,430);
striker.addImage("striker",strikerimg);
striker.scale = 0.15;
striker.setCollider("circle",0,0,120);


}
function draw(){
background(boardimg);
fill("black")
text(mouseX +"," +mouseY,mouseX,mouseY);

striker.bounceOff(borders);
token1.bounceOff(borders);
token2.bounceOff(borders);
token3.bounceOff(borders);
token4.bounceOff(borders);
queen.bounceOff(borders);

striker.bounce(token1);
striker.bounce(token2);
striker.bounce(token3);
striker.bounce(token4);
striker.bounce(queen);

token1.bounce(token2);
token1.bounce(token3);
token1.bounce(token4);
token1.bounce(queen);

token2.bounce(token3);
token2.bounce(token4);
token2.bounce(queen);

token3.bounce(token4);
token3.bounce(queen);

token4.bounce(queen);


drawSprites();
}
