import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import a1 from "../../../assets/1.png";
import a2 from "../../../assets/2.png";
import a3 from "../../../assets/3.png";
import { FaCalendar } from "react-icons/fa";
import moment from "moment/moment";

const NavLeft = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4 className="secondary-heading">All Category</h4>
      {categories.map((category) => (
        <p
          className="secondary-heading rounded-sm cursor-pointer hover:bg-gray-100 py-6 ps-10  text-gray-500 hover:text-gray-900"
          key={category.id}
        >
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}

      <div className="cards">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-4">
            <img src={a1} alt="" />
            <h5 className="text-xl font-semibold">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </h5>
            <p className="flex items-center text-base text-gray-800 space-x-3">
              <FaCalendar></FaCalendar>{" "}
              <span>{moment().format("MMM D, YYYY")}</span>
            </p>
          </div>
          <div className="space-y-4">
            <img src={a2} alt="" />
            <h5 className="text-xl font-semibold">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </h5>
            <p className="flex items-center text-base text-gray-800 space-x-3">
              <FaCalendar></FaCalendar>{" "}
              <span>{moment().format("MMM D, YYYY")}</span>
            </p>
          </div>
          <div className="space-y-4">
            <img src={a3} alt="" />
            <h5 className="text-xl font-semibold">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </h5>
            <p className="flex items-center text-base text-gray-800 space-x-3">
              <FaCalendar></FaCalendar>{" "}
              <span>{moment().format("MMM D, YYYY")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
