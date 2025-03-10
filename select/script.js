// function fruit() {
//   let sel = document.getElementById('mySelect').selectedIndex;
//   let options = document.getElementById('mySelect').options;
//   alert('Выбрана опция ' +options[sel].text);
// }

function rangeFunc () {
  let rng = document.getElementById('range');
  // let p = document.getElementById('p');
  // let t = document.getElementById('text');
  let div = document.getElementById('test');
  // p.innerHTML = rng.value;
  // t.value = rng.value;
  div.style.width = rng.value + 'px';
  div.style.height = rng.value + 'px';

}
