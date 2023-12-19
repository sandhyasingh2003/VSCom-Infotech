document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        document.getElementsByTagName('main')[0].style.marginTop = '0px';
      } else {
        document.getElementsByTagName('main')[0].style.marginTop = '222px';
      }
    });
  }
});
const item = document.querySelectorAll(".accordion button");
const items = document.querySelectorAll(".accordion1 button");
function higher(params) {
  function toggleAccordion(){
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < params.length; i++) {
    params[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
params.forEach(item => item.addEventListener('click', toggleAccordion));
}
higher(item);
higher(items);


/*

const elH = document.querySelectorAll(".timeline li > div");
// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}*//*
// Loader JS
window.onload = function () {
const ball = document.getElementById("ball");
const splashContainer = document.querySelector(".splash-background");
const mainContainer = document.querySelector(".TheMainContainer");

gsap.to(ball, {
  y: 370,
  duration: 2,
  ease: Bounce.easeOut,
  delay: 0.5,
  onComplete: function () {
    // Add a fade-out animation for the splash container
    gsap.to(splashContainer, {
      opacity: 0,
      duration: 0.5,
      onComplete: function () {
        // Hide the splash container after the fade-out animation
        splashContainer.style.display = "none";

        // Make the main container visible
        mainContainer.style.display = "block";

        // Hide the ball
        ball.style.display = "none";
      }
    });
  }
});
};
*/

/*
document.addEventListener("DOMContentLoaded", function () {
const contactTrigger = document.getElementById("contactTrigger");
const contactForm = document.getElementById("contactForm");
const closeContactForm = document.getElementById("closeContactForm");

contactTrigger.addEventListener("click", function () {
    contactForm.style.display = "block";
});

closeContactForm.addEventListener("click", function () {
    contactForm.style.display = "none";
});
});*/
