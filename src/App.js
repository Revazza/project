import './App.css';
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Welcome />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
