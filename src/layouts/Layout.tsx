import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
function Layout() {
  return (
    <>
      <Sidebar />
      <div style={{marginLeft: "300px"}}>
        <Breadcrumbs />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
