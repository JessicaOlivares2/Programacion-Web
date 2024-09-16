import Header from "./components/Header";
import Footer from "./components/Footer";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import "./index.css"; // O la ruta correcta a tu archivo CSS

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      ///destructuracion
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };

    getSession();
  }, []);

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
      </div>

      <button onClick={handleLogin}>inicio sesión</button>
      <Footer />
      <div className="borde letra">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/jkkk.jpg"}
          parrafo={"mi cantante favorito"}
        />
      </div>
    </>
  );
}
