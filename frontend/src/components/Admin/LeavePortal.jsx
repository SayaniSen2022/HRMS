
const LeavePortal = () => {
  return (
    <div className="px-5 mt-3">
        <div className="mt-3">
            <table className='table'>
                <thead>
                <tr>
                    <th>Leave Requests</th>
                    <th>Approve</th>
                    <th>Reject</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><button className="btn btn-success btn-sm">Approve</button></td>
                        <td><button className="btn btn-danger btn-sm">Reject</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
  )
}

export default LeavePortal