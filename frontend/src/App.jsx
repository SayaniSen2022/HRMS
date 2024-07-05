import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import './App.css'
import Home from "./components/Home";
import Dashboard from "./components/utils/Dashboard";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import LeavePortal from "./components/LeavePortal";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Start from "./components/Start";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeDetail from "./components/EmployeeDetail";
import LeaveDashboard from "./components/LeaveDashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import {EmployeePvtRoute} from "./components/EmployeePvtRoute"
import EmpDashboard from "./components/EmpDashboard";
import EditAdmin from "./components/EditAdmin";
import Error from "./components/Error";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/adminlogin" element={<Login/>}/>
      <Route path="/employee_login" element={<EmployeeLogin/>}/>

      <Route path="/emp_dashboard" element={<EmployeePvtRoute><EmpDashboard/></EmployeePvtRoute>}>
        <Route path="/emp_dashboard/detail/:id" element={<EmployeeDetail/>}/>
        <Route path="/emp_dashboard/leave_appl" element={<LeaveDashboard/>}/>
      </Route>
      
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>        
        <Route path="" element={<Home/>}/>
        <Route path="/dashboard/employee" element={<Employee/>}/>
        <Route path="/dashboard/category" element={<Category/>}/>
        <Route path="/dashboard/profile" element={<Profile/>}/>
        <Route path="/dashboard/leave_portal" element={<LeavePortal/>}/>
        <Route path="/dashboard/add_category" element={<AddCategory/>}/>
        <Route path="/dashboard/add_employee" element={<AddEmployee/>}/>
        <Route path="/dashboard/edit_employee/:id" element={<EditEmployee/>}/>
        <Route path="/dashboard/edit_admin/:id" element={<EditAdmin/>}/>
      </Route>
      <Route path="*" element={<Error/>} />      
    </Routes>
  )
} 

export default App