import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ApiContext } from "../Contexts/ContextApi";
import styles from "../styles/Products.css"

const Products = () => {
  const productos = useContext(ApiContext);

useEffect(() => {
    productos.map((prod) =>
    console.log(prod.images[0])
    )
})

  return (
    <main>
      {productos.map((producto) => (
        <div key={producto.id} className="card_container">
          <div className="card">
            <div className="img">
              <img id="imagen" src="https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/3b9b305a_3a3e.jpg" ></img>
            </div>

            <p>{producto.title}</p>

            <div className="price">
              <p className="left">${producto.price}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Products;
