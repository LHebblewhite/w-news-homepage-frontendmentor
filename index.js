function openNav(){
    let setContentSize = "75%"
    let setShadowSize = "25%"
    window.innerHeight >= 750 ? {setContentSize: "50%", setShadowSize: "50%"}: {setContentSize: "75%", setShadowSize: "25%"}
    document.getElementById("sidemenu").style.width = "100%";
    document.getElementById("sidemenuContent").style.width = setContentSize;
    document.getElementById("sidemenuShadowArea").style.width = setShadowSize;
}
function closeNav(){
    document.getElementById("sidemenu").style.width = "0%";
    document.querySelector("main").style.backgroundBlendMode = "normal";
}