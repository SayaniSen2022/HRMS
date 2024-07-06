import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LeaveDashboard = () => {
  const {id} = useParams();
  const[admin, setAdmin] = useState([]);
  const[leaveType, setLeaveType] = useState([]);
  const[leave, setLeave] = useState({
    fromDate: new Date(),
    toDate: new Date(),
    type: "",
    adminId: "",
    leaveInfo: ""
  });

  useEffect(()=>{
    axios.get('http://localhost:3000/auth/admin')
    .then((result) => {
      if (result.data.Status) {
        setAdmin(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    } )
    .catch((err) => console.log(err));

    axios.get('http://localhost:3000/employee/type_of_leave')
    .then((result) => {
      if (result.data.Status) {
        setLeaveType(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    } )
    .catch((err) => console.log(err));
  },[])


  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('fromDate', leave.fromDate);
    formData.append('toDate', leave.toDate);
    formData.append('type', leave.leaveType);
    formData.append('adminId', leave.adminId);
    formData.append('leaveInfo', leave.leaveInfo);

    axios.post("http://localhost:3000/employee/emp_dashboard/leave_dashboard", formData)
    .then(result => {
      if(result.data.Status){
        navigate('/emp_dashboard')
    }else{
        alert(result.data.Error)
    }
    })
    .catch(err => console.log(err));

  }

  return (
    <div className="d-flex justify-content-start">
      <div className="border rounded w-50 h-100 ms-2 mt-2 p-3">
        <div className="text-center mb-3">
            <div className="fs-4">Leave Application</div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <form className="w-100" onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="from-date" className="ms-2 text-primary">Leave From</label>
                    <input type="date" className="form-control" id="from-date" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="to-date" className="ms-2 text-primary">Leave To</label>
                    <input type="date" className="form-control" id="to-date" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="type_of_leave" className="ms-2 text-primary">Type of Leave</label>
                    <select name="type_of_leave" id="type_of_leave" className="form-select">
                        <option>Select</option>
                        {leaveType.map((ltype) => {
                              return (
                                <option key={ltype.leaveId} value={ltype.leaveId}>
                                  {ltype.type}
                                </option>
                              );
                            })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="admin" className="ms-2 text-primary">To be Approved by</label>
                    <select name="admin" id="admin" className="form-select">
                        <option>Select Admin</option>
                        {admin.map((a) => {
                              return (
                                <option key={a.id} value={a.id}>
                                  {a.name}
                                </option>
                              );
                            })}
                    </select>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="reason" className="ms-2 text-primary">Reason</label>
                    <textarea className="form-control" id="reason" aria-describedby="emailHelp" style={{height: '100px'}} ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-primary">Submit</button>
                </div>            
            </form>
        </div>
      </div>
      <div className="mt-4 mx-5 w-75">
        <div className="text-center mb-3">
          <div className="fs-4">Leave Information</div>
        </div>
        <table className="table table-hover table-striped table-sm border">
          <thead className="text-center">
            <tr>
              <th>From Date</th>
              <th>To Date</th>
              <th>Total Leaves</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>01.01.2024</td>
              <td>05.01.2024</td>
              <td>5</td>
              <td>Paid Leave</td>
              <td>Approved</td>
            </tr>
            <tr>              
              <td>03.03.2024</td>
              <td>04.03.2024</td>
              <td>1</td>
              <td>Casual Leave</td>
              <td>Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveDashboard;
