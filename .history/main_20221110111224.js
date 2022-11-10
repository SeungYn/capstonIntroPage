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
  var zoom = getWindowWidth() / 1920;
  var wheight = innerHeight;
  console.log(2560 / zoom);
  // if (zoom > 1.3333) {
  //     zoom = 1.333
  // } else {

  // }
  var h = innerHeight / zoom;
  console.log(h);
  if (h < 1080) {
    //$('.part1 .center').css({ height: h });
  } else {
    //$('.part1 .center').css({ height: 1080 + 'px' });
  }
  //$('.wapper').css({ zoom: zoom });
  document.body.style.zoom = zoom;
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
