import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Episodios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  return (
    <div className="grilla">
      {data.map((capitulo) => (
        <div key={capitulo.id}>
          <h3>{capitulo.name}</h3>
          <p>Episode: {capitulo.episode}</p>
          <p>Air Date: {capitulo.air_date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
