let form = document.querySelector('form');

form.addEventListener('submit', function (event) { event.preventDefault(); addNumber() });

function addNumber() {
  let var1 = document.querySelector('.input_number_first').value;
  let var2 = document.querySelector('.input_number_second').value;
  let arrayVar1 = var1.split('');
  let arrayVar2 = var2.split('');
  let res = [];

  let decimal = 0;
  let long;
  let short;



  if (arrayVar1.length <= arrayVar2.length) {
    short = arrayVar1.length;
    long = arrayVar2.length;
    arrayVar1 = addZeros(long, short, arrayVar1);
  } else {
    short = arrayVar2.length;
    long = arrayVar1.length;
    arrayVar2 = addZeros(long, short, arrayVar2);
  }


  function addZeros(long, short, arrayVar) {
    let zeroArray = [];
    for (let i = long - short; i > 0; i--) {
      zeroArray = zeroArray.concat('0');
    }
    arrayVar = arrayVar.reverse()
    arrayVar = arrayVar.concat(zeroArray);
    arrayVar = arrayVar.reverse();
    return arrayVar;
  }



  for (let i = long - 1; i >= 0; i--) {
    let sum = +arrayVar1[i] + +arrayVar2[i] + decimal;
    sum = String(sum);
    if (sum.length > 1) {
      res = res.concat(sum[sum.length - 1]);
      decimal = +sum[sum.length - 2];
    } else {
      res = res.concat(sum[sum.length - 1]);
      decimal = 0;
    }
  }
  if (decimal > 0) {
    res = res.concat(1);
  }



  const resReverse = res.reverse();

  const result = resReverse.join('');
  document.querySelector('.result').textContent = result;
}
