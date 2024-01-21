// * Burger-Menu

const burgerMenu = document.querySelector('.burger-menu img');
const blockLink = document.getElementById('menu-link');

burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();

    blockLink.classList.toggle('menu-open');
    e.target.classList.toggle('active');
    blockLink.classList.toggle('menu-closed');
    e.target.classList.toggle('close');
})

window.onload = blockLink.classList.toggle('menu-closed');

// * Переход по ссылке 

const clients = document.querySelectorAll('.client-block');

clients.forEach(client => {

    const cliendId = client.id;

    client.addEventListener('click', cliendId => {
        let url = `http://127.0.0.1:5500/src/page/Accounts/${cliendId}/Account.html`

        window.location.href = url;
    });
})