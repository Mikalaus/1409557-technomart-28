let delivery=document.querySelector(".deliverry"),guarantee=document.querySelector(".guarantee"),credit=document.querySelector(".credit"),deliveryRadio=document.querySelector(".deliver"),guaranteeRadio=document.querySelector(".warranty"),creditRadio=document.querySelector(".kredit");guarantee.classList.add("hidden"),credit.classList.add("hidden"),delivery.classList.remove("hidden"),deliveryRadio.addEventListener("click",function(){deliveryRadio.checked&&(guarantee.classList.add("hidden"),credit.classList.add("hidden"),delivery.classList.remove("hidden"))}),guaranteeRadio.addEventListener("click",function(){guaranteeRadio.checked&&(credit.classList.add("hidden"),delivery.classList.add("hidden"),guarantee.classList.remove("hidden"))}),creditRadio.addEventListener("click",function(){creditRadio.checked&&(guarantee.classList.add("hidden"),delivery.classList.add("hidden"),credit.classList.remove("hidden"))});
