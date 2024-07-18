import axios from "axios";
import { useState, useEffect } from "react";
import { useToast } from '@chakra-ui/react'
// import { useParams } from "react-router-dom";

const LeaveDashboard = () => {
  // const {id} = useParams();
  const[admin, setAdmin] = useState([]);
  const[leaveType, setLeaveType] = useState([]);
  const[fromDate, setFromDate] = useState('');
  const[toDate, setToDate] = useState('');
  const[leaveInfo, setLeaveInfo] = useState('');
  const[adminId, setAdminId] = useState(0);
  const[type, setType] = useState('');

  const toast = useToast()

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
    
    const leaveReuest = {
      fromDate,
      toDate,
      leaveInfo,
      adminId,
      type,
    };

    axios.post("http://localhost:3000/employee/emp_dashboard/leave_dashboard", leaveReuest)
    .then(response =>{
      toast({
        title: 'Submitted Successfully',
        description: "Your leave request has been submitted.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setFromDate('');
      setToDate('');
      setLeaveInfo('');
      setAdminId('');
      setType('');
    })
    .catch(err => console.log("Problem"));

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
                    <input type="date" className="form-control" id="from-date" value={fromDate} onChange={(e)=>setFromDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="to-date" className="ms-2 text-primary">Leave To</label>
                    <input type="date" className="form-control" id="to-date" value={toDate} onChange={(e)=>setToDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="type_of_leave" className="ms-2 text-primary">Type of Leave</label>
                    <select name="type_of_leave" id="type_of_leave" className="form-select" value={type} onChange={(e)=>setType(e.target.value)}>
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
                    <select name="admin" id="admin" className="form-select" value={adminId} onChange={(e)=>setAdminId(e.target.value)}>
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
                    <textarea className="form-control" id="reason" style={{height: '100px'}} value={leaveInfo} onChange={(e)=>setLeaveInfo(e.target.value)} ></textarea>
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
