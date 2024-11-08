/**
 * The SingleBook component fetches and displays details of a book, allowing users to add it to the
 * cart.
 * @returns The `SingleBook` component is being returned. It displays information about a specific book
 * fetched by its ID, including the title, author, publication date, category, description, and an
 * option to add the book to the cart. If the book data is still loading, it shows a "Loading..."
 * message, and if there is an error fetching the book, it displays an "Error fetching book"
 */
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";

import getImgUrl from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";

const SingleBook = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const { id } = useParams();
  const { data: book = [], isLoading, isError } = useFetchBookByIdQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching book</div>;
  }
  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div className="">
        <div>
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>{" "}
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1 "
        >
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
