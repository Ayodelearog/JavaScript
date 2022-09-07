function init() {
    var images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = blurImagesMouseout;
        // images[i].onclick = showAnswer;
        // images[i].ondblclick = blurImages;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name += ".jpg";
    image.src = name;
    // setTimeout(blurImages, 3000, eventObj);
    // console.log(image.src);
}

/*function blurImages(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    image.src = name + "blur.jpg";
    // console.log(image.src);
}*/

function blurImagesMouseout(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    image.src = name + "blur.jpg";
}
window.onload = init;