export function Post({ titulo, description, link, parrafo, style }) {
  return (
    <>
      <div className="centrar caja">
        <h2> {titulo} </h2>
      </div>
      <div className="centrar" >
      <img 
        src={link}
        alt={description}
        style={{ width: "220px", height: "auto" }}
      />
      </div>
      <p className="centrar"> {parrafo} </p>
    </>
  );
}
