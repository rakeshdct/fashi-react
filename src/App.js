import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Shopdetails from './components/pages/Shopdetails';
import Favourites from './components/pages/Favourites';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Blogdetails from './components/pages/Blogdetails';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Faq from './components/pages/Faq';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Forgotpassword from './components/pages/Forgotpassword';
import Notfound from './components/pages/Notfound';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  let routes = (
    <Routes >
      <Route path='/' exact element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/shop-details' element={<Shopdetails />} />
      <Route path='/shop/favourites' element={<Favourites />} />      
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog/blog-details' element={<Blogdetails />} />
      <Route path='/shop/cart' element={<Cart />} />
      <Route path='/shop/checkout' element={<Checkout />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login/register' element={<Register />} />
      <Route path='/login/forgot-password' element={<Forgotpassword />} />           
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
