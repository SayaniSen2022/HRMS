
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "../style.css";

const Profile = () => {
    const[admin, setAdmin] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:3000/auth/admin-detail/'+id)
        .then(result => {
          console.log(result.data)
          setAdmin(result.data[0]);
            localStorage.setItem("loggedInAdmin", JSON.stringify(result.data[0])) //storing the logged-in admin data
        })
        .catch(err=>console.log(err))

        console.log(admin)
    },[])


  return (
    <div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
            <div className="d-flex flex-column align-items-center mt-2">
                <p>Name: {admin.name}</p>
                <p>Email: {admin.email}</p>
            </div>
        </div>
        {/* <h1>Profile</h1> */}
    </div>
  )
}

export default Profile
