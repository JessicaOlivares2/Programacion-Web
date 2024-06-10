//hooks -> useState

import { useEffect, useState } from "react";

//camelcase es la manera de escribir en la cual cada palabra nueva arranca con Mayuscula
export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };
  //ejemplo1
  //useEffect(() =>{
  //},[])

  //ejemplo2
  //el usesEffect se va a ejecutar la cantidad de veces que las dependencias  se actualicen
  //si no le pasan dependencias se ejecutara solo al principio de la app
  //en el primer render
  //si no se le pasa el array de dependencias siempre se va a ejecutar
  useEffect(() => {
    console.log("el contador se ha actualizado");
  }, [contador]);

  const arrayPersonaje = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div className="grilla2 ">
        {
          //cuando despues de la funcion flecha hay parentesis  significa que el return es implicito
          arrayPersonaje.map((personaje, i) => (
            <>
              <div key={i} className="borde">
                <h2>
                  fullName: {personaje.name}
                  {personaje.lastName} {""}
                </h2>
                <p>planet: {personaje.planet}</p>

                <img src={personaje.image} alt="imagen" />
              </div>
            </>
          ))
        }
      </div>
      <div className="avatar">
        <button onClick={handleClick}>Aumentar</button>
      </div>
      <p>{contador}</p>
    </>
  );
};
