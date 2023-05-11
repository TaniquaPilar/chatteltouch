var slidePosition = 1;
slideShow(slidePosition);

//forward/back controls
function plusSlides(n){
  slideShow(slidePosition +=n)
}

//image controls
function currentSlide(n){
  slideShow(slidePosition=n)
}

//make slides move
function slideShow(n){
  var i;
  var slides= document.getElementsByClassName("carousel-slide")
  var circles= document.getElementsByClassName("dots")
  if(n> slides.length) {slidePosition =1}
  if(n< 1){slidePosition= slides.length}
  for(i=0; i< slides.length; i++){
    slides[i].style.display= "none";
  }


for(i=0; i<circles.length; i++){
  circles[i].className= circles[i].className.replace("enable","");
}

//automatic slides
slides[slidePosition-1].style.display= "block";
circles[slidePosition-1].className+= "enable";
setTimeout(showSlides,3000); //change imaage every 3 seconds
}
