let perforatorSlide = document.querySelector('.perforator');
let screwSlide = document.querySelector('.screwdriver');
let firstRadio = document.querySelector('.custom-radio-one');
let secondRadio = document.querySelector('.custom-radio-two');
let forward = document.querySelector('.forward-second');
let back = document.querySelector('.back-first');

perforatorSlide.classList.add('hidden');

firstRadio.addEventListener('click', function(){
  if (firstRadio.checked){
    perforatorSlide.classList.add('hidden');
    screwSlide.classList.remove('hidden');
  }
});

secondRadio.addEventListener('click', function(){
  if (secondRadio.checked){
    perforatorSlide.classList.remove('hidden');
    screwSlide.classList.add('hidden');
  }
});

forward.addEventListener('click', function(){
  perforatorSlide.classList.remove('hidden');
  screwSlide.classList.add('hidden');
});

back.addEventListener('click', function(){
  perforatorSlide.classList.add('hidden');
  screwSlide.classList.remove('hidden');
});
