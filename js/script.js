
// toogle menu

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener ('click', () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle("active");
})


// my custom

// $("#menu-icon").on("click", function () {
//   $("#menu-icon").addClass("bx-x")
//   $(".navbar").addClass("active").fadeToggle();
// });

  

// scroll section active
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // border

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toogle afetr click
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};




// my custom cutom







// scroll reveal

 ScrollReveal({ 
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: 'top' });

ScrollReveal().reveal(
  ".class-img, .service-container, .portfolio-box, .contact-section-wrapper, .service-box",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".about-image, .home-content h1", {
  origin: "left",
});

ScrollReveal().reveal(".about-content, .home-content p", { origin: "left" });


// typed js

// const typed = select(".typed");
// if (typed) {
//   let typed_strings = typed.getAttribute("data-typed-items");
//   typed_strings = typed_strings.split(",");
//   new typed(".typed", {
//     strings: typed_strings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000,
//   });
// }


const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});







