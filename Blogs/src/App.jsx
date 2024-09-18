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
      <div className="container ">
        <div className=" header-container letra2 " data-aos="zoom-in-up">
          <Header />
        </div>
      </div>

      <div className="centrar2"data-aos="zoom-in">
      <button onClick={handleLogin}>inicio sesión</button>
      <Footer />
      </div>
    
    <div className="grilla2" >
      <div className="borde letra " data-aos="flip-left">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/jkkk.jpg"}
          parrafo={"mi cantante favorito"}
        />
      </div>

      <div className=" borde letra" data-aos="flip-right">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/im1.jpg"}
          parrafo={"deje pasar el colectivo y no llego despues de 20 mn"}
        />
      </div>

      <div className="borde letra" data-aos="flip-right">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/im2.jpg"}
          parrafo={"fui abrigada para que hiciera calor, era ese"}
        />
      </div>

      <div className="borde letra" data-aos="flip-left">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/im3.jpg"}
          parrafo={"se me cayo una araña al lado mio"}
        />
      </div>

      <div className="borde letra" data-aos="flip-right">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/im4.jpg"}
          parrafo={"yo"}
        />
      </div>

      <div className="borde letra" data-aos="flip-right">
        <Post
          titulo={"Mi Blogs"}
          description={"yo a la night"}
          link={"./src/public/im5.jpg"}
          parrafo={"xc"}
        />
      </div>

    </div>
    </>
  );
}
