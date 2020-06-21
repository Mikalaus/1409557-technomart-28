let quitButton = document.querySelector('.quit-button');
let popup = document.querySelector('.write-us-popup');
let writeUsForm = popup.querySelector('.write-us-form');
let openPopup = document.querySelector('.write-us');
let userName = popup.querySelector('.user-name');
let userEmail = popup.querySelector('.user-email');
let userMessage = popup.querySelector('.user-message');
var storageName = '';
var storageEmail = '';
var isStorageAccess = true;

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
});

writeUsForm.addEventListener('submit', function(){
  localStorage.setItem('name', userName.value);
  localStorage.setItem('email', userEmail.value);
});
