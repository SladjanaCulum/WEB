var pos = 0;
function repeat () {
    var backgImgNode = document.getElementById("divImg");
    
    setInterval(fun, 100)
    function fun () {
       
        backgImgNode.style.backgroundPositionX = pos + "px";
        pos++;
    }
   
}
repeat();

// var imgNode = document.querySelector(".oldImg")[0].src

// var keyRightHandler = function () {
//     imgNode = "mario_running.gif"
// }

// imgNode.addEventListener("click", keyRightHandler)