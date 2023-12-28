// * Burger-Menu

const burgerMenu = document.querySelector('.burger-menu img');
const blockLink = document.getElementById('menu-link');

burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();

    blockLink.classList.toggle('menu-open');
    e.target.classList.toggle('active')
    blockLink.classList.toggle('menu-closed');
    e.target.classList.toggle('close')
})

window.onload = blockLink.classList.toggle('menu-closed')

// * Scrolling

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// * ModalFoto

const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
let currentIndex = 0;

gallery.addEventListener('click', (e) => {
    if(e.target.classList.contains('image')) {
        currentIndex = parseInt(e.target.getAttribute('data-index'), 10) - 1;
        showImage()
    }
});

const showImage = () => {
    const imagePath = `../../assets/image/kerem/kerem-${currentIndex + 1}.jpg`;
    overlayImage.src = imagePath;
    overlay.style.display = 'flex';
}

const closeOverlay =() => {
    overlay.style.display = 'none'
}

const changeImage = (direction) => {
    currentIndex += direction;

    if(currentIndex < 0) {
        currentIndex = gallery.childElementCount - 1;
    } else if(currentIndex >= gallery.childElementCount) {
        currentIndex = 0
    }

    showImage()
}