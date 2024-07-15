function setFullHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.getElementById('main-body').style.height = `calc(var(--vh, 1vh) * 100)`;
}

window.addEventListener('resize', setFullHeight);
window.addEventListener('orientationchange', setFullHeight);
window.addEventListener('load', setFullHeight);

setFullHeight();


const homeTabBtn = document.getElementById("home_tab_btn");
const tasksTabBtn = document.getElementById("tasks_tab_btn");
const profileTabBtn = document.getElementById("profile_tab_btn");
const main = document.querySelector("main");

homeTabBtn.addEventListener("click", () => {
    // Disable any active tab
    var imgs = tasksTabBtn.getElementsByTagName("img");
    var p = tasksTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/splitscreen_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
    }

    var imgs = profileTabBtn.getElementsByTagName("img");
    var p = profileTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/person_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
    }

    // Enable this tab
    var imgs = homeTabBtn.getElementsByTagName("img");
    var p = homeTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/home_30dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.add("active");
    }

    main.style.backgroundImage = "url(icons/home_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg)";
});

tasksTabBtn.addEventListener("click", () => {
    // Disable any active tab
    var imgs = homeTabBtn.getElementsByTagName("img");
    var p = homeTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/home_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
    }

    var imgs = profileTabBtn.getElementsByTagName("img");
    var p = profileTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/person_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
    }

    // Enable this tab
    var imgs = tasksTabBtn.getElementsByTagName("img");
    var p = tasksTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/splitscreen_30dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.add("active");
    }

    main.style.backgroundImage = "url(icons/splitscreen_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg)";
});

profileTabBtn.addEventListener("click", () => {
    // Disable any active tab
    var imgs = homeTabBtn.getElementsByTagName("img");
    var p = homeTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/home_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
    }

    var imgs = tasksTabBtn.getElementsByTagName("img");
    var p = tasksTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/splitscreen_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
    }

    // Enable this tab
    var imgs = profileTabBtn.getElementsByTagName("img");
    var p = profileTabBtn.getElementsByTagName("p");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "icons/person_30dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].classList.add("active");
    }

    main.style.backgroundImage = "url(icons/person_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg)";
});