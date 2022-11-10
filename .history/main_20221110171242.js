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

const observerCallback = (e) => {
  if (e[0].target == sections[0] && e[0].isIntersecting) {
    console.log(e[0].target.childNodes);
  } else if (e[0].target == sections[0] && !e[0].isIntersecting) {
  }
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: [0.2],
});
sections.forEach((s) => observer.observe(s));
