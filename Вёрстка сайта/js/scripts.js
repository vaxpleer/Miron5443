const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');

let costInFrontOfScene = 800;
let costLeftChears = 500;
let costRightChears = 450;

let chearsRight = 0;
let chearsLeft = 0;
let chearsInFrontOfScene = 0;

let totalPrice = 0;


schemeSvg.addEventListener('click', (event) => {
  if(!event.target.classList.contains('booked')){
    event.target.classList.toggle('active');
    if(event.target.classList.contains('left-chears')){
      chearsLeft = schemeSvg.querySelectorAll(".left-chears.active").length
    }
    else if(event.target.classList.contains('right-chears')){
      chearsRight = schemeSvg.querySelectorAll(".right-chears.active").length
    }
    else{
      chearsInFrontOfScene = schemeSvg.querySelectorAll(".in-front-of-scene-chears.active").length
    }
    totalPrice = costInFrontOfScene*chearsInFrontOfScene + costLeftChears*chearsLeft + costRightChears*chearsRight;
    totalPriceTag.textContent = totalPrice;
  }
})