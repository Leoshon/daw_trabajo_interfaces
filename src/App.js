import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Productos from './Productos';
import Contact from './Contact';
import { Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Productos />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
