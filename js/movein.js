document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("full-page-wrapper")[0].style.transform = "translate(0, 0)";
    setTimeout(() => {
        document.body.style.overflowY = "auto";
    }, 1000);
});