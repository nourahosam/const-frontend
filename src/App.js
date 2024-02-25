import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import InsertEmployee from './Components/Employee/InsertEmployee';
import ViewEmployees from './Components/Employee/ViewEmployees';
import InsertVehicles from './Components/Vehicles/InsertVehicles';
import ViewVehicles from './Components/Vehicles/ViewVehicles';
// import InsertVehicles from './Components/Vehicles/InsertVehicles';
// import ViewEmp from './Components/Employee/ViewEmployees';
// import ViewVehicles from './Components/Vehicles/ViewVehicles';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Add-New-Employee" element={<InsertEmployee />} />
        <Route path="/Add-New-Vehicle" element={<InsertVehicles />} />
        <Route path="/View-Employees" element={<ViewEmployees />} />
        <Route path="/View-Vehicles" element={<ViewVehicles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
