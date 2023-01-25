var points = 0
var enpoints = 0

function setup() {

  createCanvas(500,700)
  
  drawButtons()


}

function rock(){
  drawButtons()
  textSize(20)
  fill("white")
  stroke("black")
  strokeWeight(2)
text("you chose Rock", 130,650)
computorGuess = random(["Rock", "Paper", "Scissor"])
text("they chose " + computorGuess, 130,50)

  if( computorGuess == "Rock"){
    textSize(30)
    fill("grey")
    stroke("black")
    strokeWeight(3)
    text("you tie", 175, 350)
  }
  else if(computorGuess == "Scissor"){
    textSize(30)
    fill("green")
    stroke("black")
    strokeWeight(3)
    text("you win", 175, 350)
  }
  else if(computorGuess == "Paper"){
    textSize(30)
    stroke("black")
    strokeWeight(3)
    fill("red")
    text("you lose", 175, 350)
  }
}

function paper(){
  drawButtons()
  textSize(20)
  fill("white")
  stroke("black")
  strokeWeight(2)
text("you chose Paper", 130,650)
computorGuess = random(["Rock", "Paper", "Scissor"])
text("they chose " + computorGuess, 130,50)

  if( computorGuess == "Rock"){
    textSize(30)
    fill("green")
    stroke("black")
    strokeWeight(3)
    text("you win", 175, 350)
  }
  else if(computorGuess == "Scissor"){
    textSize(30)
    fill("red")
    stroke("black")
    strokeWeight(3)
    text("you lose", 175, 350)
  }
  else if(computorGuess == "Paper"){
    textSize(30)
    fill("grey")
    stroke("black")
    strokeWeight(3)
    text("you tie", 175, 350)
  }
}

function scissor(){
  drawButtons()
  textSize(20)
  fill("white")
  stroke("black")
  strokeWeight(2)
text("you chose Scissor", 200,650)
computorGuess = random(["Rock", "Paper", "Scissor"])
text("they chose " + computorGuess, 130,50)

  if( computorGuess == "Rock"){
    textSize(30)
    fill("red")
    stroke("black")
    strokeWeight(3)
    text("you lose", 175, 350)
  }
  else if(computorGuess == "Scissor"){
    textSize(30)
    fill("grey")  
    stroke("black")
    strokeWeight(3)
    text("you tie", 175, 350)
  }
  else if(computorGuess == "Paper"){
    textSize(30)
    fill("green")
    stroke("black")
    strokeWeight(3)
    text("you win", 175, 350)
  }
}

function drawButtons(){
  background("#FCF2F0")

  textSize(20)
  stroke("white")
  strokeWeight(0)
  text("your score: " + points, 170,90)
  text("enemy score: " + enpoints, 165, 110)

  textSize(50)
  text("|", 220, 350)

  //btn 1
  button = createImg('rock2.jpg');
  button.position(400,height/2 - 155);
  button.size(80,80);
  button.mouseClicked(rock)

  //  //btn 2
   button2 = createImg('scissor2.jpg');
    button2.position(400,height/2 - 63);
    button2.size(80,80);
   button2.mouseClicked(scissor);
 
  //btn3
   button3 = createImg('paper2.jpeg');
   button3.position(400,height/2 + 30);
   button3.size(80,80);
   button3.mouseClicked(paper);



}

function draw(){


}