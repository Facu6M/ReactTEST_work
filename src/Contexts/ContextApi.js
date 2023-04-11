import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ContextApi = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000')
    .then(response => response.json())
   .then(json => setProducts(json))


}, [])



  return <ApiContext.Provider value={products}>
    {children}
    </ApiContext.Provider>;
};

export default ContextApi;