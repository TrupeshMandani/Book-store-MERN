/* This code snippet is defining a React functional component called `BookCard`. */
/* This code snippet is defining a React functional component called `BookCard`. */
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
    <div className="rounded-lg transition-shadow duration-300 flex flex-col justify-between p-4 h-full">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-grow">
        <div className="border rounded-md sm:flex-shrink-0">
          <Link to={`/books/${book._id}`}>
            <img
              src={getImgUrl(book.coverImage)}
              alt={book.title}
              className="w-full h-48 sm:h-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              onError={(e) => {
                e.target.onerror = null; // prevents infinite loop if the default image fails to load
                e.target.src = "/path/to/default/image.jpg"; // replace with your default image path
              }}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-1">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-1 line-clamp-3">{book.description}</p>
          <p className="font-medium mb-5">
            ${book.newPrice}
            {book.oldPrice && (
              <span className="line-through font-normal ml-2">
                ${book.oldPrice}
              </span>
            )}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(book)}
        className="btn-primary w-full py-3 flex items-center justify-center gap-2 mt-2"
      >
        <FiShoppingCart className="text-lg" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default BookCard;
