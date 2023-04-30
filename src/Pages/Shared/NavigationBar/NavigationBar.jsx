import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavigationBar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const handleLogout = () => {
    loggedOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center space-x-4">
          <Link to="/category/0">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
        </div>
        <div className="navbar-end">
          <button className="text-5xl me-3">
            {user && <FaUserCircle></FaUserCircle>}
          </button>
          {user ? (
            <>
              <Link>
                <button onClick={handleLogout} className="secondary-btn ">
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="secondary-btn ">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
