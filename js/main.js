var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8,
    breakpoints: {
        320: {
          slidesPerView: 1.65,
        },
        768: {
          slidesPerView: 3.65,
        },
        1024: {
          slidesPerView: 4.65,
        },
      },
});

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    licenseKey: 'your_license_key',
    speed: 500,
});