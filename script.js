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

    // if (el.children.length > 1) {
    let son = el.children[1];
    if (getComputedStyle(son, null)["display"] == "none") {
        setTimeout(function () {
            son.style.opacity = "1";
        }, 10);
        son.style.display = "block";
    }

    if (document.documentElement.clientWidth > 1400) {
        son.style.height = "auto";
        son.style.width = "160%";
        son.style.background = "blue";
        // navbox.style.height = "280px";
    }
    // else if (document.documentElement.clientHeight < 1120) {
    //     navbox.style.height = "245px";
    // } else {
    //     navbox.style.height = "280px";
    // }

    // }
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
        navbox.style.height = "72px";
    }
    // document.getElementById("icon-txt").style.visibility = "";
}

const toTopImage = document.getElementById('toTopImage');
const toTopButton = document.getElementById('toTopButton');

document.getElementById('toTopButton').addEventListener('click', function () {
    // Change image to clicked state
    // const toTopImage = document.getElementById('toTopImage');
    toTopImage.src = '../resources/to-top-clicked.png';
    toTopImage.classList.add('clicked');

    // Create a shoot image
    const shootImage = document.createElement('img');
    shootImage.src = '../resources/to-top-shoot.png';
    shootImage.style.position = 'fixed';
    shootImage.style.overflow = "hidden"; /* hide overflow */
    shootImage.style.bottom = '10px';
    shootImage.style.right = '10px';
    shootImage.style.width = '100px'; /* match button size */
    shootImage.style.height = '130px'; /* match button size */
    shootImage.style.animation = 'shoot 1s forwards';
    shootImage.style.objectFit = "cover";

    document.body.appendChild(shootImage);

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Reset image after some time
    setTimeout(() => {
        toTopImage.src = '../resources/to-top-default.png';
        // toTopImage.style.visibility = 'hidden';
        toTopImage.classList.remove('clicked');
    }, 1000);

    // Remove shoot image after animation ends
    setTimeout(() => {
        document.body.removeChild(shootImage);
    }, 1000);
});


function display_sidebar() {
    if (document.getElementById("sidebar").style.display === "") {
        document.getElementById("display_sidebar").src = "../resources/unfold.png";
        document.getElementById("sidebar").style.display = "none";
    } else {
        document.getElementById("display_sidebar").src = "../resources/fold.png";
        document.getElementById("sidebar").style.display = "";
    }
}

window.onscroll = function () {
    if (window.scrollY <= 100) {
        toTopButton.style.display = 'none';
    } else toTopButton.style.display = 'flex';
    // var scrollPosition = window.scrollY;
    // var opacity = 14.4 + scrollPosition / 80;
    // navbox.style.background = 'linear-gradient(to right, hsl(191, 50%, 78%), hsl(191, 50%, ' + opacity + '%)';
    // navbox.style.background = 'linear-gradient(to right, hsl(191, 50%, ' + opacity + '%), hsl(228, 97%, 14.4%)';

    // let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // ScrollFunction(winScroll);


};
// window.addEventListener('scroll', ScrollFunction);
//
// // progress bar
// function ScrollFunction(winScroll) {
//     let height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//     let scrolled = (winScroll / height) * 100;
//     document.getElementById("progress-bar").style.width = scrolled + "%";
// };

const progressBar = document.getElementById('progress-bar');
const progressGif = document.getElementById('progress-gif');
const progressAttr = document.getElementById('progress-attract');

function updateProgressBar() {
    const windowHeight = document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / documentHeight) * 100;

    // Update progress bar width based on the scroll position
    progressBar.style.width = scrollPercentage + '%';
    const progressBarWidth = progressBar.offsetWidth;
    progressGif.style.left = (progressBarWidth - 20) + 'px';  // Adjust the '-20' value if necessary to set the GIF's position correctly on the edge.
    if (scrollPercentage > 95) {
        progressGif.style.backgroundImage = "url('../resources/caught.png')";
        //!!!
        progressAttr.style.visibility = "hidden";
    }
}

window.addEventListener('scroll', updateProgressBar);

window.onmousemove = function (event) {

}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    document.getElementById("loading").style.display = "none";
});
// document.addEventListener("load", (event) => {
//     console.log("All contents loaded and parsed");
//     document.getElementById("loading").style.display = "none";
// });

// document.addEventListener('DOMContentLoaded', function () {
const customCursor = document.querySelector('.custom-cursor');
// const customSelector = document.querySelector('.custom-select');
// });
// let lastMouseMoveTime = 0;
// const throttleInterval = 12; // 60fps

document.addEventListener('mousemove', function (e) {
        // const currentTime = Date.now();
        // if (currentTime - lastMouseMoveTime < throttleInterval) {
        //     return;
        // }
        // lastMouseMoveTime = currentTime;

        // Check if the mouse is not hovering over a <p> element
    if (!e.target.closest('p')) {
        customCursor.style.visibility = "visible";
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = (e.clientY - 5) + 'px';
    } else {
        customCursor.style.visibility = "hidden";
    }
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('p')) {
        // Create a new blood element
        const blood = document.createElement('img');
        blood.src = '/resources/blood-final.png';
        blood.classList.add('blood');
        blood.width = 50;
        blood.height = 50;

        const posX = e.clientX + window.pageXOffset - 25 + 18;
        const posY = e.clientY + window.pageYOffset - 25 + 13;

        blood.style.left = posX + 'px';
        blood.style.top = posY + 'px';

        // Append the blood element to the document body
        document.body.appendChild(blood);

        // Gradually fade out the blood element
        setTimeout(() => {
            blood.style.opacity = '0';
        }, 100);

        // Remove the blood element from the DOM after it fades out
        setTimeout(() => {
            blood.remove();
        }, 1100); // Adjust the timing based on the transition duration
    }
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


