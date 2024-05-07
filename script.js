var navbox = document.getElementById("navbox");
let navbar = document.getElementById("my-navbar");
let items = navbar.children;

function over(el) {
    // document.getElementById("icon-txt").style.visibility = "hidden";
    // document.getElementById("icon").classList.add("icon-over");
    // el.children[0].classList.add("my-active-navbar");
    for (i = 0; i < 5; i++) {
        items[i].children[0].style.color = "#2B5D6F";
    }
    el.children[0].style.color = "rgba(248,240,232,1)";
    if (el.children.length > 1) {
        let son = el.children[1];
        if (getComputedStyle(son, null)["display"] == "none") {
            setTimeout(function () {
                son.style.opacity = 1;
            }, 1);
            son.style.display = "block";
        }
        if (document.documentElement.clientWidth > 1400) {
            navbox.style.height = "280px";
        } else if (document.documentElement.clientHeight < 1120) {
            navbox.style.height = "245px";
        } else {
            navbox.style.height = "280px";
        }
    }
}

function leave(el) {
    document.getElementById("icon").classList.remove("icon-over");
    el.children[0].classList.remove("my-active-navbar");
    for (i = 0; i < 5; i++) {
        items[i].children[0].style.color = "rgba(248,240,232,1)";
    }
    if (el.children.length > 1) {
        let son = el.children[1];
        if (getComputedStyle(son, null)["display"] == "block") {
            son.style.opacity = 0;
            setTimeout(function () {
                son.style.display = "none";
            }, 350);
        }
        navbox.style.height = "78px";
    }
    // document.getElementById("icon-txt").style.visibility = "";
}

function to_top() {
    // document.getElementById("to-top").style.visibility = "hidden";
    window.scroll(window.scrollX, window.scrollY * 0.98);
    if (window.scrollY != 0) setTimeout(to_top, 1);
}

// Scroll functions for progress bar and mex-explodes
window.onscroll = function () {
    if (window.scrollY <= 100) document.getElementById("to-top").style.visibility = "hidden";
    else document.getElementById("to-top").style.visibility = "";
};