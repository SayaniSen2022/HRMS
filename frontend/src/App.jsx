import {Routes, Route} from "react-router-dom";
import SharedLayout from "./components/utils/SharedLayout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/utils/Home";
import './App.css'


function App() {  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/adminlogin" element={<Login/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/>  
      </Route>       
    </Routes>
  )
}

export default App
