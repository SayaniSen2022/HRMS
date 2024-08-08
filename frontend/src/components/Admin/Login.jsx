import { useState } from "react";
import "../style.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[values, setValues] = useState({
        email: "",
        password: "",
    });

    const[error, setError] = useState();

    const navigate = useNavigate(null);
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus){
                localStorage.setItem("valid", true)
                navigate('/dashboard/admin-detail/'+result.data.id);
            }else{
                setError(result.data.Error)
            }
            })
        .catch(err => console.log(err));
    }

  return (
    <div className="loginPage">
        <div className="loginForm">
            <div className="pg-header">Login Page</div>
            <div className="error">
                {error && error}
            </div>
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

            </form>
        </div>
    </div>
    
  )
}

export default Login