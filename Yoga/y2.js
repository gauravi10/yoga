var title = document.getElementById("title");
var bg_2 = document.getElementById("bg-2");
var bg_3 = document.getElementById("bg-3");

document.addEventListener("scroll", (event) => {
    var positionY = window.scrollY;

    title.style.transform = translateY(${positionY * 0.5}px);
    bg_2.style.transform = translateY(${positionY * 0.25}px) scale(1.5);
    bg_3.style.transform = translateY(${positionY * 0.1}px) scale(1.3);
});