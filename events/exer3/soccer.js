
var fieldNode = document.getElementById("div1");

var positionX = 0;
var positionY = 0;

var movieOnClickHandler = function (elem) {
    positionX = elem.clientX - 28 + "px";
    positionY = elem.clientY - 28 + "px";
    var playerNode = document.getElementById("img1");
    playerNode.style.left = positionX;
    playerNode.style.top = positionY;
}

fieldNode.addEventListener("click", movieOnClickHandler);