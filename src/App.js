import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Productos from './Productos';
import Contact from './Contact';


function App() {
  let component
  switch (window.location.pathname) {
    case "/home":
      component = <Home/>;
      break;
    case "/about":
      component = <About/>;
      break;
    case "/products":
      component = <Productos/>;
      break;
    case "/contact":
      component = <Contact/>;
      break;
  
    default:
      break;
  }

  return (
    <>
    <Navbar />
    <div className="container">
    {component}
    </div>
    </>
  );
}

export default App;
