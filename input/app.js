// 1
// function funi () {
//   const chbox = document.getElementById('one');
//   if(chbox.checked) {
//     alert('Выбран')
//   } else {
//     alert('Не выбран')
//   }
// }


function fun1() {
  const radi = document.getElementsByName('r1');
  for(let i = 0; i < radi.length; i++) {
    if(radi[i].checked) {
      alert('Выбран ' + i + ' элемент');
    }
  }
}


