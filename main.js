const mainScript = document.createElement("script")
document.body.appendChild(mainScript)

function checkScreenType() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 376) {
        mainScript.src = "./desktop.js"
    } else {
        mainScript.src = "./mobile.js"
    }  
}
checkScreenType()
window.addEventListener("resize", checkScreenType)