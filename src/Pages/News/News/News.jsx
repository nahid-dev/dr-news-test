import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const singleNews = useLoaderData();
  const { title, details, image_url, category_id } = singleNews;
  return (
    <div>
      {/* Dragon News */}
      <div className="dr-news">
        <h2 className="secondary-heading mb-5">Dragon News</h2>

        <div className=" w-full border p-2 rounded-md">
          <figure className="px-5 pt-5">
            <img src={image_url} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
            <p className="my-4">{details}</p>
            <div className="">
              <Link to={`/category/${category_id}`}>
                <button className="main-btn flex items-center space-x-2">
                  <FaArrowLeft></FaArrowLeft>
                  <span>All news in this category</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <EditorsInsights></EditorsInsights>
    </div>
  );
};

export default News;
