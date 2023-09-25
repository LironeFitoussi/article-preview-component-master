const shareBtn = document.querySelector("#shareBtn");
let isLoaded = false;

function loadShare() {
    const mainElem = document.querySelector("main");
    let topPosition = -50;
    
    if (!isLoaded) {
        isLoaded = true;

        const shareComp = document.createElement("div");
        shareComp.id = "shareComp";
        shareComp.className = "shareMobileActive";
        shareComp.style.position = "absolute";
        shareComp.style.display = "none"

        const shareContent = `
            <span>SHARE</span>
            <span><img src="./images/icon-facebook.svg" alt="icon-facebook"></span>
            <span><img src="./images/icon-twitter.svg" alt="icon-twitter"></span>
            <span><img src="./images/icon-pinterest.svg" alt="icon-pinterest"></span>
            <span class="shareBtnActive"><img src="./images/icon-share.svg" alt="share button"></span>
        `;

        shareComp.innerHTML = shareContent;
        mainElem.appendChild(shareComp);
        
        const slideUp = setInterval(() => {
            topPosition++;
            shareComp.style.bottom = topPosition + "px";
            shareComp.style.display = "flex"

            if (topPosition == 0) {
                clearInterval(slideUp);
            }
        }, 5);
    } else {
        isLoaded = false;
        const shareComp = document.querySelector("#shareComp");
        if (shareComp) {
            mainElem.removeChild(shareComp);
        }
    }
}



shareBtn.addEventListener("mouseover", loadShare);
shareBtn.addEventListener("mouseout", loadShare);