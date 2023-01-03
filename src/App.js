import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Notfound from './components/pages/Notfound';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  let routes = (
    <Routes >
      <Route path='/' exact element={<Home />} />
      <Route path='/contact' element={<Contact />} />
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
