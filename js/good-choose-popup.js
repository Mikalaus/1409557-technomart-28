let goodPopup = document.querySelector('.chosen-product-popup');
let quitGoodPopup = goodPopup.querySelector('.quit-button');
let markedProducts = document.querySelector('.marked');
let buyProducts = document.querySelector('.chosen-products');
var buyButtons = document.querySelectorAll('.buy-button');
var buyNumber = document.querySelector('.buy-number');
var markedNumber = document.querySelector('.marked-number');
var chooseButtons = document.querySelectorAll('.choose-button');
var confirmButtons = goodPopup.querySelectorAll('.confirm');
var continueButtons = goodPopup.querySelectorAll('.continue');
var buyProductsNumber = 0;
var markedProductsNumber = 0;

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function(){
    goodPopup.classList.remove('hidden');
    buyProducts.classList.add('chosen-products-background');
    buyProductsNumber++;
    buyNumber.innerHTML = buyProductsNumber;
  });
}

for (var i = 0; i < chooseButtons.length; i++) {
  chooseButtons[i].addEventListener('click', function(){
    markedProducts.classList.add('chosen-products-background');
    markedProductsNumber++;
    markedNumber.innerHTML = markedProductsNumber;
  });
}

for (var i = 0; i < continueButtons.length; i++) {
    continueButtons[i].addEventListener('click', function(){
    goodPopup.classList.add('hidden');
  });
}

for (var i = 0; i < confirmButtons.length; i++) {
    confirmButtons[i].addEventListener('click', function(){
    goodPopup.classList.add('hidden');
  });
}

quitGoodPopup .addEventListener('click', function(){
  goodPopup.classList.add('hidden');
});

window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    goodPopup.classList.add('hidden');
  }
});
