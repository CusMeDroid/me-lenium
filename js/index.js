function mThemeDark() {
    var sTheme = "Theme";
    var mBground = document.getElementById("mBground").value;
    var mColor = document.getElementById("mColor").value;
    var mLdisplay = document.getElementById("mLdisplay").value;
    var mDdisplay = document.getElementById("mDdisplay").value;
    console.log(sTheme);
    console.log(mBground);
    console.log(mColor);
    console.log(mLdisplay);
    console.log(mDdisplay);
    firebase.database().ref(sTheme).set({bground: mBground, bcolor: mColor, displayon: mLdisplay, displayoff: mDdisplay});
}

function mThemeLight() {
    var sTheme = "Theme";
    var mBground = document.getElementById("mBground").value;
    var mColor = document.getElementById("mColor").value;
    var mLdisplay = document.getElementById("mLdisplay").value;
    var mDdisplay = document.getElementById("mDdisplay").value;
    console.log(sTheme);
    console.log(mBground);
    console.log(mColor);
    console.log(mLdisplay);
    console.log(mDdisplay);
    firebase.database().ref(sTheme).set({bground: mBground, bcolor: mColor, displayon: mDdisplay, displayoff: mLdisplay});
}

document.getElementById("light").onclick = function () {
    document.body.style.background = "#C2C2C2";
    document.getElementById("light").style.display = "none";
    document.getElementById("dark").style.display = "block";
    document.getElementById("footer").style.color = "black";
    document.getElementById("cpage").style.color = "black";
    mThemeDark();
};

document.getElementById("dark").onclick = function () {
    document.body.style.background = "#222222";
    document.getElementById("light").style.display = "block";
    document.getElementById("dark").style.display = "none";
    document.getElementById("footer").style.color = "white";
    document.getElementById("cpage").style.color = "white";
    mThemeLight();
};

// firebase.database().ref("MeTextAI/VidCall/" + serName).on("value", function (snap) {cukname = snap.val().host;});
