import axios from "axios"
import { useEffect, useState } from "react"

const LeavePortal = () => {
    const [leaveDetails, setLeaveDetails] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/auth/leave_portal')
        .then(result => {
            if(result.data.Status){
                setLeaveDetails(result.data.Result)
              }else{
                alert(result.data.Error)
              }
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className="px-5 mt-3">
        <div className="mt-3">
            <table className='table'>
                <thead className="text-center">
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Reason</th>
                    <th>Type of Leave</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="text-center">
                    {
                        leaveDetails.map(ld => (
                            <tr key={ld.id}>
                            <td>{ld.fromDate}</td>
                            <td>{ld.toDate}</td>
                            <td>{ld.leaveInfo}</td>
                            <td>{ld.type}</td>
                            <td>
                                <button className="btn btn-success btn-sm me-2">Approve</button>
                                <button className="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
    
  )
}

export default LeavePortal