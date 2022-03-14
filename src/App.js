import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Layout/>} >
        <Route index element = {<Home/>}/>
        <Route path = 'products' element = {<Products/>}/>
        <Route path = 'products/:id' element = {<ProductDetail/>}/>  
        <Route path = 'cart' element = {<Cart/>}/>         
          
          {/* hay algunos cambio en la version 6 de react router dom */}          
      </Route>  
      <Route path = '*' element = {<NotFound/>}></Route>          
    </Routes>
  );
}

export default App;

