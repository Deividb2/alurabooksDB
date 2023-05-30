const btnMenu = document.querySelector('.cabecalho__menu-hamburguer');
const menuNav = document.querySelector('.menu-nav');
const img = document.querySelector('.container__imagem')
btnMenu.addEventListener('click', () => {
    menuNav.classList.toggle('menu-navAtivo');
    if (menuNav.classList.contains('menu-navAtivo')) {
        
    }
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});