function resize() {
    var element = document.getElementById("display");
    element.innerHTML = element.innerHTML + " that tickles!";
}

window.onresize = resize;