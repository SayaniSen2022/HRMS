
const LeaveAppl = () => {
  return (
    <div>
        <div className="text-center mt-3">
            <h2>Leave Application</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <form className="ms-4 mt-3 w-25 border border-subtle p-3 rounded" >
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
                        <option>Paid Leave</option>
                        <option>Casual Leave</option>
                        <option>Sick Leave</option>
                        <option>Compensatory Leave</option>
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


  )
}
export default LeaveAppl