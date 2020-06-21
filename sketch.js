var basket,basket_img,star_img,star_img1,starG,starG1,score,hfd_img;

function preload(){
  
  basket_img=loadImage("bowl.jpg");
  star_img=loadImage("star.png");
  star_img=loadImage("star-1.png");
  hfd_img=loadImage("hfd.png")
} 

function setup() {
  createCanvas(600, 500);
  
  basket=createSprite(300,470,10,10);
  basket.addImage("basket",basket_img);
  basket.scale=0.3;
  
  starG=new Group();
  starG1=new Group();
  
  score=0;
}

function draw() {
  background("white");
  
  edges=createEdgeSprites();
  
  text("score :"+score,530,50)
    
   basket.bounce(edges[0]);
  
   basket.bounce(edges[1]);
  
  
  //basket.debug=true;
  basket.setCollider("rectangle",5,5,220,130);

  if(keyDown("left")){
    basket.velocityX=-10;
  }
 
  if(keyDown("right")){
    basket.velocityX=9;
  }
  
  stars();
  stars1();
  
  if(starG.isTouching(basket)){
     starG.setVisibleEach(false);
     score=score+1;
     }
  
    
  if(starG1.isTouching(basket)){
     starG1.setVisibleEach(false);
     score=score+1;
     }
  
  if(score==100){
  var hfd= createSprite(300,250)
  hfd.addImage(hfd_img);
    hfd.scale=0.8;
    starG1.setVisibleEach(false);
    starG.setVisibleEach(false);
    basket.visiblity=false;
  }
  
  drawSprites();
}

function stars(){
  if(frameCount%100===0){
     var star=createSprite(200,0,10,10);
     star.addImage(star_img);
     star.scale=0.05;
     star.x=Math.round(random(20,580));
     star.velocityY=4;
     star.liftime=Math.round(width/star.velocityX);
    starG.add(star);
     }
  
}


function stars1(){
  if(frameCount%150===0){
     var star=createSprite(200,0,10,10);
     star.addImage(star_img);
     star.scale=0.05;
     star.x=Math.round(random(20,580));
     star.velocityY=3;
     star.liftime=Math.round(width/star.velocityX);
    starG1.add(star);
     }
  
}