// alert(
//   '네이버앱, Edge로 접속하시면 동영상이 안 나옵니다. 일부 아이폰은 UI가 제대로 반영되지 않을 수 있습니다. 크롬, 사파리로 접속하시길 바랍니다.'
// );

window.addEventListener(
  'wheel',
  (event) => {
    const { ctrlKey } = event;
    if (ctrlKey) {
      event.preventDefault();
      return;
    }
  },
  { passive: false }
);
//확대 축소 막기
function fixHeight() {
  const zoom = getWindowWidth() / 1920;
  console.log(`windowWidth : ${getWindowWidth()}`);
  console.log(`zoom : ${zoom}`);
  document.body.style.zoom = zoom;
  //document.body.style.transform = `scale(${zoom})`;
}
function getWindowWidth() {
  if (window.innerWidth) {
    return window.innerWidth;
  } else {
    const B = document.body,
      D = window.documentElement;
    return Math.min(D.clientWidth, B.clientWidth);
  }
}
window.addEventListener('resize', () => {
  fixHeight();
});
fixHeight();

//IntersectionObserver
const sectionIds = ['#map', '#party', '#chat'];
const sections = sectionIds.map((i) => document.querySelector(i));
console.log(sections);

// map part
// const mapHeader = document.querySelector('.map__header');
// const mapHomeImg = document.querySelector('.map-homeImg');
// const mapHomeImgBubble = document.querySelector('.map__leftBubble');
// const mapVideo = document.querySelector('.map-video');
// const mapVideoBubble = document.querySelector('.map--video-buble');

const fadeArray = [];
const elements = [
  ...document.querySelectorAll('header'),
  ...document.querySelectorAll('div'),
  ...document.querySelectorAll('img'),
  ...document.querySelectorAll('video'),
];

elements.forEach((e) => {
  if (e.dataset.fade) fadeArray.push(e);
});
console.log(fadeArray);

//0.2 0.5 1로 나누어서 크기 별로 나누어서 나타내는 함수 이것은 살짝 오류가 있음 천천히 스크롤해야 나타남
const observerCallback2 = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      console.log(e.intersectionRatio);
      console.log(e);
      if (0 <= e.intersectionRatio && e.intersectionRatio < 0.3) {
        if (e.target.matches('img')) {
          e.target.classList.add('left-fade-in');
        } else if (e.target.matches('video')) {
          e.target.classList.add('right-fade-in');
        }
      } else if (0.3 <= e.intersectionRatio && e.intersectionRatio < 0.9) {
        if (e.target.matches('div')) {
          if (e.target.dataset['fade'] === 'right') {
            e.target.classList.add('right-fade-in');
          } else {
            e.target.classList.add('left-fade-in');
          }
        }
      } else if (e.intersectionRatio >= 0.9) {
        if (e.target.matches('header')) {
          e.target.classList.add('up-fade-in');
        }
      }
    }
  });
};

//그냥 보이면 모든지 나타나는 버전
const observerCallback = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.matches('img')) {
        e.target.classList.add('left-fade-in');
      } else if (e.target.matches('video')) {
        e.target.classList.add('right-fade-in');
      }
      if (e.target.matches('div')) {
        if (e.target.dataset['fade'] === 'right') {
          e.target.classList.add('right-fade-in');
        } else {
          e.target.classList.add('left-fade-in');
        }
      }
      if (e.intersectionRatio >= 0.9) {
        if (e.target.matches('header')) {
          e.target.classList.add('up-fade-in');
        }
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: [0.2, 0.5, 1],
});
fadeArray.forEach((s) => observer.observe(s));

// 혼밥메이트 바로가기 버튼
const solobobBtn = document.querySelector('.play-btn');
solobobBtn.addEventListener('click', () => {
  location.href = 'https://seungyn.github.io/capstonClientBySpring/';
});

//슬라이더
// const swiper = new Swiper('.swiper-container', {
//   loop: true,
//   centeredSlides: true,
//   slidesPerView: '2',
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 5,
//     depth: 100,
//     slideShadows: false,
//     // modifier:1,
//     // stretch: 50
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
// });

console.log(document.html);
