import { Link } from "react-router-dom";
import SubMenu from "./Submenu";
import routesData from "../constants/routesData.json";

function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-nav-wrapper">
        <Link className="icon-link" to="/">
          SK
        </Link>
        {routesData.map((item) => {
          return !item?.hideInMenu && <SubMenu item={item} key={item.locale} />;
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
