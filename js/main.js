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



let main_btns = document.querySelectorAll('.main_btns label');

main_btns.forEach(item => {
  item.addEventListener('click', () => {
    checkRadio()
  })
})

checkRadio();


function checkRadio() {
  main_btns.forEach(item => {

    let input = item.querySelector('input')
    if(input.checked) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}


let option_card = document.querySelectorAll('.option_cards label');

option_card.forEach(item2 => {
  item2.addEventListener('click', () => {
    checkOption()
  })
})

checkOption();


function checkOption() {
  option_card.forEach(item2 => {

    let input = item2.querySelector('input')
    if(input.checked) {
      item2.classList.add('active')
    } else {
      item2.classList.remove('active')
    }
  })
}

let modal_main = document.querySelector('.modal_main');
let modal_bg = document.querySelector('.modal_bg');
let left_btn = document.querySelector('.left_btn');
let modal_fine = document.querySelector('.modal_fine');
let modal_fine_btn = document.querySelector('.modal_fine_btn');
let notification_two_btn = document.querySelector('.notification_two_btn');
let modal_close = document.querySelector('.modal_close');
let modal_close_btn = document.querySelector('.modal_close_btn');
let notification_one_btn = document.querySelector('.notification_one_btn') 

// let notification_one_btn = document.querySelectorAll('.notification_one_btn') 


// notification_one_btn.forEach((btn, btnIndex) => {
//   btn.onclick = () => {
//     modal_main.classList.toggle('active')
//   }
// })

notification_one_btn.addEventListener('click', () => {
  modal_main.classList.toggle('active')
  modal_bg.classList.toggle('active')
})

modal_bg.addEventListener('click', () => {
  modal_bg.classList.remove('active')
  modal_main.classList.remove('active')
})

left_btn.addEventListener('click', () => {
  modal_fine.classList.add('active')
  modal_main.classList.remove('active')
  modal_bg.classList.add('active')
})

modal_fine_btn.addEventListener('click', () => {
  modal_fine.classList.remove('active')
  modal_bg.classList.remove('active')
})

notification_two_btn.addEventListener('click', () => {
  modal_close.classList.add('active')
  modal_bg.classList.add('active')
})

modal_close_btn.addEventListener('click', () => {
  modal_bg.classList.remove('active')
  modal_close.classList.remove('active')
})


let list_btn = document.querySelectorAll('.list_btn')
let list_content = document.querySelectorAll('.list_content')
  list_btn.forEach((button, idx) => {
  button.addEventListener('click', function () {
    list_content[idx].classList.toggle('active')
    button.classList.toggle('active')   
  });
});

let btn1 = document.querySelectorAll('.notification_one_btn');
let notification_el = document.querySelector('.bottom_notification');

document.addEventListener('scroll', function () {
  let scroll_top = btn1[1].getBoundingClientRect().top - window.innerHeight;
  let scroll_top2 = btn1[2].getBoundingClientRect().top - window.innerHeight;

  if (scroll_top < 0 && scroll_top > (-1) * window.innerHeight || scroll_top2 < 0 && scroll_top2 > (-1) * window.innerHeight) {
    notification_el.style.display = 'none';
  } else {
    notification_el.style.display = 'block';
  }
})