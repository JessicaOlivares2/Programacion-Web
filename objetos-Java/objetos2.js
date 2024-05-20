//Ejercicios:

//1- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};
const { weight = 70, height = 180 } = person;
console.log(weight, height);
//respuesta: nos devuelve el height y el weight porque esta destructurado pero le asignamos un valor.

//2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?

const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person;
console.log(age);
//respuesta: nos devuelve error porque no esta definido age

//3- ¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?

//respuesta:se llama desestructuracion y nos sirve cuando tenemos muchas cosas
