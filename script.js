var totalSlide = document.querySelectorAll(".slide-item")
let count = 1;

setInterval(() => {
    count++;
     var currentElement = document.querySelector(".current")
     
 currentElement.classList.remove("current");

 if (count>totalSlide.length) {
    totalSlide[0].classList.add("current")
    count= 1;
 }

else{
    currentElement.nextElementSibling.classList.add("current")
}

}, 2000);