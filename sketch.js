function setup() {
    createCanvas(1000, 1000);
    background("black");
  }
  
  function draw() {
   
    
    stroke("blue");
    fill("red");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 30, 35);
    }
  }