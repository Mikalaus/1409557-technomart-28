let mapPopup = document.querySelector('.map-popup');
let map = document.querySelector('.map');
let quit = mapPopup.querySelector('.quit-button');

mapPopup.classList.add('hidden');

map.addEventListener('click', function(){
  mapPopup.classList.remove('hidden');
});

quit.addEventListener('click', function(){
  mapPopup.classList.add('hidden')
});
