document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    console.log(totalImages);
    
    // Asegura que el carrusel tiene el ancho correcto para contener todas las imágenes
    document.querySelector('.carousel').style.width = `${totalImages * 100}%`;

    // Mostrar imagen según el índice
    function showImage(index) {
        currentIndex = (index + totalImages) % totalImages; // Ajusta el índice correctamente
        const offset = -currentIndex * (100 / totalImages); // Calcula el desplazamiento
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    // Siguiente imagen
    function nextImage() {
        showImage(currentIndex + 1);
    }

    // Imagen anterior
    function prevImage() {
        showImage(currentIndex - 1);
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
