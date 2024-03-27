import "./Appnew.css"
import {Link, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About page/About';
import Menu from "./components/Menu/Menu";
import BookingPage from "./components/BookingPage/BookingForm";
import OrderOnline from "./components/Order Online/OrderOnline";
import Login from "./components/Login/login";

function App() {
  return (
    <div className='App'>
      <nav className="nav" >
        <img src={require("./components/Main/Logo.svg").default} alt="Restaurant Logo" class="logo"/>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/bookingPage" className="nav-item">Booking Page</Link>
        <Link to="/orderOnline" className="nav-item">Order Online</Link>
        <Link to="/login" className="nav-item">Login</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/bookingPage" element={<BookingPage/>}/>
        <Route path="/orderOnline" element={<OrderOnline/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
   </div>
  );
}
export default App;
