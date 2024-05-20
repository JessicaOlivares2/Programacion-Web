const ejemploArray = [1, 2, 3];
console.log(ejemploArray[1]);
//objetos
const persona = {
  name: "yo",
  age: 28,
  isWorking: true,
  cats: ["chivita", "tita", "lolo"],
  walk: function () {
    //si la funcion retorna void es que no devuelve nada, si no,aclara el tipo de dato
    console.log("eaaaa");
    //si la funcion no devuelve ningun valor undefined por default
    return "estoy cansado jr";
  },
};
//opcion1
console.log(persona.name);
//opcion2
console.log(persona["name"]);
console.log(persona.cats[1]);
//cuando estan mostrando/ejecutando una funcion no se pone los parentesis esta no va a funcionar
console.log(persona.walk());

//resignamos el valor de la propiedad age
persona.age = 20;
console.log(persona.age);
//delete borra las propiedades seleccionadas del objeto
delete persona.age;
