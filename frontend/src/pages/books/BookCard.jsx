import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import getImgUrl from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300 h-72 sm:h-80 flex flex-col justify-between p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-full sm:justify-center gap-4">
        <div className="sm:h-full sm:flex-shrink-0 border rounded-md">
          <a href="/">
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt=""
              className="w-full h-48 sm:h-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </a>
        </div>
        <div className="sm:h-full flex flex-col justify-between">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-1 ">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-1 line-clamp-3">{book.description}</p>
          <p className="font-medium mb-5">
            ${book.newPrice}
            <span className="line-through font-normal ml-2">
              ${book.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary w-full py-3 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FiShoppingCart className="text-lg" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
