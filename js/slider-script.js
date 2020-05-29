let perforatorSlide = document.querySelector('.perforator');
let screwSlide = document.querySelector('.screwdriver');
let firstRadio = document.querySelector('.custom-radio-one');
let secondRadio = document.querySelector('.custom-radio-two');
let forward = document.querySelector('.forward-second');
let back = document.querySelector('.back-first');

perforatorSlide.classList.add('hidden');

firstRadio.onclick = function (){
    if (firstRadio.checked){
      perforatorSlide.classList.add('hidden');
      screwSlide.classList.remove('hidden');
    }
}

secondRadio.onclick = function (){
    if (secondRadio.checked){
      perforatorSlide.classList.remove('hidden');
      screwSlide.classList.add('hidden');
    }
}

forward.onclick = function (){
  perforatorSlide.classList.remove('hidden');
  screwSlide.classList.add('hidden');
}

back.onclick = function (){
  perforatorSlide.classList.add('hidden');
  screwSlide.classList.remove('hidden');
}
