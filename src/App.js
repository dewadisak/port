import './App.css';
import './pages/Api.css'
import './pages/Contact.css'
import Home from './pages/Home';
import Api from './pages/Api';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/api" element={<Api />}/> 
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
     

    
     

    </div>

  );
}

export default App;
