let bgImage = document.querySelector(".background-image");
let first_Img = document.querySelector("#first img");
let styleSheet = document.querySelector("#diskTop");
let imagesContainer = document.querySelectorAll("#imagesContainer a img");

window.onload = onresize = function () {

    if(window.innerWidth < 1000) {
        // styleSheet.href = "secondary.css";

        bgImage.style.backgroundImage="url(images/mobile/image-hero.jpg)";
        first_Img.src = "images/mobile/image-interactive.jpg";

        imagesContainer[0].src = "images/mobile/image-deep-earth.jpg";
        imagesContainer[1].src = "images/mobile/image-night-arcade.jpg";
        imagesContainer[2].src = "images/mobile/image-soccer-team.jpg";
        imagesContainer[3].src = "images/mobile/image-grid.jpg";
        imagesContainer[4].src = "images/mobile/image-from-above.jpg";
        imagesContainer[5].src = "images/mobile/image-pocket-borealis.jpg";
        imagesContainer[6].src = "images/mobile/image-curiosity.jpg";
        imagesContainer[7].src = "images/mobile/image-fisheye.jpg";
    } else {
        // styleSheet.href = "diskTop to 1000.css";
        
        bgImage.style.backgroundImage="url(images/desktop/image-hero.jpg)";
        first_Img.src = "images/desktop/image-interactive.jpg";

        imagesContainer[0].src = "images/desktop/image-deep-earth.jpg";
        imagesContainer[1].src = "images/desktop/image-night-arcade.jpg";
        imagesContainer[2].src = "images/desktop/image-soccer-team.jpg";
        imagesContainer[3].src = "images/desktop/image-grid.jpg";
        imagesContainer[4].src = "images/desktop/image-from-above.jpg";
        imagesContainer[5].src = "images/desktop/image-pocket-borealis.jpg";
        imagesContainer[6].src = "images/desktop/image-curiosity.jpg";
        imagesContainer[7].src = "images/desktop/image-fisheye.jpg";


    }
}

let burger = document.querySelector("#burger");
let nav = document.querySelector("nav");
let closey = document.querySelector("#close");

closey.onclick = function () {
    // console.log("close");
    nav.style.transform = "translateX(-100%)";
    nav.style.position = "absolute";
    document.body.style.overflow = "unset";
}

burger.onclick = function () {
    nav.style.transform = "translateX(0)";
    nav.style.position = "fixed";
    document.body.style.overflow = "hidden";
}