import React, { useContext, useState } from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Result } from "postcss";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        toast.success("registration done");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckBtn = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div className="flex items-center h-screen font-sans">
      <div
        className=" border mx-auto bg-white rounded-md px-16 py-20"
        style={{ width: "752px" }}
      >
        <div className="login-header text-center mb-10">
          <h4 className="text-4xl font-bold ">Register Your Account</h4>
        </div>
        <hr />
        <form onSubmit={handleRegistration} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold"> Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input bg-gray-100 rounded-sm text-gray-700"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Photo"
              className="input bg-gray-100 rounded-sm text-gray-700"
              name="photo"
              required
            />
          </div>
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
            <label className="mt-3 flex">
              <input
                onClick={handleCheckBtn}
                type="checkbox"
                className="default:ring-2 me-3"
              />
              <p>
                accept{" "}
                <Link className="text-sky-500 underline" to="/terms">
                  terms and conditions
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              disabled={!accepted}
              type="submit"
              className="secondary-btn rounded-sm"
            >
              Register
            </button>
          </div>
        </form>
        <div className="login-other text-center">
          <p className="text-base font-bold">
            Already have account?{" "}
            <span className="text-orange-500">
              <Link to="/login">Login</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
