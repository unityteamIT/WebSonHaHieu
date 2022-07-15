
/*---------------------------------------Product-----------------------------------------*/
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
       bigImg.src = imgItem.src 
    })
})
const thuonghieu = document.querySelector(".thuonghieu")
const chitiet = document.querySelector(".chitiet")
if(thuonghieu){
    thuonghieu.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-thuonghieu").style.display = "block"
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-thuonghieu").style.display = "none"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}