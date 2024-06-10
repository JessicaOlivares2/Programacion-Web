export function Profile({ name, lastName }) {
  return (
    <>
      <div className="avatar">
        <img src="./img/minovio.jpeg" alt="mi bff" />
      </div>
      el nombre de este es {name} {lastName}
    </>
  );
}
