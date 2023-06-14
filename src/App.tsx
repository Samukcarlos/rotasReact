import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import Subscription from './routes/Home/Subscription';
import HomeBody from './routes/Home/HomeBory';
import Computers from './routes/Home/Products/Bory/Computer';
import Eletrônicos from './routes/Home/Products/Bory/Eletrônicos';
import Livros from './routes/Home/Products/Bory/Livros';

import Products from './routes/Home/Products/Bory';
import Nothing from './routes/Home/NothingHere';

function App(){
 
  return (
    <BrowserRouter>
      <Routes>    
        <Route path='/'element={<Home />} >
          <Route index element={<Navigate to="/home"/>} />
          <Route path="*" element={<Nothing />} />
          <Route path="home" element={<HomeBody />} />         
          <Route path="subscription" element={<Subscription/>} />                 
          <Route path="Products" element={<Products/>}>              
            <Route path="computers" element={<Computers />} />
            <Route path="eletronicos" element={<Eletrônicos />} />
            <Route path="livros" element={<Livros/>} /> 
            </Route> 
        </Route>            
                            
      </Routes>
   
    </BrowserRouter>
   
  );
}

export default App
