


/* OKRAJE OBRÁZKU 
var photos = document.getElementsByClassName("img-rounded");
for (i = 0; i < photos.length; i++) {
    photos[i].addEventListener("mouseover", function () {
        this.style.border = "solid black 2px";
    });
    photos[i].addEventListener("mouseleave", function () {
        this.style.border = "none";
    });
}
*/
/* ZEŠEDNUTÍ GLYPH ICONU V NAVBARU */
$(function () {
    $(".glyph").on('mouseover', function () {
        $(this).attr("src", "fotky/Icony/" + $(this).attr("id") + "_gray.png");
    });
    $(".glyph").on('mouseleave', function () {
        $(this).attr("src", "fotky/Icony/" + $(this).attr("id") + ".png");
    })
    var scrollable = $(".scroll");
    scrollable.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});
