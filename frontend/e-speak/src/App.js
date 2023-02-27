import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeBody from "./component/HomeBody";
import Login from "./component/Login";
import Nav from "./component/Nav";
import AboutUs from "./component/AboutUs";
//import HomeBody from "./component/HomeBody";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HomeBody />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
