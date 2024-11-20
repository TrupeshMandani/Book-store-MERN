import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();

  // Check if currentUser is defined
  if (!currentUser || !currentUser.email) {
    console.error("No user logged in.");
    return <div>Please log in to view your orders.</div>;
  }

  const {
    data: orders = [], // Default to empty array if data is not available
    isLoading,
    isError,
    error,
  } = useGetOrderByEmailQuery(currentUser.email);

  // Log the fetched orders to verify the data
  console.log("Fetched orders:", orders);

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    console.error("Error fetching orders:", error);
    return <div>Error fetching orders. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {Array.isArray(orders) && orders.length > 0 ? (
        <div>
          {orders.map((order, index) => (
            <div key={order._id} className="border-b mb-4 pb-4">
              <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                # {index + 1}
              </p>
              <h2 className="font-bold">Order ID: {order._id}</h2>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
              <h3 className="font-semibold mt-2">Address:</h3>
              <p>
                {order.address.city}, {order.address.state},{" "}
                {order.address.country}, {order.address.zipcode}
              </p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order.productsIds.map((productId) => (
                  <li key={productId}>{productId}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>No orders found!</div>
      )}
    </div>
  );
};

export default OrderPage;
