const palabras = ["banana", "elefante", "zapato", "iguana"];

function terminanEnA(words) {
  const todasLasPalabras = words.every((word) => word.endsWith("a"));
  return todasLasPalabras;
}
console.log(terminanEnA(palabras));
//nos devuelve falso porque en todas las palabras solo hay dos que tiene 'a' al final.
