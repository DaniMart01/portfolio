

const navlinkEls = document.querySelectorAll('.nav__link');
navlinkEls.forEach(navlinkEl => {
    navlinkEl.addEventListener('click', () => {
        document.querySelector('._active').classList.remove('_active');
        navlinkEl.classList.add('_active');
    });
});
