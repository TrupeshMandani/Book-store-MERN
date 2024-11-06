import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, signInWithGoogle } = useAuth();
  const handlegoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("  Login with Google Succesfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [message, setMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("Login Succesfully");
      navigate("/");
    } catch (error) {
      setMessage("Failed to login");
    }
  };
  return (
    <div className="h-[calc(100vh-120px)]  flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              {" "}
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow mb-4"
              placeholder="Email Adress"
              {...register("email", { required: true })}
            />
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              {" "}
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded py-2 mb-4 px-3 w-full leading-tight focus:outline-none focus:shadow"
            />
            {message && <p className="text-red-500 text-sm">{message}</p>}
            <div>
              {" "}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven't an account? Please{" "}
          <Link className="hover:text-blue-700" to="/register">
            Register
          </Link>
        </p>
        {/* Google Sign IN Button with icon from import. */}
        <div>
          <button
            onClick={handlegoogleSignIn}
            className="bg-secondary hover:bg-blue-700  text-white font-bold py-2 w-full px-4 border rounded shadow mt-4 flex items-center justify-center"
          >
            <FcGoogle className="text-xl mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
