import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/features/cart/cartSlice";
import getImgUrl from "../../utils/getImgUrl";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const total = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  return (
    <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <button onClick={() => dispatch(clearCart())} className="btn-primary">
          Clear Cart
        </button>
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col gap-2 p-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={getImgUrl(item.coverImage)}
                  alt={item.title}
                  className="w-24 h-32 object-cover rounded-md"
                />
                <div className="">
                  <Link to={`/books/${item._id}`}>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>{" "}
                    {/* Added mb-1 for spacing */}
                  </Link>
                  <p className="text-gray-600 mb-1">{item.author}</p>{" "}
                  {/* Adjusted margin */}
                  <p className="font-semibold">${item.newPrice}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="btn-secondary"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-4">
        <h3 className="text-xl font-semibold">Total: ${total}</h3>
        <Link to="/checkout" className="btn-primary">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
