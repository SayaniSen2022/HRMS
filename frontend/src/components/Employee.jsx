import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Employee = () => {
  const[employee, setEmployee] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/auth/employee")
    .then(result => {
      if(result.data.Status){
        setEmployee(result.data.Result)
      }else{
        alert(result.data.Error)
      }
    })
    .catch(err => console.log(err));
  },[])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete_employee/'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  }

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                employee.map(emp => (
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td><img src={`http://localhost:3000/images/`+emp.image} className="employee_image"/></td>
                    <td>{emp.email}</td>
                    <td>{emp.address}</td>
                    <td>{emp.salary}</td>
                    <td>
                      <Link to={`/dashboard/edit_employee/`+emp.id} className="btn btn-info btn-sm me-2">Edit</Link>
                      <Link className="btn btn-warning btn-sm" onClick={() => handleDelete(emp.id)}>Delete</Link>
                    </td>
                  </tr>
                ))
              }
              
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default Employee;
