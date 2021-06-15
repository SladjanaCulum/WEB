
var isOn = true;

 
var redButtonNode = document.querySelector(".button1");

var changeBgColorHander = function () {
    var conteNode = document.querySelector(".conte");
    conteNode.classList.toggle("changeBgColor");
}

redButtonNode.addEventListener("click", changeBgColorHander);


//stop toggle change bgcolor
var yellowButtonNode = document.querySelector(".button2");

var switchChangeBgColorHandler = function (){
    if(isOn) {
        redButtonNode.removeEventListener("click", changeBgColorHander)
        yellowButtonNode.textContent = "Turn Off"
        isOn = false;
    } else {
        redButtonNode.addEventListener("click", changeBgColorHander)
        yellowButtonNode.textContent = "Turn On"
        isOn = true;
    }
    
}

yellowButtonNode.addEventListener("click", switchChangeBgColorHandler)
