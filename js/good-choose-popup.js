let goodPopup = document.querySelector('.chosen-product-popup');
let quitGoodPopup = goodPopup.querySelector('.quit-button');
var chooseButtons = document.querySelectorAll('.choose-button');
var confirmButtons = goodPopup.querySelectorAll('.confirm');
var continueButtons = goodPopup.querySelectorAll('.continue');

console.log(chooseButtons);

goodPopup.classList.add('hidden');

for (var i = 0; i < chooseButtons.length; i++) {
  chooseButtons[i].addEventListener('click', function(){
    goodPopup.classList.remove('hidden');
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
