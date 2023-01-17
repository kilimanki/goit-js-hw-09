const startBTn = document.querySelector('[data-start]');
const stopBTn = document.querySelector('[data-stop');
let timerId = null;
startBTn.addEventListener('click', e => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBTn.setAttribute('disabled', 'disabled');
  stopBTn.removeAttribute('disabled');
});
stopBTn.addEventListener('click', () => {
  stopBTn.setAttribute('disabled', 'disabled');
  startBTn.removeAttribute('disabled');
  clearInterval(timerId);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// 123
