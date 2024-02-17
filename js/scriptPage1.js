let slideIndex = 0;
let timeoutId =null;

//function to load data
function loadPage(){
fetch("../dataFiles/file.json")
.then(res =>res.json())
.then(dataJSON =>{
    console.log("this is data");
    console.log(dataJSON);

getJSON(dataJSON);
showSlides();
localStorage.setItem("storage", JSON.stringify(dataJSON.restaurant));
})
}


function getJSON(dataJSON){

    document.getElementById("name").innerHTML+=
    `${dataJSON.restaurant.name}`;
    document.getElementById("aboutUs").innerHTML=
    `${dataJSON.restaurant.about}`;
    document.getElementById("address").innerHTML=
    `${dataJSON.restaurant.address}`;
    document.getElementById("phone").innerHTML=
    `${dataJSON.restaurant.phone}`;
 

}

// functions for the slideshow
const slides = document.getElementsByClassName("slidesFade");
const dot = document.getElementsByClassName("dot");

showSlides();
      function currentSlide(index) {
           slideIndex = index;
           showSlides();
      }
     function plusSlides(step) {
        
        if(step < 0) {
            slideIndex -= 4;
            
            if(slideIndex < 0) {
              slideIndex = slides.length - 1;
            }
        }
        
        showSlides();
     }



      function showSlides() {
        for(let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dot[i].classList.remove('active');
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dot[slideIndex - 1].classList.add('active');
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
        timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
      }


