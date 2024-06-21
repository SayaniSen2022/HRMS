import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
        <Dashboard/>
        <Outlet/>
    </>
  )
}
export default SharedLayout;