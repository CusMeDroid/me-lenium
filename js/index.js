var mLight = document.getElementById("light");
var mDark = document.getElementById("dark");

mLight.onclick = function() {
    document.body.style.background = "#C2C2C2";
    mLight.style.display = "none";
    mDark.style.display = "block";
    document.getElementById("footer").style.color = "black";
    document.getElementById("cpage").style.color = "black";
}

mDark.onclick = function() {
    document.body.style.background = "#222222";
    mLight.style.display = "block";
    mDark.style.display = "none";
    document.getElementById("footer").style.color = "white";
    document.getElementById("cpage").style.color = "white";
}