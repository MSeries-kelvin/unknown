function setFullHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.getElementById('app_main_container').style.height = `calc(var(--vh, 1vh) * 100)`;
}

window.addEventListener('resize', setFullHeight);
window.addEventListener('orientationchange', setFullHeight);
window.addEventListener('load', setFullHeight);

setFullHeight();