import "./App.css";
import Login from "./component/Login";
import Nav from "./component/Nav";
import HomeBody from "./component/HomeBody";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeBody />
      <Login />
    </div>
  );
}

export default App;
