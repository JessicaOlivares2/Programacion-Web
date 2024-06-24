import { useEffect } from "react";
import { useState } from "react";

export default function RickAndMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  return (
    <>
      <div className=" grilla2">
        {data.map((personaje) => (
          <>
            <div className="borde">
              <p>nombre {personaje.name}</p>
              <p>id: {personaje.id}</p>
              <p>status: {personaje.status}</p>
              <img src={personaje.image} alt="" />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
