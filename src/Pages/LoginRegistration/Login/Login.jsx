import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLoginButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loggedInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("login done");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center h-screen font-sans">
      <div
        className=" border mx-auto bg-white rounded-md px-16 py-20"
        style={{ width: "752px" }}
      >
        <div className="login-header text-center mb-10">
          <h4 className="text-4xl font-bold ">Login Your Account</h4>
        </div>
        <hr />
        <form onSubmit={handleLoginButton} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input bg-gray-100 rounded-sm text-gray-700"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input bg-gray-100 rounded-sm text-gray-700"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="secondary-btn rounded-sm">Login</button>
          </div>
        </form>
        <div className="login-other text-center">
          <p className="text-base font-bold">
            Don't Have An Account?{" "}
            <span className="text-orange-500">
              <Link to="/registration">Register</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
