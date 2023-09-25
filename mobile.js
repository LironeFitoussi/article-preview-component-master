const shareBtn = document.querySelector("#shareBtn");
const shareComp = document.createElement("div");
shareComp.id = "shareComp";
shareComp.className = "shareMobileActive";
shareComp.style.position = "absolute";
shareComp.style.display = "none";

const shareContent = `
    <span>SHARE</span>
    <span><a href="https://www.facebook.com" target="_blank"><img src="./images/icon-facebook.svg" alt="icon-facebook"></a></span>
    <span><a href="https://twitter.com" target="_blank"><img src="./images/icon-twitter.svg" alt="icon-twitter"></a></span>
    <span><a href="https://www.pinterest.com" target="_blank"><img src="./images/icon-pinterest.svg" alt="icon-pinterest"></a></span>
    <span class="shareBtnActive"><img src="./images/icon-share.svg" alt="share button"></span>
`;


shareComp.innerHTML = shareContent;

let topPosition = -100;
let isLoaded = false;
let unloadTimeout;

function loadShare() {
    if (!isLoaded) {
        const mainElem = document.querySelector("main");
        mainElem.appendChild(shareComp);
        const slideUp = setInterval(() => {
            topPosition++;
            shareComp.style.bottom = topPosition + "px";
            shareComp.style.display = "flex";
            isLoaded = true;
            if (topPosition >= 0) {
                clearInterval(slideUp);
            }
        }, 5);
    } else {
        return;
    }
}

function unloadShare() {
        unloadTimeout = setTimeout(() => {
            const slideDown = setInterval(() => {
                topPosition--;
                shareComp.style.bottom = topPosition + "px";
                isLoaded = false;
                if (topPosition <= -120) {
                    clearInterval(slideDown);
                }
            }, 5);
        }, 300);
}

function cancelUnloadShare() {
    clearTimeout(unloadTimeout);
}

shareBtn.addEventListener("mouseover", loadShare);
shareBtn.addEventListener("mouseout", unloadShare);
shareComp.addEventListener("mouseenter", cancelUnloadShare);
