let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    currentIndex = (index + totalImages) % totalImages; // Ajusta el índice
    const offset = -currentIndex * (100 / totalImages); // Mueve el carrusel
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Efecto de desvanecimiento al hacer scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 300; // Ajusta 300 según sea necesario
    document.querySelector('.carousel-container').style.opacity = Math.max(opacity, 0);
});
