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

window.addEventListener('resize', () => {
  console.log(123);
});
FixHeight();
console.log(2);
