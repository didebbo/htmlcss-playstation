var wallpaper = document.getElementById("wallpaper")
var intro = document.getElementById("intro");
var intro_video = document.getElementById("intro_video");
var intro_label = document.getElementById("intro_label");
var site = document.getElementById("site");

// Develope Mode
wallpaper.style.display = "none";
site.style.display = "block";

function play_intro() {
    wallpaper.style.display = "none";
    intro.style.display = "block";
    intro_video.play();
    intro.classList.add("intro_animation");
    setTimeout(() => {
        site.style.display = "block";
    }, 15000);
    setTimeout(() => {
        intro.style.display = "none";
    }, 16000);
}