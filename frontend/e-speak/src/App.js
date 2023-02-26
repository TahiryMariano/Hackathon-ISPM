import "./App.css";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="home_body">
        <h1>Let's learn foreign language</h1>
        <button>Get started</button>
      </div>
    </div>
  );
}

export default App;
