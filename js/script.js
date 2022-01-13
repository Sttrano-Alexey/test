const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const onScrollHeader = () => {
    const header = document.querySelector('.header')
    let prevScroll = window.pageYOffset
    let currentScroll
    window.addEventListener('scroll', () => { 
      currentScroll = window.pageYOffset
      const headerHidden = () => header.classList.contains('_hide') 
      if (currentScroll > prevScroll && !headerHidden()) { 
        header.classList.add('_hide') 
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove('_hide') 
      }
      prevScroll = currentScroll 
    })
  }
  onScrollHeader()
});

let time = 1800;
const timer = document.getElementById("timer")
setInterval(updateTime, 1000);
function updateTime () {
  if(time == 0){
    return
  };
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${minutes}:${seconds}`;
  time--;
}

window.onscroll = function scroll(e){
  let scroll = window.pageYOffset;
  scroll = Math.round(scroll);
  if(scroll > 800){
    document.querySelector(".composition__item_left").classList.add("_active")
    document.querySelector(".composition__item_right").classList.add("_active")
    document.querySelector(".composition__product").classList.add("_active")
    document.querySelector(".composition__btn").classList.add("_active")
  };
  if(scroll > 1400){
    document.querySelector(".reviews").classList.add("_active")
  };
  if(scroll > 2300){
    document.querySelector(".description__content").classList.add("_active")
    document.querySelector(".description").classList.add("_active")
    document.querySelector(".description__BG").classList.add("_active")
  };
  if(scroll > 3000){
    document.querySelector(".order").classList.add("_active")
    document.querySelector(".order__image").classList.add("_active")
  };
}


const input = document.getElementById('only_num');

input.addEventListener('keydown', function(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
    (event.keyCode == 65 && event.ctrlKey === true) ||
    (event.keyCode >= 35 && event.keyCode <= 39)) {
    return;
  } else {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
      event.preventDefault();
    }
  }
});

function popup_1() {
  document.querySelector(".popup_1").classList.add("_active");
  document.querySelector(".popup_2").classList.remove("_active");
}
function popup_2() {
  document.querySelector(".popup_2").classList.add("_active");
  document.querySelector(".popup_1").classList.remove("_active");
}