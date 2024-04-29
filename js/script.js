document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("bar").addEventListener("click", function () {
        document.querySelector("nav ul").style.right = "-100px";
    });

    document.getElementById("close").addEventListener("click", function () {
        var navUl = document.querySelector("nav ul");
        navUl.style.right = "-3000px";
        navUl.style.transition = "right 0.7s ease-in-out";
    });

    var lis = document.querySelectorAll("li");
    lis.forEach(function (li) {
        li.addEventListener("click", function () {
            document.querySelector("nav ul").style.right = "-3000px";
        });
    });
});
   
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var isValid = true;

    if (name === "") {
      document.getElementById("nameAlert").innerHTML = "Please enter your name.";
      document.getElementById("nameAlert").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("nameAlert").classList.add("d-none");
    }

    if (email === "") {
      document.getElementById("emailAlert").innerHTML = "Please enter your email.";
      document.getElementById("emailAlert").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("emailAlert").classList.add("d-none");
    }

    if (message === "") {
      document.getElementById("messageAlert").innerHTML = "Please enter your message.";
      document.getElementById("messageAlert").classList.remove("d-none");
      isValid = false;
    } else {
      document.getElementById("messageAlert").classList.add("d-none");
    }

    if (isValid) {
      document.getElementById("myForm").submit(); // Submit the form if all inputs are valid

    }
    // Add event listeners to input fields to hide error messages when typing starts
document.getElementById("name").addEventListener("input", function() {
    document.getElementById("nameAlert").classList.add("d-none");
});

document.getElementById("email").addEventListener("input", function() {
    document.getElementById("emailAlert").classList.add("d-none");
});

document.getElementById("message").addEventListener("input", function() {
    document.getElementById("messageAlert").classList.add("d-none");
});

}


function showSlide(sliderId) {
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  slides.forEach((slide, index) => {
      if (index === slideIndex[sliderId]) {
          slide.style.display = "block";
      } else {
          slide.style.display = "none";
      }
  });
}

const slideIndex = {
  slider1: 0,
  slider2: 0
};

function nextSlide(sliderId) {
  slideIndex[sliderId]++;
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  if (slideIndex[sliderId] >= slides.length) {
      slideIndex[sliderId] = 0;
  }
  showSlide(sliderId);
}

function prevSlide(sliderId) {
  slideIndex[sliderId]--;
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  if (slideIndex[sliderId] < 0) {
      slideIndex[sliderId] = slides.length - 1;
  }
  showSlide(sliderId);
}

showSlide('slider1');
showSlide('slider2');

