//Create variables here
var  dog, happyDog, database, foodS, foodStock, dogSprite

function preload()
{
 dog= loadImage("images/dogImg.png");
 happyDog= loadImage("images/dogImg1.png")
 
	
}

function setup() {
	createCanvas(500, 500);
  dogSprite= createSprite(250,250,50,50);
  database= firebase.database();
  dogSprite.addImage(dog)
  dogSprite.scale=0.2

  
  readStock()
}


function draw() {  
  background(46, 139, 87)

  if (keyDown(UP_ARROW)){
    foodStock=foodStock-1;
writeStock(foodStock)
 dogSprite.addImage(happyDog)
  }
  drawSprites();
  //add styles here
 fill("white")

  text("Food Left."+foodStock,250,100)

}


function readStock() {
  database.ref("food").on("value",(data)=>{
    foodStock= data.val()
  })

}

function writeStock(count) {
  database.ref("/").update({food:count})
}





