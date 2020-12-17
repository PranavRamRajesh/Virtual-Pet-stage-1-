//Create variables here
var dog, happyDog, database, foods, foodStock
var dogImg,happyDogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database()

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.4;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
  
}


function draw() {  
  background("yellow");

  if(keyWentDown(UP_ARROW)){
    foods--;
    writeStock(foods);
      dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here

  text("Remaining Food "+ foods,250,100);


}

function readStock(data){
foods = data.val()
}

function writeStock(ab){
database.ref("/").update({
  Food:ab 

})
}



