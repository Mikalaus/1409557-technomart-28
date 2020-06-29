let mapPopup = document.querySelector('.map-popup');
let map = document.querySelector('.map');
let quit = mapPopup.querySelector('.quit-button');

map.addEventListener('click', function(evt){
  evt.preventDefault();
  mapPopup.classList.remove('hidden');
});

quit.addEventListener('click', function(){
  mapPopup.classList.add('hidden')
});

window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    mapPopup.classList.add('hidden');
  }
});
