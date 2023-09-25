const shareBtn = document.querySelector("#shareBtn");
const shareComp = document.createElement("div");
shareComp.id = "shareComp";
shareComp.className = "shareMobileActive";
shareComp.style.position = "absolute";
shareComp.style.display = "none"; // Initially hide the share component

const shareContent = `
    <span>SHARE</span>
    <a href="https://www.facebook.com" target="_blank"><img src="./images/icon-facebook.svg" alt="icon-facebook"></a>
    <a href="https://twitter.com" target="_blank"><img src="./images/icon-twitter.svg" alt="icon-twitter"></a>
    <a href="https://www.pinterest.com" target="_blank"><img src="./images/icon-pinterest.svg" alt="icon-pinterest"></a>
`;

shareComp.innerHTML = shareContent;

let isLoaded = false;

function loadShare() {
    if (!isLoaded) {
        const mainElem = document.querySelector("main");
        mainElem.appendChild(shareComp);
        shareComp.style.display = "flex"; // Show the share component
        isLoaded = true;
    }
}

function unloadShare() {
    if (isLoaded) {
        shareComp.style.display = "none";
        isLoaded = false;
    }
}

shareBtn.addEventListener("mouseover", loadShare);
shareComp.addEventListener("mouseleave", unloadShare);
