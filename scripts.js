const minimum = document.querySelector('#min');
const maximum = document.querySelector('#max');
const p = document.querySelector('p');
const root = document.querySelector(':root');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const number = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  p.innerText = number;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const minValue = minimum.value;
  const maxValue = maximum.value;
  getRandomIntInclusive(minValue, maxValue);
});

document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    root.style.setProperty('--font-color', `${event.target.value}`);
  });
