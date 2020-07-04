let quitButton = document.querySelector('.quit-button');
let popup = document.querySelector('.write-us-popup');
let writeUsLink = document.querySelector('.write-us');
let openPopup = document.querySelector('.write-us');
let writeUsForm = popup.querySelector('.write-us-form');
let userName = popup.querySelector('.user-name');
let userEmail = popup.querySelector('.user-email');
let userMessage = popup.querySelector('.user-message');
let submitButton = popup.querySelector('.send-message-button');
var storageName = '';
var storageEmail = '';
var isStorageAccess = true;
var nameFill = 0;
var emailFill = 0;
var messageFill = 0;

writeUsLink.addEventListener('click', function(evt){
  evt.preventDefault();
});

openPopup.classList.remove('hidden');

try{
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err){
  isStorageAccess = false;
}

quitButton.addEventListener('click', function(){
  popup.classList.add('hidden');
});

openPopup.addEventListener('click', function(){
  popup.classList.remove('hidden');

  if(isStorageAccess === true){
    userName.value = localStorage.getItem('name');
    userEmail.value = localStorage.getItem('email');
    userMessage.focus();
  } else {
    userName.focus();
  }

  var nameFill = userName.value;
  var emailFill = userEmail.value;
  var messageFill = userMessage.value;

  submitButton.addEventListener('click', function(){
    if (nameFill.length == 0 || emailFill.length == 0 || messageFill.length == 0) {
      popup.classList.add('form-break-animation');
      setTimeout(() => {popup.classList.remove('form-break-animation');}, 600);
    }
  });
});

writeUsForm.addEventListener('submit', function(){
  localStorage.setItem('name', userName.value);
  localStorage.setItem('email', userEmail.value);
});

window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    popup.classList.add('hidden');
  }
});
