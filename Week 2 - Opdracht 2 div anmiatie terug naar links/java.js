var pos = 0;
var direction = 1; 
var screenWidth = window.innerWidth; 
var divWidth = 50; 
var id = setInterval(frame, 1);

function frame() {
    if (pos >= screenWidth - divWidth) {
        direction = -1;
    } else if (pos <= 0) {
        direction = 1; 
    }

    pos += direction;
    document.getElementById("myDiv").style.left = pos + "px";
}
