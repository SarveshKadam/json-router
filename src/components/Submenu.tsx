import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SubmeuProps } from "../config";

type Props = {
  item: SubmeuProps;
};
const SubMenu = ({ item }: Props) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavLink
        to={item?.path || "/"}
        onClick={item?.routes && showSubnav}
        className={({ isActive }) =>
          isActive ? "sidebar-link-active sidebar-link" : "sidebar-link"
        }
      >
        <div className="dropdown-heading">
          <img src={`/icons/${item.icon || "default"}.svg`} alt="" />
          <span className="sidebar-label">{item.name}</span>
        </div>
        <div>
          {item.routes && subnav && <img src="/icons/arrow-up.svg" alt="" />}
          {item.routes && !subnav && (
            <img src="/icons/arrowhead-down.svg" alt="" />
          )}
        </div>
      </NavLink>
      {subnav &&
        item.routes?.map(
          (item) =>
            !item?.hideInMenu && (
              <NavLink
                to={item?.path || "/"}
                key={item.locale}
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-dropdown-active sidebar-dropdown"
                    : "sidebar-dropdown"
                }
              >
                <img src={`/icons/${item.icon || "default"}.svg`} alt="" />
                <span className="sidebar-label">{item.name}</span>
              </NavLink>
            )
        )}
    </>
  );
};

export default SubMenu;
