window.addEventListener("load", function(){
    hideLoader();
});
function hideLoader(){
    $(".preloader").addClass("preloaderanimation");
    this.setTimeout(function(){
        $(".preloader").css("display", "none");
    }, 1000);
}