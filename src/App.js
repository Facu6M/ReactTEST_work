import './App.css';
import ContextApi from './Contexts/ContextApi';
import Header from './Components/Header';
import Products from './Components/Products';
import SearchProduct from './Components/SearchProduct';
import {BrowserRouter, Routes, Route, Link, To} from "react-router-dom";

function App() {
  return (
    <div className="img_background">


<BrowserRouter >


<Header/>
<ContextApi>
<Routes>

<Route path="/ReactTEST_work" element={<Products />}></Route>
<Route path="/Products" element={<Products />}></Route>
<Route path="/SearchProduct" element={<SearchProduct />}></Route>

</Routes>
</ContextApi>


</BrowserRouter>


    </div>
  );
}

export default App;
