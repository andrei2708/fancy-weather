const refreshButton = document.querySelector(".refresh-btn");
const bodyBackground = document.querySelector("body");

function refreshBackground() {
    bodyBackground.style.add('body::content');
}

refreshBackground.addEventListener("click", refreshBackground);
