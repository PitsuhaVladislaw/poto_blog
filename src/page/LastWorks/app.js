// * Burger-Menu

const burgerMenu = document.querySelector('.burger-menu img');
const blockLink = document.getElementById('menu-link');

burgerMenu.addEventListener('click', (e) => {
    activeBlock(e);
});

function activeBlock(e) {
    e.preventDefault();

    blockLink.style.display = 'flex';
    burgerMenu.classList.toggle('active');
    blockLink.classList.toggle('menuActive');
}

window.onload = function () {
    setTimeout(() => {
        blockLink.classList.toggle('menuClose');
        blockLink.style.display = 'none';
        burgerMenu.classList.remove('active');
        burgerMenu.classList.add('close');
    }, 500)
}