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

lightGallery(document.getElementById('lightgallerytwo'), {
    plugins: [lgZoom],
    licenseKey: 'your_license_key',
    speed: 500,
});


let header_under_btn = document.querySelector('.header_under_btn');
let header_under_content = document.querySelector('.header_under_content');

header_under_btn.addEventListener('click', () => {
  header_under_content.classList.toggle('active')
  header_under_btn.classList.toggle('active')
})