import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


const AddCategory = () => {
const[category, setCategory] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/add_category", {category})
    .then(result => {
        if(result.data.Status){
            navigate('/dashboard/category')
        }else{
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err));
}

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
        <div className="p-3 rounded w-25 border">
            <div className="pg-header">Add Category</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" id="category" className="form-control rounded-0" placeholder="Enter category" onChange={(e)=>setCategory(e.target.value)} />
                </div>
                <button className="btn btn-success w-100 rounded-0 mb-2">Add Category</button>

            </form>
        </div>
    </div>
  )
}

export default AddCategory