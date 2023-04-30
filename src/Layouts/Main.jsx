import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavLeft from "../Pages/Shared/NavLeft/NavLeft";
import NavRight from "../Pages/Shared/NavRight/NavRight";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="container-max min-h-screen">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <NavLeft></NavLeft>
          </div>
          <div className="col-span-6">
            <Outlet></Outlet>
          </div>
          <div className="col-span-3">
            <NavRight></NavRight>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
