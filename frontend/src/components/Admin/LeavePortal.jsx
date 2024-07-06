
const LeavePortal = () => {
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
                    <tr>
                        <td>01.01.01</td>
                        <td>01.02.01</td>
                        <td>Vacation</td>
                        <td>Casual Leave</td>
                        <td>
                            <button className="btn btn-success btn-sm me-2">Approve</button>
                            <button className="btn btn-danger btn-sm">Reject</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
  )
}

export default LeavePortal