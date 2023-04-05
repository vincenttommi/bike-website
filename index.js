let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
setInterval(() => {
  plusSlides(1);
}, 3000);


//validating form using a function
function  validate(){
 console.log("name");

  const form = document.getElementById("#myform");

  //capturing id fo the form


  const firstname  = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const  city = document.getElementById("city").value;
  const estate = document.getElementById("estate").value;
  const zip = document.getElementById("zip").value;
  const invalidCheck2 = document.getElementById("invalidCheck2").value;




  if(firstname==""|| lastname =="" || username == "" || city =="" ||estate ==""||zip == ""|| invalidCheck2 ==""){


    Swal.fire('oops','all fields are required','error');

  }else{


}
}
