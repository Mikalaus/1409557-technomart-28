let delivery = document.querySelector('.deliverry');
let guarantee = document.querySelector('.guarantee');
let credit = document.querySelector('.credit');
let deliveryRadio = document.querySelector('.deliver');
let guaranteeRadio = document.querySelector('.warranty');
let creditRadio = document.querySelector('.kredit');

guarantee.classList.add('hidden');
credit.classList.add('hidden');
delivery.classList.remove('hidden');

deliveryRadio.onclick = function (){
    if (deliveryRadio.checked){
      guarantee.classList.add('hidden');
      credit.classList.add('hidden');
      delivery.classList.remove('hidden');
    }
}

guaranteeRadio.onclick = function (){
    if (guaranteeRadio.checked){
      credit.classList.add('hidden');
      delivery.classList.add('hidden');
      guarantee.classList.remove('hidden');
    }
}

creditRadio.onclick = function (){
    if (creditRadio.checked){
      guarantee.classList.add('hidden');
      delivery.classList.add('hidden');
      credit.classList.remove('hidden');
    }
}
