function openNav(){
    let setWindowSize = "75%"
    window.innerHeight >= 750 ? setWindowSize = "50%" : setWindowSize = "75%"
    document.getElementById("sidemenu").style.width = setWindowSize;
    document.querySelector("main").style.backgroundBlendMode = "darken";
}
function closeNav(){
    document.getElementById("sidemenu").style.width = "0%";
    document.querySelector("main").style.backgroundBlendMode = "normal";
}