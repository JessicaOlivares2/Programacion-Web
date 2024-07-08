import { useEffect } from "react";
import { useState } from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import "ed-grid";
//import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RickAndMorty() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  function handleClick() {
    navigate("/character");
  }

  return (
    <>
      <div className="grilla">
        {data.map((personaje) => (
          <>
            <div className="borde ">
              <p>nombre {personaje.name}</p>
              <p>id: {personaje.id}</p>
              <p>status: {personaje.status}</p>
              <img src={personaje.image} alt="" onClick={handleClick} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
