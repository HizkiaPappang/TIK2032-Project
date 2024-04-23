var images = document.querySelectorAll('.gallery-item img');
var zoomedImage = null;

function zoomImage(event) {
    var element = event.target;
    if (zoomedImage && zoomedImage !== element) {
        zoomedImage.style.transform = '';
        zoomedImage.style.zIndex = '0';
    }
    if (element.style.transform === 'scale(1.5)') {
        element.style.transform = '';
        element.style.zIndex = '0';
        zoomedImage = null;
    } else {
        element.style.transform = 'scale(1.5)';
        element.style.zIndex = '1000';
        zoomedImage = element;
    }
}

// Fungsi untuk efek hover
function hoverImage(event) {
    var element = event.target;
    if (element !== zoomedImage) {
        element.style.transform = 'scale(1.1)';
    }
}

function unhoverImage(event) {
    var element = event.target;
    if (element !== zoomedImage) {
        element.style.transform = '';
    }
}

// Tambahkan event listener ke setiap gambar
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', zoomImage);
    images[i].addEventListener('mouseover', hoverImage);
    images[i].addEventListener('mouseout', unhoverImage);
}
