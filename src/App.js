import Header from './views/header';
import Footer from './views/footer/footer';
import Home from './views/home/home';
import Shop from './views/shop/shop';
import Shopdetails from './views/shopdetails/shopdetails';
import Favourites from './views/favourites/favourites';
import Blog from './views/blog/blog';
import Contact from './views/contact/contact';
import Blogdetails from './views/blogdetails/blogdetails';
import Cart from './views/cart/cart';
import Checkout from './views/checkout/checkout';
import Faq from './views/faq/faq';
import Login from './views/login';
import Register from './views/register';
import Forgotpassword from './views/forgotpassword';
import Notfound from './views/notfound';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { headerSelector } from "./views/header-dux";

function App() {
  const { isLoggin } = useSelector(headerSelector);
  let routes = (
    <Routes >
      <Route path='/' exact element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/shop-details' element={<Shopdetails />} />
      <Route path='/shop/favourites' element={!isLoggin ? <Login /> : <Favourites />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog/blog-details' element={<Blogdetails />} />
      <Route path='/shop/cart' element={<Cart />} />
      <Route path='/shop/checkout' element={!isLoggin ? <Login /> : <Checkout />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/login' element={isLoggin ? <Home /> : <Login />} />
      <Route path='/login/register' element={isLoggin ? <Home /> : <Register />} />
      <Route path='/login/forgot-password' element={isLoggin ? <Home /> : <Forgotpassword />} />
      <Route path='*' element={<Notfound />} />
    </Routes >
  )
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;
