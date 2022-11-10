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

  document.body.style.zoom = zoom;
  console.log(zoom);
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

const observerCallback = (e) => {
  console.log(e);
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: [0.5],
});
sections.forEach((s) => observer.observe(s));

const fadeArray = [];
const elements = [
  ...document.querySelectorAll('div'),
  ...document.querySelectorAll('img'),
  ...document.querySelectorAll('video'),
];

elements.forEach((e) => {
  if (e.dataset.fade) fadeArray.push(e);
});
console.log(fadeArray);
