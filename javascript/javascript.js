let links = document.querySelectorAll(".links .link");

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
// let bg = "#251819";
let colrText = "#FFF";
let scrollBtn = document.getElementById("scroll-top");

window.localStorage.changeMode = "#251819";

// Start LocalStorage And DarkTheme
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = localStorage.changeMode;
    header.style.backgroundColor = localStorage.changeMode;

    colorWhit.forEach((ele) => {
        ele.style.color = colrText;
    });
    darkMode.style.display = "none";
    sunMode.style.display = "block";
    allLinks.style.backgroundColor = localStorage.changeMode;
    scrollBtn.style.backgroundColor = localStorage.changeMode;
});

sunMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#FFF";
    header.style.backgroundColor = "#FFF";
    
    colorWhit.forEach((ele) => {
        ele.style.color = "black";
    });
    sunMode.style.display = "none";
    darkMode.style.display = "block";
    allLinks.style.backgroundColor = localStorage.changeMode;
    allLinks.style.backgroundColor = "#FFF";
    scrollBtn.style.backgroundColor = "#FFF";
});

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