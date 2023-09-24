console.log("test");
const shareBtn = document.querySelector("#shareBtn")
shareBtn.addEventListener("mouseover", loadShare)

const shareCome = `
    <div id="shareMobile">
        <span>SHARE</span>
        <span><img src="./images/icon-facebook.svg" alt="icon-facebook"></span>
        <span><img src="./images/icon-twitter.svg" alt="icon-twitter"></span>
        <span><img src="./images/icon-pinterest.svg" alt="icon-pinterest"></span>
        <span class="shareBtnActive"><img src="./images/icon-share.svg" alt="share button"></span>
    </div>
`;

function loadShare() {
    const mainElem = document.querySelector("main");
    mainElem.innerHTML += shareCome

}
