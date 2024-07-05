
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import "../style.css";

const EmployeeDetail = () => {
    const[employee, setEmployee] = useState([])
    const {id} = useParams();
    // const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0]);
        })
        .catch(err=>console.log(err))
    },[])

    // const handleLogout = () => {
    //     axios.get("http://localhost:3000/employee/logout").then((result) => {
    //         if (result.data.Status) {
    //             localStorage.removeItem("valid")
    //           navigate("/");
    //         }
    //       });
    // }


  return (
    <div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
            <img src={`http://localhost:3000/images/`+employee.image} className="emp_det_image" />
            <div className="d-flex flex-column align-items-center mt-2">
                <p>Name: {employee.name}</p>
                <p>Email: {employee.email}</p>
                <p>Salary: {employee.salary}</p>
            </div>
            <Link className="btn btn-primary btn-sm me-2">Edit</Link>

        </div>
    </div>
  )
}

export default EmployeeDetail
