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
function FixHeight() {
  const zoom = getWindowWidth() / 1920;
  const wheight = innerHeight;

  // if (zoom > 1.3333) {
  //     zoom = 1.333
  // } else {

  // }
  const h = innerHeight / zoom;

  document.body.style.zoom = 1;
  console.log(zoom);
}
function getWindowWidth() {
  if (window.innerWidth) {
    return window.innerWidth;
  } else {
    var B = document.body,
      D = window.documentElement;
    return Math.min(D.clientWidth, B.clientWidth);
  }
}
window.addEventListener('resize', () => {
  FixHeight();
});
FixHeight();
console.log(2);
