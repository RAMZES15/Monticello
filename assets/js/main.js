'use strict'

const swiper = new Swiper('#swiper1', {
    // Optional parameters
    spaceBetween: 30,
    direction: 'vertical',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
    }
});

const swiperNews = new Swiper('#swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

function scrol(section){
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

document.getElementById('scrol1').addEventListener('click', function() {
  scrol(about);
});
document.getElementById('scrol0').addEventListener('click', function() {
  scrol(about);
});
document.getElementById('scrol2').addEventListener('click', function() {
  scrol(prj);
});
document.getElementById('scrol3').addEventListener('click', function() {
  scrol(news);
});
document.getElementById('scrol4').addEventListener('click', function() {
  scrol(cont);
});


