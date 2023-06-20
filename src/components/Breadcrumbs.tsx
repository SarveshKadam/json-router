import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { capitalCase, findBreadCrumbs } from "../helper";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = useMemo(() => {
    return findBreadCrumbs(pathname);
  }, [pathname]);
  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link crumb" : "crumb"
            }
            to={crumb.path}
            end
          >
            {capitalCase(crumb.name)}
          </NavLink>
          {index !== crumbs.length - 1 && <span>&#x3e;</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
