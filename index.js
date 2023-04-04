function openNav(){
    let setWindowSize = "75%"
    window.innerHeight >= 750 ? setWindowSize = "25%" : setWindowSize = "75%"
    document.getElementById("sidemenu").style.width = setWindowSize;
}
function closeNav(){
    document.getElementById("sidemenu").style.width = "0%";
}