//random nummer
function hueRotate(max) {
    return Math.floor(Math.random() * Math.floor(360));
  }
  console.log(hueRotate(1)+"deg")

//random getal in het scherm
let randomPosition = Math.random() * window.innerWidth

//waarde x en y
let posx = randomPosition
let posy = randomPosition

// vis element
let fish = document.createElement("fish")
document.body.appendChild(fish)
fish.style.transform = `translate(${posx}px, ${posy}px)`    
fish.style.filter = hueRotate(1)+"deg";

// functie vis element
function vis(){
  let  fish = document.createElement("fish")
  document.body.appendChild(fish)
}
function visplaats(){
  fish.style.transform = `translate(${posx}px, ${posy}px)`    
fish.style.filter = hueRotate(1)+"deg";
}




// bubble element

let bubble = document.createElement("bubble")
document.body.appendChild(bubble)
bubble.style.transform = "translate(20vw, 100vh)"
