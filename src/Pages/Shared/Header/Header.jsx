import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div>
      <div className="container-max py-3">
        <div className="site-logo-area text-center space-y-5">
          <img className="mx-auto" src={logo} alt="" />
          <p className="text-gray-700 text-lg">
            Journalism Without Fear or Favour
          </p>
          <p className="text-xl font-medium">
            {moment().format("dddd MMMM D YYYY")}
          </p>
        </div>
        <div className="marquee-area flex bg-gray-200 mt-4 p-3">
          <button className="main-btn">Latest</button>
          <Marquee className="text-lg font-semibold mx-3">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
        {/* Navbar area */}
        <NavigationBar></NavigationBar>
      </div>
    </div>
  );
};

export default Header;
