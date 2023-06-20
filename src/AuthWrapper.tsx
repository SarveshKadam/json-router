import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

type Props = {
  accessTo: string[];
  children: React.ReactNode;
};

const AuthWrapper = ({ accessTo, children }: Props) => {
  if (accessTo.includes("admin") && Cookies.get("isAdmin") !== "yes") {
    return (
      <div>
        <h3>You don't have required rights to view this Page</h3>
        <p>Login as a Admin User</p>
        <Link to="/user/login">
          <button>Go to Login</button>
        </Link>
      </div>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthWrapper;

AuthWrapper.defaultProps = {
  accessTo: [],
};
