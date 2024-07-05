import { Navigate } from "react-router-dom";

export const EmployeePvtRoute = ({ children }) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/" />;
};