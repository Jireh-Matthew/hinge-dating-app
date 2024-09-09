
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('imageGallery');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<div class="modal-content"></div>';
    document.body.appendChild(modal);

    if (gallery) {
        const images = gallery.getElementsByTagName('img');

        for (const image of images) {
            image.addEventListener('click', function () {
                const modalContent = modal.querySelector('.modal-content');
                modalContent.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
                modal.style.display = 'flex';
            });
        }
    }

    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});


