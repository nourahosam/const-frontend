import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AdminPage from './Components/Homepage/AdminPage';
import InsertEmployee from './Components/Employee/InsertEmployee';
import ViewEmployees from './Components/Employee/ViewEmployees';
import InsertVehicles from './Components/Vehicles/InsertVehicles';
import ViewVehicles from './Components/Vehicles/ViewVehicles';
import Header from './commons/Header';
import AddEmpToVehicle from './Components/Vehicles/AddEmpToVehicle';
// import InsertVehicles from './Components/Vehicles/InsertVehicles';
// import ViewEmp from './Components/Employee/ViewEmployees';
// import ViewVehicles from './Components/Vehicles/ViewVehicles';


function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Add-New-Employee" element={<InsertEmployee />} />
        <Route path="/Add-New-Vehicle" element={<InsertVehicles />} />
        <Route path="/View-Employees" element={<ViewEmployees />} />
        <Route path="/View-Vehicles" element={<ViewVehicles />} />
        <Route path="/Add-Vehicle-Employee" element={<AddEmpToVehicle />}/>
        <Route path="/Admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
    FOOTER
    </>
  );
}

export default App;
