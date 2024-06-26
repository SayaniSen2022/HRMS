import { useNavigate } from "react-router-dom"

const Start = () => {
    const navigate = useNavigate();
  return (
    <div className="loginPage">
    <div className="loginForm">
        <h2 className="text-center">Login As</h2>
        <div className='d-flex justify-content-between mt-5 mb-2'>
            <button type='button' className='btn btn-primary' onClick={()=>{navigate('/employee_login')}}>Employee</button>
            <button type='button' className='btn btn-success' onClick={()=>{navigate('/adminlogin')}}>Admin</button>
        </div>


    </div>
</div>
  )
}

export default Start