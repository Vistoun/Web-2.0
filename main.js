


/* ZEŠEDNUTÍ GLYPH ICONU V NAVBARU */
$(function () {
  $(".glyph").on('mouseover', function () {
    $(this).attr("src", "fotky/Icony/" + $(this).attr("id") + "_gray.png");
  });
  $(".glyph").on('mouseleave', function () {
    $(this).attr("src", "fotky/Icony/" + $(this).attr("id") + ".png");
  })
});

/* SMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTH SCROLLING */
document.querySelector('.hello').scrollIntoView({
  behavior: 'smooth'
});
let mainNavLinks = document.querySelectorAll("nav ul li a");

mainNavLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});




