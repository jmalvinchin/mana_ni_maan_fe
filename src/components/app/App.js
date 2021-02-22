import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "../../routes/Routes"
import Nav from "../common/Nav"
import AuthProvider from "../../AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Nav />
          <Routes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
