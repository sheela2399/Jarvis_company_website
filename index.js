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
var Swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 4000,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

// for contact section

function checkOption(optionId) {
  let optionLabel = document.getElementById(optionId);
  let checkbox = optionLabel.querySelector('input[type="checkbox"]');
  optionLabel.classList.toggle('selected');
  checkbox.checked = !checkbox.checked;
}  











// form input
function storeData() {
  let getFirstName = document.getElementById("first-name").value;
  let getLastName = document.getElementById("last-name");
  let getEmail = document.getElementById("email");
  let getCountryCode = document.getElementsByTagName(Option);
  let getNumber = document.getElementById("phone-no");
  let getMessage = document.getElementById("message");
  let getObject = [];
  let getInfo = {
    first_name: getFirstName,
    last_name: getLastName,
    email: getEmail,
    country_code: getCountryCode,
    phone_no: getNumber,
    message: getMessage
  }

  getObject.push(getInfo);
  console.log(getObject);


}


