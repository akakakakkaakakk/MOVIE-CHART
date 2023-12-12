// public/script.js

const gallery = document.getElementById('gallery');
let currentIndex = 0;

gallery.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gallery.children.length;
    updateGallery();
});

function updateGallery() {
    const translateValue = -currentIndex * gallery.children[0].offsetWidth;
    gallery.style.transform = `translateX(${translateValue}px)`;
}
