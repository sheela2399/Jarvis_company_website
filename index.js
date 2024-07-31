// function for navbar burger
function myFunction() {
  let x = document.getElementById("nav-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// for partner section
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay:{
      delay:4000,

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

