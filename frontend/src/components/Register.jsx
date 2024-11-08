/* This code snippet is a React component for a registration form. Here's a breakdown of what the code
is doing: */
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { registerUser, signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("  Register with Google Succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Register user with logic if already exixst then giv ethe alert of login to redirect the login page.
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("Register Succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow mb-4"
              placeholder="Email Address"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow mb-4"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none"
          >
            Register
          </button>
        </form>

        <p className="align-baseline font-medium mt-4 text-sm">
          Already Have an Account? Please{" "}
          <Link className="hover:text-blue-700" to="/login">
            Login
          </Link>
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 w-full px-4 border rounded shadow mt-4 flex items-center justify-center"
        >
          <FcGoogle className="text-xl mr-2" />
          Register with Google
        </button>

        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
