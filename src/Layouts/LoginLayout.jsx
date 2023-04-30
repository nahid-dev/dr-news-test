import React from "react";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const LoginLayout = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container-max ">
        <NavigationBar></NavigationBar>
        <div className="h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LoginLayout;
