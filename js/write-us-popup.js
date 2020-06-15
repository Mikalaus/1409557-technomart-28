let quitButton = document.querySelector('.quit-button');
let popup = document.querySelector('.write-us-popup');
let openPopup = document.querySelector('.write-us');

quitButton.onclick = function(){
  popup.classList.add('hidden');
}

openPopup.onclick = function(){
  popup.classList.remove('hidden');
}
