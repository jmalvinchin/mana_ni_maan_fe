import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "../../routes/Routes"
import AuthProvider from "../../AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
