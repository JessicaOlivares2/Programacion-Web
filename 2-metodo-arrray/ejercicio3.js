const lista = [1, 2, 4, 5, 5, 6, 6, 7];
let suma = 0;
let i = 0;
function sumarPares(numeros) {
  while (i < numeros.length) {
    if (numeros[i] % 2 == 0) {
      suma = suma + numeros[i];
    }
    i++;
  }
  return suma;
}
console.log(sumarPares(lista));

//for
function sumarPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      suma = suma + numeros[i];
    }
  }
  return suma;
}
console.log(sumarPares(lista));

////foreach
//array.forEach(element) => {
//    console.log(element);
//};
