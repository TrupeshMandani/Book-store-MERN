/**
 * The CheckoutPage component in a React application handles the checkout process for a shopping cart,
 * including form submission for cash on delivery with user details and address input.
 * @returns The `CheckoutPage` component is being returned. It is a functional component that displays
 * a form for users to fill in their personal details for a cash on delivery checkout process. The form
 * includes fields for name, email, phone number, address, city, country, state, and zipcode. Users are
 * required to agree to the terms and conditions before placing an order. The total price and number of
 * items
 */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      phone: data.phone,
      address: {
        street: data.address,
        city: data.city,
        country: data.country,
        state: data.state,
        zip: data.zipcode,
      },
      productsIds: cartItems.map((item) => item._id),
      total,
    };
    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("error placing an Order", error);
    }
  };
  const [createOrder, { isLoading, error }] = useCreateOrderMutation;
  const { currentUser } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  if (isLoading) return <div> Loading...</div>;
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">
              Cash On Delivery
            </h2>
            <p className="text-gray-500 mb-2">Total Price: ${total}</p>
            <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>
          </div>

          <div className="bg-white rounded shadow-lg p-4 md:p-8 mb-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
            >
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      {...register("name", { required: true })} // Register input
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      {...register("email")} // Register input
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      disabled
                      defaultValue={currentUser?.email}
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone", { required: true })} // Register input
                      id="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="+123 456 7890"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      {...register("address", { required: true })} // Register input
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      {...register("city", { required: true })} // Register input
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <input
                      {...register("country", { required: true })} // Register input
                      id="country"
                      placeholder="Country"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <input
                      {...register("state", { required: true })} // Register input
                      id="state"
                      placeholder="State"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="text"
                      {...register("zipcode", { required: true })} // Register input
                      id="zipcode"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5 mt-3">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        id="billing_same"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)} // Update checkbox state
                        className="form-checkbox"
                      />
                      <label htmlFor="billing_same" className="ml-2">
                        I agree to the{" "}
                        <Link className="underline underline-offset-2 text-blue-600">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link className="underline underline-offset-2 text-blue-600">
                          Shopping Policy.
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <button
                      type="submit"
                      disabled={!isChecked} // Disable button if checkbox is not checked
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Place an Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

// now analyse the whole project i am going to setup mongoDb and tell me what i have to setup now ans me in comments.
// what data will be needed
