import React from "react";
import editors1 from "../../../assets/editorsInsight1.png";
import editors2 from "../../../assets/editorsInsight2.png";
import editors3 from "../../../assets/editorsInsight3.png";
import { FaCalendar } from "react-icons/fa";
import moment from "moment/moment";

const EditorsInsights = () => {
  return (
    <div>
      {/* Editor's Insights */}
      <div className="editors-insights my-5">
        <h4 className="secondary-heading mb-4">Editor's Insight</h4>
        <div className="editor-card-area">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <img src={editors1} alt="" />
              <h5 className="text-xl font-semibold">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h5>
              <p className="flex items-center text-base text-gray-800 space-x-3">
                <FaCalendar></FaCalendar>{" "}
                <span>{moment().format("MMM D, YYYY")}</span>
              </p>
            </div>
            <div className="space-y-4">
              <img src={editors2} alt="" />
              <h5 className="text-xl font-semibold">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h5>
              <p className="flex items-center text-base text-gray-800 space-x-3">
                <FaCalendar></FaCalendar>{" "}
                <span>{moment().format("MMM D, YYYY")}</span>
              </p>
            </div>
            <div className="space-y-4">
              <img src={editors3} alt="" />
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
    </div>
  );
};

export default EditorsInsights;
