var wallpaper = document.getElementById("wallpaper")
var intro = document.getElementById("intro");
var intro_video = document.getElementById("intro_video");
var intro_label = document.getElementById("intro_label");
var site = document.getElementById("site");

function play_intro() {
    wallpaper.style.display = "none";
    intro.style.display = "block";
    intro_video.play();
    intro.classList.add("intro_animation");
    setInterval(() => {
        site.style.display = "block";
    }, 15000);
}