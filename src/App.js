import './App.css';
import { Home } from './pages/Home/Home';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import MenuPage from './pages/MenuPage/MenuPage';
import { Nav } from './components/Navbar/Nav';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <>
      <Router>
      <Nav />

        <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/order-page" element={<OrderPage />} /> 
        <Route path="/menu-page" element={<MenuPage />} /> 
        <Route path="/about-page" element={<AboutPage />} /> 
        <Route path="/contact-page" element={<ContactPage />} /> 


  

        </Routes>
        
      </Router>

        
    </>
  );
}

export default App;
