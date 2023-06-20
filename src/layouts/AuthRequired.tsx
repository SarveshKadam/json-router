import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRequired = () => {
  if (Cookies.get("isAdmin") !== "yes") {
    return (
      <div>
        <h3>You don't have required rights to view this Page</h3>
        <button>Go to Login </button>
      </div>
    );
  }
  return <Outlet />;
};

export default AuthRequired;
