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



//Start questions
//using selectors inside the element
//const questions = document.querySelectorAll(".question");

//questions.forEach(function (question) {
  //const btn = question.querySelector(".question-btn");
  // console.log(btn);

  //btn.addEventListener("click", function () {
    // console.log(question);

    //questions.forEach(function (item) {
    //if (item !== question) {
    //  item.classList.remove("show-text");
    //}
    //});

    //question.classList.toggle("show-text");
 //});
//});

// traversing the dom
 //const btns = document.querySelectorAll(".question-btn");

 //btns.forEach(function (btn) {
    //btn.addEventListener("click", function (e) {
    // const question = e.currentTarget.parentElement.parentElement;

     //question.classList.toggle("show-text");
   //});
 //});


 //var countDownDate = new Date("June 1, 2023 00:00:00").getTime();
 //var x = setInterval(function(){
  //var now = new Date().getTime();
  //var distance = countDownDate - now;

  //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //var hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //var minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //var seconds= Math.floor((distance % (1000 * 60)) / (1000);

 //document.getElementById("demo").innerHTML=
 //days+ "d" + hours + "h" + minutes + "m" + seconds + "s";
  //document.getElementById("days").innerHTML= days;
  //document.getElementById("hours").innerHTML= hours;
  //document.getElementById("minutes").innerHTML= minutes;
  //document.getElementById("seconds").innerHTML= seconds;

  //if(distance < 0){
    //clearInterval(x);
    //document.getElementById("demo").innerHTML= "00"
    //document.getElementById("days").innerHTML= 00;
    //document.getElementById("hours").innerHTML= 00;
    //document.getElementById("minutes").innerHTML= 00;
    //document.getElementById("seconds").innerHTML= 00;
  //}
 //}, 1000);
 //Count down timer End
