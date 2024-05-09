var navbox = document.getElementById("navbox");
let navbar = document.getElementById("my-navbar");
let items = navbar.children;

function over(el) {
    // document.getElementById("icon-txt").style.visibility = "hidden";
    // document.getElementById("icon").classList.add("icon-over");
    for (i = 0; i < 5; i++) {
        items[i].children[0].style.color = "#010f49";
    }
    el.children[0].style.color = "#f47971";
    if (el.children.length > 1) {
        let son = el.children[1];
        if (getComputedStyle(son, null)["display"] == "none") {
            setTimeout(function () {
                son.style.opacity = "1";
            }, 10);
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

window.onscroll = function () {
    if (window.scrollY <= 100) document.getElementById("to-top").style.visibility = "hidden";
    else document.getElementById("to-top").style.visibility = "";
    var scrollPosition = window.scrollY;
    var opacity = 14.4 + scrollPosition / 80;
    // navbox.style.background = 'linear-gradient(to right, hsl(191, 50%, 78%), hsl(191, 50%, ' + opacity + '%)';
    navbox.style.background = 'linear-gradient(to right, hsl(191, 50%, ' + opacity + '%), hsl(228, 97%, 14.4%)';

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    ScrollFunction(winScroll);


};
// window.addEventListener('scroll', ScrollFunction);

// progress bar
function ScrollFunction(winScroll) {
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

window.onmousemove = function (event) {

}

document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', function (e) {
        // Check if the mouse is not hovering over a <p> element
        if (!e.target.matches('p')) {
            customCursor.style.visibility = "";
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        } else {
            customCursor.style.visibility = "hidden";
        }
    });

    document.addEventListener('click', function (e) {
        // Create a new blood element
        const blood = document.createElement('img');
        blood.src = '/resources/blood.png';
        blood.classList.add('blood');

        // Set the dimensions for the blood image
        const bloodWidth = 100;
        const bloodHeight = 100;
        blood.width = bloodWidth;
        blood.height = bloodHeight;

        // Calculate the position for the blood image, considering scroll position
        const offsetX = bloodWidth / 2;
        const offsetY = bloodHeight / 2;
        const posX = e.clientX + window.pageXOffset - offsetX + 20;
        const posY = e.clientY + window.pageYOffset - offsetY + 20;

        // Set the position for the blood image
        blood.style.left = posX + 'px';
        blood.style.top = posY + 'px';

        // Append the blood element to the document body
        document.body.appendChild(blood);

        // Gradually fade out the blood element
        setTimeout(function () {
            blood.style.opacity = '0';
        }, 100);

        // Remove the blood element from the DOM after it fades out
        setTimeout(function () {
            blood.remove();
        }, 1100); // Adjust the timing based on the transition duration
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Function to change cursor URL
//     function changeCursor() {
//         document.body.style.cursor = "url('https://static.igem.wiki/teams/4805/wiki/select-words2.png'), auto";
//     }
//
//     // Event listener for mouse click
//     document.addEventListener("click", changeCursor);
// });