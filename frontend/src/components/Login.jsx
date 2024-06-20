import { useState } from "react";
import "./style.css";
import axios from "axios"

const Login = () => {
    const[values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

  return (
    <div className="loginPage">
        <div className="loginForm">
            <div className="pg-header">Login Page</div>
            <form onSubmit={handleSubmit}>
                <div className="input-grp">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter email" onChange={(e)=>setValues({...values, email: e.target.value})} />
                </div>
                <div className="input-grp">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" onChange={(e)=>setValues({...values, password: e.target.value})} />
                </div>
                <button className="submit-btn">Login</button>
                <div className="input-grp-chck">
                    <input type="checkbox" name="tick" id="tickmark" placeholder="Enter password" />
                    <label htmlFor="tickmark">I Agree to the Terms & Conditions.</label>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default Login