import React, { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzImg1 from "../../../assets/qZone1.png";
import qzImg2 from "../../../assets/qZone2.png";
import qzImg3 from "../../../assets/qZone3.png";
import rightNavBg from "../../../assets/bg.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const NavRight = () => {
  const { googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        toast.success("google login done");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const gitHubSignedIn = result.user;
        console.log(gitHubSignedIn);
        toast.success("github login done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="social-login-area">
        <h3 className="secondary-heading my-3">Login With</h3>
        <div className="social-btn space-y-5">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-info w-full"
          >
            <FaGoogle className="text-xl me-2"></FaGoogle> Login with google
          </button>
          <button
            onClick={handleGitHubSignIn}
            className="btn btn-outline w-full"
          >
            <FaGithub className="text-xl me-2"></FaGithub> Login with gitHub
          </button>
        </div>
      </div>
      <div className="find-social-area my-5">
        <h4 className="secondary-heading mb-3">Find Us On</h4>
        <div className="find-social-card">
          <p className="flex space-x-2 items-center border p-3 text-xl cursor-pointer">
            <FaFacebook className="text-blue-900"></FaFacebook>{" "}
            <span>Facebook</span>
          </p>
          <p className="flex space-x-2 items-center border p-3 text-xl cursor-pointer">
            <FaTwitter className="text-sky-500"></FaTwitter>{" "}
            <span>Twitter</span>
          </p>
          <p className="flex space-x-2 items-center border p-3 text-xl cursor-pointer">
            <FaInstagram className="text-orange-500"></FaInstagram>{" "}
            <span>Instagram</span>
          </p>
        </div>
      </div>
      <div className="q-zone-area bg-gray-100 p-4 mb-5">
        <h4 className="secondary-heading mb-3">Q-Zone</h4>
        <div className="q-zone-gallery">
          <img src={qzImg1} alt="" />
          <img src={qzImg2} alt="" />
          <img src={qzImg3} alt="" />
        </div>
      </div>
      <div
        className="p-14 text-white text-center"
        style={{
          backgroundImage: `url(${rightNavBg})`,
          backgroundSize: "cover",
        }}
      >
        {/* <img className="w-100" src={rightBg} alt="" /> */}
        <h4 className="leading-10 text-3xl font-sans font-bold mb-4">
          Create an Amazing Newspaper
        </h4>
        <p className="mb-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="main-btn">Learn More</button>
      </div>
    </div>
  );
};

export default NavRight;
