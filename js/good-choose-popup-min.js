let goodPopup=document.querySelector(".chosen-product-popup"),quitGoodPopup=goodPopup.querySelector(".quit-button"),markedProducts=document.querySelector(".marked"),buyProducts=document.querySelector(".chosen-products");var buyButtons=document.querySelectorAll(".buy-button"),buyNumber=document.querySelector(".buy-number"),markedNumber=document.querySelector(".marked-number"),chooseButtons=document.querySelectorAll(".choose-button"),confirmButtons=goodPopup.querySelectorAll(".confirm"),continueButtons=goodPopup.querySelectorAll(".continue"),buyProductsNumber=0,markedProductsNumber=0;goodPopup.classList.add("hidden");for(var i=0;i<buyButtons.length;i++)buyButtons[i].addEventListener("click",function(){goodPopup.classList.remove("hidden"),buyProducts.classList.add("chosen-products-background"),buyProductsNumber++,buyNumber.innerHTML=buyProductsNumber});for(i=0;i<chooseButtons.length;i++)chooseButtons[i].addEventListener("click",function(){markedProducts.classList.add("chosen-products-background"),markedProductsNumber++,markedNumber.innerHTML=markedProductsNumber});for(i=0;i<continueButtons.length;i++)continueButtons[i].addEventListener("click",function(){goodPopup.classList.add("hidden")});for(i=0;i<confirmButtons.length;i++)confirmButtons[i].addEventListener("click",function(){goodPopup.classList.add("hidden")});quitGoodPopup.addEventListener("click",function(){goodPopup.classList.add("hidden")}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),goodPopup.classList.add("hidden"))});
