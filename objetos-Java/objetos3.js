//Ejercicio práctico
//Tienen una función que recibe un objeto como parámetro.
//La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
//Por ejemplo, para el objeto { a: true, b: 42, c: false }
//la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
const objeto = { a: true, b: 42, c: false };
function getBooleanos(objeto) {
  const arr = [];

  for (const property in objeto) {
    console.log(objeto[property]);

    if (objeto[property] === false || objeto[property] === true) {
      arr.push(property);
    }
  }
  return arr;
}
console.log(getBooleanos(objeto));
