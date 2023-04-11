import React from 'react'
import { useState } from 'react';
import { useContext } from "react";
import { ApiContext } from "../Contexts/ContextApi";
import styles from "../styles/Products.css"

const SearchProduct = () => {

  const productos = useContext(ApiContext);

  let [arrayy, setArrayy] = useState([])

  function busquedaProductos(e){
    const busqueda = e.target.value
    if(busqueda.length == 0){
     console.log("put something")
     setArrayy([])
    } else {
    const arrayCopia = [...productos]
    const palabra = arrayCopia.filter(p => p.title.includes(busqueda))
    setArrayy(palabra)
    console.log(busqueda.length)

    }
}

  return (
    <>



    <h1>Here you have can search all the PRODUCTS available</h1>

    <form onChange={busquedaProductos}>
    <input placeholder='search the clothes'></input>
    </form>

    <main>
{
    arrayy.length ?
    arrayy.map(producto => (
    <div key={producto.id} className="card_container">
    <div className="card" >
      <div className="img" >
        <img
          id="imagen"
          src="https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/3b9b305a_3a3e.jpg"
          alt=""
        ></img>

      </div>


      <p>{producto.title}</p>

      <div className="price">
        <p className="right">{producto.price}</p>
      </div>


      </div>
      </div>
))
    :
    <h3>Put a name that matches any item</h3>
}

</main>

</>
  )
}

export default SearchProduct