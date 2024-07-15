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
    tasksTabBtn.querySelector("img").src = "icons/splitscreen_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    tasksTabBtn.querySelector("p").classList.remove("active");

    profileTabBtn.querySelector("img").src = "icons/person_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    profileTabBtn.querySelector("p").classList.remove("active");

    // Enable this tab
    homeTabBtn.querySelector("img").src = "icons/home_30dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg";
    homeTabBtn.querySelector("p").classList.add("active");

    main.style.backgroundImage = "url(icons/home_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg)";
});

tasksTabBtn.addEventListener("click", () => {
    // Disable any active tab
    homeTabBtn.querySelector("img").src = "icons/home_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    homeTabBtn.querySelector("p").classList.remove("active");

    profileTabBtn.querySelector("img").src = "icons/person_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    profileTabBtn.querySelector("p").classList.remove("active");

    // Enable this tab
    tasksTabBtn.querySelector("img").src = "icons/splitscreen_30dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg";
    tasksTabBtn.querySelector("p").classList.add("active");

    main.style.backgroundImage = "url(icons/splitscreen_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg)";
});

profileTabBtn.addEventListener("click", () => {
    // Disable any active tab
    homeTabBtn.querySelector("img").src = "icons/home_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    homeTabBtn.querySelector("p").classList.remove("active");

    tasksTabBtn.querySelector("img").src = "icons/splitscreen_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
    tasksTabBtn.querySelector("p").classList.remove("active");

    // Enable this tab
    profileTabBtn.querySelector("img").src = "icons/person_30dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg";
    profileTabBtn.querySelector("p").classList.add("active");

    main.style.backgroundImage = "url(icons/person_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg)";
});