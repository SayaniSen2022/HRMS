import {useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditAdmin = () => {
  const { id } = useParams();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  useEffect(() => {
      axios.get("http://localhost:3000/auth/admin/"+id)
      .then( result => {
        console.log(result.data);
        setAdmin({
            ...admin,
            email: result.data.Result[0].email,
            password: result.data.Result[0].password,
        })
      })
      .catch(err => console.log(err));
      
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/auth/edit_admin/'+id, admin)
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard')
        } else {
            alert(result.data.Error)
        }
    }).catch(err => console.log(err))
}
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
    <div className="p-3 rounded w-25 border">
      <div className="pg-header">Edit Admin</div>
      <form className="row g-1" onSubmit={handleSubmit}>

        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="inputEmail"
            id="inputEmail"
            className="form-control rounded-0"
            placeholder="Enter Email"
            autoComplete="off"
            value={admin.email}
            onChange={(e) =>
              setAdmin({ ...admin, email: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="inputPassword"
            id="inputPassword"
            className="form-control rounded-0"
            placeholder="Enter Password"
            autoComplete="off"
            value={admin.password}
            onChange={(e) =>
              setAdmin({ ...admin, password: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100 rounded-2 mb-2">
              Edit Admin Details
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EditAdmin