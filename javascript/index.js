x[1].style.opacity = "0.5";
x[0].style.opacity = "1";

function currentDiv(n) {
  var x = document.getElementsByClassName("demo");
  if (n == 1) {
    x[1].style.opacity = "0.5"
    x[0].style.opacity = "1"

  } else {
    x[0].style.opacity = "0.5"
    x[1].style.opacity = "1"
  }

  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}