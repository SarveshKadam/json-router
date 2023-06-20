import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get("username");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Cookies.set("username", username);
    isAdmin && Cookies.set("isAdmin", "yes");
    navigate("/dashboard");
  };
  const handleLogOut = () => {
    Cookies.remove("username");
    Cookies.remove("isAdmin");
    navigate("/user/login");
  };
  return (
    <>
      {isLoggedIn && (
        <div>
          <p>
            You already Logged In. Do you want to log in as a different user
          </p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
      {!isLoggedIn && (
        <form onSubmit={onSubmit} className="login-form">
          <h2>Login Form</h2>
          <div className="input-content">
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              placeholder="xyz"
              className="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="input-content">
            <label htmlFor="admin">Login as Admin</label>
            <input
              id="admin"
              type="checkbox"
              className="checkbox"
              onChange={(e) => setIsAdmin(e.target.checked)}
              checked={isAdmin}
            />
            <span className="subtext">
              This is demo purpose only, with proper authentication we can
              provide the admin role to particular user
            </span>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
