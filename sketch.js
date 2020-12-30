//Create variables here
var dog, happyDog, database,foodS, foodStock,dogimage,hdogimage,milk,milkimage
var feedpetButton,addfoodButton
var feed=20
var count=20
var time
function preload()
{
  //load images here
  dogimage= loadImage("images/dogImg.png")
  hdogimage= loadImage("images/dogImg1.png")
  
 
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(350,400)
  dog.addImage(dogimage)
  dog.scale=0.1
  
  feedpetButton= createButton("Feed the Pet")
  feedpetButton.position(100,150)





addfoodButton=createButton("Add more Food ")
addfoodButton.position(200,150)





milk =new Food()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(15);

}


function draw() {  
background(46,139,87)

milk.display()
lastfedtime()
feedpetButton.mousePressed(()=>{
  feed--
  database.ref('/').update({
    Food: feed
  })
  dog.addImage(hdogimage)
  dog.scale=0.1
  console.log(feed)

})
  
addfoodButton.mousePressed(()=>{
  if (feed<=0){
    feed=20
    database.ref('/').update({
      Food:feed
        })
        //text("new feed is"+feed,200,200)
        database.ref('/').update({
          fedTime:hour
        })
        
  }
})


  drawSprites();
fill("white")
text("last fed time was: "+hour()+":00",200,200)
  //add styles here
  fill(0)


text("Food remaining : "+foodS,190,470);



}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
  console.log(foodS)
}


function lastfedtime(){
  var time=hour()
  console.log("last fed time is :"+time)
}
/*//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({Food:x})
}*/