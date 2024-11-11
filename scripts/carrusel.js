document.addEventListener('DOMContentLoaded', () => {
    
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    document.querySelector('.carousel').style.width = `${images.length * 100}%`;


    let index = 0;

    function showImage(newIndex) {
        if (newIndex < 0) {
        newIndex = images.length - 1; // Volver al último si se pasa al anterior
        } else if (newIndex >= images.length) {
        newIndex = 0; // Volver al primero si se pasa al último
        }
        index = newIndex;
        const offset = -index * 100/images.length;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    // Siguiente imagen
    function nextImage() {
        showImage(index + 1);
    }
    // Imagen anterior
    function prevImage() {
        showImage(index - 1);
    }
    // Avance automático cada 3 segundos
    let autoSlide = setInterval(function() {
        nextImage();
    }, 3000); // Cambia el tiempo si prefieres otra duración
    // Función para reiniciar el auto-slide
    function resetAutoSlide() {
        clearInterval(autoSlide); // Detenemos el intervalo actual
        autoSlide = setInterval(function() {
            nextImage();
        }, 3000); // Reiniciamos el intervalo
    }
    // Detener el avance automático cuando el usuario interactúa con los botones
    document.querySelector('.next').addEventListener('click', () => {
        nextImage(); // Avanza a la siguiente imagen
        resetAutoSlide(); // Reinicia el auto-slide
    });
    document.querySelector('.prev').addEventListener('click', () => {
        prevImage(); // Retrocede a la imagen anterior
        resetAutoSlide(); // Reinicia el auto-slide
    });
    // Efecto de desvanecimiento al hacer scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 300; // Ajusta 300 según sea necesario
        document.querySelector('.carousel-container').style.opacity = Math.max(opacity, 0);
    });
});
