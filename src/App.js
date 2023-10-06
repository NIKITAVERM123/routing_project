import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Form from './Component/Form';


const App = () => {
  return (
    <>
      <Router>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Form">Contect</Link>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;