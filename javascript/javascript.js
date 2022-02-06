var links = document.querySelectorAll(".links .link");

links.forEach((ele) => {

    ele.addEventListener("click", (prevent) => {

        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        ele.classList.add("active");
        prevent.preventDefault();

    });
});

let menueIcon = document.querySelector(".menue-icon");

let closeMenue = document.querySelector(".close-icon");

let allLinks = document.getElementById("links");

menueIcon.addEventListener("click", () => {

    console.log(allLinks);

    allLinks.style.top = "0";

});

closeMenue.addEventListener("click", () => {
    allLinks.style.top = "-100%";
});

let darkMode = document.getElementById("dark");

let sunMode = document.getElementById("sun");

let header = document.querySelector(".header");

let colorWhit = document.querySelectorAll(".color-white");

let colrText = "#FFF";

let scrollBtn = document.getElementById("scroll-top");

let darkM = "#251819";

// Dark Theme
function dark() {

    document.body.style.backgroundColor = darkM; // 1
    header.style.backgroundColor = darkM; // 2


    colorWhit.forEach((ele) => {
        ele.style.color = colrText;
    });
    darkMode.style.display = "none";
    sunMode.style.display = "block";

    allLinks.style.backgroundColor = darkM; // 3
    scrollBtn.style.backgroundColor = darkM; // 4
};

darkMode.addEventListener("click", () => {

    window.localStorage.mode = "dark";
    if (window.localStorage.mode == "dark") {
        dark();
    };

});

// Default Theme
function defaultTheme() {

    document.body.style.backgroundColor = "#FFF";
    header.style.backgroundColor = "#FFF";
    
    colorWhit.forEach((ele) => {
        ele.style.color = "black";
    });
    sunMode.style.display = "none";
    darkMode.style.display = "block";

    allLinks.style.backgroundColor = darkM; // 5
    
    allLinks.style.backgroundColor = "#FFF";
    scrollBtn.style.backgroundColor = "#FFF";

};

sunMode.addEventListener("click", () => {

    window.localStorage.mode = "default";
    if (window.localStorage.mode == "default") {
        defaultTheme();
    };

});

window.onload = function () {

    if (window.localStorage.mode == "default") {
        defaultTheme();
    };

    if (window.localStorage.mode == "dark") {
        dark();
    };

};

window.addEventListener("scroll", () => {

    if (window.scrollY >= 200) {
        scrollBtn.style.transform = "translate(0, 0)";
    } else {
        scrollBtn.style.transform = "translate(100px, 100px)";
    };

});

if (window.scrollY >= 200) {

    scrollBtn.style.transform = "translate(0, 0)";

};

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

});

window.onscroll = function () {

    if (window.scrollY > 1) {
        document.querySelector(".header").classList.add("shadow-header");
    } else {
        document.querySelector(".header").classList.remove("shadow-header");
    }

};

let offsetTopElements = document.querySelectorAll(".offsetTop");

document.getElementById("links").addEventListener("click", (el) => {
    switch(el.target.id) {
        case "home":
            window.scrollTo({top: offsetTopElements[0].offsetTop, behavior: "smooth"});
            break;
        case "celebrate":
            window.scrollTo({top: offsetTopElements[1].offsetTop, behavior: "smooth"});
            break;
        case "gifts":
            window.scrollTo({top: offsetTopElements[2].offsetTop, behavior: "smooth"});
            break;
        case "new":
            window.scrollTo({top: offsetTopElements[3].offsetTop, behavior: "smooth"});
            break;
        case "contact":
            window.scrollTo({top: offsetTopElements[4].offsetTop, behavior: "smooth"});
            break;
    };
});

// By Yousef Ahmed >