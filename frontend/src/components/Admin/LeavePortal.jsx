import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const LeavePortal = () => {
  const [leaveDetails, setLeaveDetails] = useState([]);
  const [leaveStatDetails, setLeaveStatDetails] = useState([]);

  const LEAVE_STATUS = {
    Approved : 1,
    Rejected : 2
}

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/get-leaves")
      .then((result) => {
        if (result.data.Status) {
          setLeaveDetails(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/auth/get-leave-status")
      .then((result) => {
        if (result.data.Status) {
          console.log(result.data.Result);
          setLeaveStatDetails(result.data.Result);
          // console.log(leaveStatDetails)
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const approveLeave = (leaveId, statusId) => {
    // console.log(row, status)
    // console.log(leaveDetails)
    axios
      .put("http://localhost:3000/auth/update-leave", { leaveId, statusId })
      .then((res) => {
        if (res.data.Status) {
          setLeaveDetails((prevLeaveDetails) =>
            prevLeaveDetails.map((ld) =>
              ld.id === leaveId ? { ...ld, status: "approved" } : ld
            )
          );
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const rejectLeave = (leaveId, statusId) => {
    // console.log(row, status)
    // console.log(leaveDetails)
    axios
      .put("http://localhost:3000/auth/update-leave", { leaveId, statusId })
      .then((res) => {
        if (res.data.Status) {
          setLeaveDetails((prevLeaveDetails) =>
            prevLeaveDetails.map((ld) =>
              ld.id === leaveId ? { ...ld, status: "rejected" } : ld
            )
          );
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-5 mt-3">
      <div className="mt-3">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Type of Leave</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {leaveDetails.map((ld) => (
              <tr key={ld.id}>
                <td>{format(ld.fromDate, "dd-MM-yyyy")}</td>
                <td>{format(ld.toDate, "dd-MM-yyyy")}</td>
                <td>{ld.leaveInfo}</td>
                <td>{ld.type}</td>
                <td>{ld.status}</td>
                <td>
                  <button className="btn btn-success btn-sm me-2" onClick={() => approveLeave(ld.id, LEAVE_STATUS.Approved)}>
                    Approve
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => rejectLeave(ld.id, LEAVE_STATUS.Rejected)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeavePortal;
