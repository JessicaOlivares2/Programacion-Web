export function Post({ titulo, description, link, parrafo, style }) {
  return (
    <>
      <div className="centrar">
        <h2> {titulo} </h2>
      </div>
      <img
        src={link}
        alt={description}
        style={{ width: "300px", height: "auto" }}
      />
      <p className="centrar"> {parrafo} </p>
    </>
  );
}
