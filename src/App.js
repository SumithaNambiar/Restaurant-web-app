import "./Appnew.css"
import Home from './components/Home/Home';
import About from './components/About page/About';
import Menu from "./components/Menu/Menu";
import {Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className="nav" >
        <img src={require("./components/Home/Logo.svg").default} alt="Restaurant Logo" class="logo"/>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/bookingPage" className="nav-item">Booking Page</Link>
        <Link to="/orderOnline" className="nav-item">Order Online</Link>
        <Link to="/login" className="nav-item">Login</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/bookingPage" element={<Menu/>}/>
        <Route path="/orderOnline" element={<Menu/>}/>
        <Route path="/login" element={<Menu/>}/>

      </Routes>
   </div>
  );
}
export default App;
