const btnMenu = document.querySelector('.cabecalho__menu-hamburguer');
const menuNav = document.querySelector('.menu-nav');
btnMenu.addEventListener('click', () => {
    menuNav.classList.toggle('menu-navAtivo');
})