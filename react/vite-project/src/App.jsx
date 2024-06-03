import { Profile } from "./components/miPrimerComponente/MiPrimerComponente";

const myFuction = () => {
  return <>hola lol </>;
};
//props
function App() {
  return (
    <>
      <Profile name={"Akaashi"} lastName={"Keiji"} />
      <myFuction />
    </>
  );
}

export default App;
