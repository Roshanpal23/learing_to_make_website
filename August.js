document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded');
    
    let currentIndex = 0;
    const images = document.querySelectorAll('.thumbnail img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const caption = document.getElementById('caption');

    function openLightbox(index) {
        currentIndex = index;
        lightbox.style.display = 'block';
        updateLightbox();
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateLightbox();
    }

    function updateLightbox() {
        lightboxImage.src = images[currentIndex].src;
        caption.innerHTML = images[currentIndex].alt;
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    document.querySelector('.close').addEventListener('click', closeLightbox);
    document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.next').addEventListener('click', () => changeImage(1));
});
