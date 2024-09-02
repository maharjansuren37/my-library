const mobileToggle = document.querySelector('.mobile-nav-toggle');
const navigation = document.querySelector('.navigation');

mobileToggle.addEventListener('click', () => {
    let visibility = navigation.getAttribute('data-visible');

    if (visibility === 'false') {
        navigation.setAttribute('data-visible', true);
        mobileToggle.setAttribute('aria-expanded', true);
    } else {
        navigation.setAttribute('data-visible', false);
        mobileToggle.setAttribute('aria-expanded', false);
    }
})