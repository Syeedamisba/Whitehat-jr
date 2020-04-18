var fixedRect,MovingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup()
{
createCanvas(800,800);
fixedRect=createSprite(250,200,70,80);
fixedRect.shapeColor="green";
fixedRect.debug="true";

MovingRect=createSprite(200,200,70,99);
MovingRect.shapeColor="green";
MovingRect.debug="true";

gameObject1=createSprite(100,100,80,80);
gameObject1.shapeColor="green";
gameObject1.debug="true";

gameObject2=createSprite(200,100,80,80);
gameObject2.shapeColor="green";
gameObject2.debug="true";

}

function draw()
{
background(0,0,0);
MovingRect.x=World.mouseX;
MovingRect.y=World.mouseY;
console.log(MovingRect.x-fixedRect.x);

if(isTouching(MovingRect,gameObject1))
{
    MovingRect.shapeColor="yellow";
    gameObject1.shapeColor="yellow";
}
else
{
    MovingRect.shapeColor="green";
    gameObject1.shapeColor="green";
}

drawSprites();
}

function isTouching(object1,object2)
{
//horizontal distance between 2 rectangles should be less than the sum of half of the width of 2 rectangles
if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2)
{
return true;
}
else
{
return false;
}

}



