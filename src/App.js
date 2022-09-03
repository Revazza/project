import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import EmployeeInfo from "./components/EmpInfo/EmployeeInfo";

import Main from "./components/Main";
import LaptopFeatures from "./components/LaptopFeatures/LaptopFeatures";

import Thank from "./components/Thank/Thank";
import LaptopList from "./components/LaptopList/LaptopList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="add-note" element={<Main />}>
          <Route path="emp-info" element={<EmployeeInfo />} />
          <Route path="laptop-features" element={<LaptopFeatures />} />
        </Route>
        <Route path="thank-page" element={<Thank />} />
        <Route path="laptop-list" element={<LaptopList />} />
      </Routes>
    </div>
  );
}

export default App;
