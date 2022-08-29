import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import EmployeeInfo from "./components/EmpInfo/EmployeeInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/emp-info" element={<EmployeeInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
