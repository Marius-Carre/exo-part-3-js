function agrandir() {
    var myImg = document.getElementById("myImgs");
    var width = myImg.clientWidth;
    if (width == 600) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        myImg.style.width = (width + 20) + "px";
    }
}