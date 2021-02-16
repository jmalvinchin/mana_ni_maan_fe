import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "../../routes/Routes"
import Nav from "../common/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
