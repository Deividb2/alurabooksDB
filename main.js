const btnMenu = document.querySelector('.cabecalho__menu-hamburguer');
const menuNav = document.querySelector('.menu-nav');
btnMenu.addEventListener('click', () => {
    menuNav.classList.toggle('menu-navAtivo');
})

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});