import moment from "moment/moment";
import React from "react";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, details, _id, image_url, author, total_view, rating } = news;
  return (
    <div>
      <div className="news-card border rounded-lg mb-6">
        <div className="news-card-header flex bg-gray-100 p-4 items-center">
          <div className="avatar me-5 cursor-pointer">
            <div className="w-12 rounded-full">
              <img src={author?.img} />
            </div>
          </div>

          <div className="grow">
            <p className="text-base font-semibold">
              {author.name ? author?.name : "John Doe"}
            </p>
            <p>
              <small>
                {moment(author?.published_date).format("yyyy-MM-d")}
              </small>
            </p>
          </div>

          <div className="flex space-x-3 text-xl">
            <FaRegBookmark className="cursor-pointer"></FaRegBookmark>{" "}
            <FaShareAlt className="cursor-pointer"></FaShareAlt>
          </div>
        </div>
        <div className="news-card-body p-4">
          <h3 className="text-xl font-bold my-3">{title}</h3>
          <img className="mb-4" src={image_url} alt="" />
          <p className="mb-5">
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link
                  to={`/news/${_id}`}
                  className="font-bold text-orange-500 text-base"
                >
                  Read More
                </Link>
              </>
            )}
          </p>
          <hr />
        </div>
        <div className="news-card-footer p-4 flex">
          <div className="rating-star flex items-center grow">
            <Rating
              className="text-xl"
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className="text-lg ms-3">{rating?.number}</span>
          </div>
          <div className="total-view flex items-center text-lg">
            <FaEye className="me-2"></FaEye> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
