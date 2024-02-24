// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.



// Simple fade in/out animation
function fadeInOut() {
    let box = document.getElementById("animation-box");
    let opacity = 1;
    let intervalID = setInterval(function () {
        if (opacity < 0.1) {
            opacity = opacity + 0.1;
        } else {
            opacity = opacity - 0.1;
        }
        box.style.opacity = opacity;
    }, 100);
}
window.onload = fadeInOut;

