import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import './App.css'
import Home from "./components/Home";
import Dashboard from "./components/utils/Dashboard";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Start from "./components/Start";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {  
  return (
    <Routes>
      <Route path="/start" element={<Start/>}/>
      <Route path="/adminlogin" element={<Login/>}/>
      <Route path="/employee_login" element={<EmployeeLogin/>}/>
      <Route path="/employee_detail/:id" element={<EmployeeDetail/>}/>
      <Route path="/dashboard" element={<Dashboard/>}>        
        <Route path="" element={<Home/>}/>
        <Route path="/dashboard/employee" element={<Employee/>}/>
        <Route path="/dashboard/category" element={<Category/>}/>
        <Route path="/dashboard/profile" element={<Profile/>}/>
        <Route path="/dashboard/add_category" element={<AddCategory/>}/>
        <Route path="/dashboard/add_employee" element={<AddEmployee/>}/>
        <Route path="/dashboard/edit_employee/:id" element={<EditEmployee/>}/>
      </Route>      
    </Routes>
  )
} 

export default App
