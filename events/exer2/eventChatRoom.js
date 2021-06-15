
var submitButtonNode = document.querySelector("#submitButton");
var divTextNode = document.querySelector("#text");

var inputTextHandler = function () {
    var inputMessageNode = document.querySelector("#inputMess").value;
    var newParagNode = document.createElement("p");
    var textNode = document.createTextNode(inputMessageNode);
    newParagNode.appendChild(textNode)
    divTextNode.appendChild(newParagNode);
    document.querySelector("#inputMess").value = "";
}

submitButtonNode.addEventListener("click", inputTextHandler);