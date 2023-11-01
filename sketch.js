function setup() {
    createCanvas(400, 400);
    background("pink")
  }
  
  function draw() {
    
    stroke("#F44336");
    fill("#9rgb(228,46,46)");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  } 
  