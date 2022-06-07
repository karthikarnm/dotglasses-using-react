import React from "react";

// import ReactDOM from "react-dom/client";
import './index.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product"
import About from "./pages/About";

import { BrowserRouter , Route, Routes} from 'react-router-dom';


function App (){
  return(
    <div>
       <NavBar/>
       <BrowserRouter>
      <Routes>
       
       
         <Route path="/" element={<Home/>} >
          </Route>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/About" element={<About/>} />
          
    
        
         </Routes>
       </BrowserRouter>
     <Footer />
    </div>
  );

}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
