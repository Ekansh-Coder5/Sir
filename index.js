var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-container").style.top = "0";
        } else {
            document.getElementById("nav-container").style.top = "-6em";
        }
        prevScrollpos = currentScrollPos;
    }
}
