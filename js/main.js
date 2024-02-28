var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8,
    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4.50,
        },
      },
});

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    licenseKey: 'your_license_key',
    speed: 500,
});