import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavRight from "../Pages/Shared/NavRight/NavRight";

const NewsPage = () => {
  return (
    <>
      <Header></Header>
      <div className="container-max min-h-screen">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
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

export default NewsPage;
