import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from './components/views/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Cart from './components/pages/Cart/Cart';
import SingleProduct from "./components/pages/SingleProduct/SingleProduct";
import OrderPage from './components/pages/OrderPage/OrderPage.js';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsRedux.js";



const App = () => {
  const dispatch = useDispatch();

  useEffect( 
    () => {
      dispatch(fetchProducts());
    }
  ,[dispatch] );

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={ <SingleProduct />} />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/order" element={ <OrderPage /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
