import {Routes, Route} from "react-router-dom";
import SharedLayout from "./components/utils/SharedLayout";
import Login from "./components/Login";
import './App.css'
import Dashboard from "./components/utils/Dashboard";


function App() {  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route path="/adminlogin" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>      
    </Routes>
  )
}

export default App
