import {Routes, Route} from "react-router-dom";
import Login from "./components/Admin/Login";
import './App.css'
import Home from "./components/Admin/Home";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Admin/Employee";
import Category from "./components/Admin/Category";
import Profile from "./components/Admin/Profile";
import LeavePortal from "./components/Admin/LeavePortal";
import AddCategory from "./components/Admin/AddCategory";
import AddEmployee from "./components/Admin/AddEmployee";
import EditEmployee from "./components/Admin/EditEmployee";
import Start from "./components/Start";
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import EmployeeDetail from "./components/Employee/EmployeeDetail";
import LeaveDashboard from "./components/Employee/LeaveDashboard";
import { PrivateRoute } from "./components/Admin/PrivateRoute";
import {EmployeePvtRoute} from "./components/Employee/EmployeePvtRoute"
import EmpDashboard from "./components/EmpDashboard";
import EditAdmin from "./components/Admin/EditAdmin";
import Error from "./components/Error";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/adminlogin" element={<Login/>}/>
      <Route path="/employee_login" element={<EmployeeLogin/>}/>

      <Route path="/emp_dashboard" element={<EmployeePvtRoute><EmpDashboard/></EmployeePvtRoute>}>
        <Route path="/emp_dashboard/detail/:id" element={<EmployeeDetail/>}/>
        <Route path="/emp_dashboard/leave_dashboard" element={<LeaveDashboard/>}/>
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