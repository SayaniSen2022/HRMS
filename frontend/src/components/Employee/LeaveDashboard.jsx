import { Link } from "react-router-dom"

const LeaveDashboard = () => {
  return (
    <div>
      <h1>LeaveDashboard</h1>
      <Link to="/leave_appl" className="btn btn-info btn-sm me-2">Apply for Leaves</Link>
    </div>
  )
}

export default LeaveDashboard