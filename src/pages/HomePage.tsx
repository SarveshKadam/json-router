import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = Cookies.get("username");
  return (
    <div>
      <h1>Welcome to Route App</h1>
      {!isLoggedIn && (
        <Link to="/user/login">
          <button>Log In</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
