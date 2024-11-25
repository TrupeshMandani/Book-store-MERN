/* This code snippet is setting up an API client using Redux Toolkit Query to interact with an API for
managing orders. Here's a breakdown of what the code is doing: */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../../utils/baseURL"; // Adjust path to your project structure

export const ordersApi = createApi({
  reducerPath: "ordersApi", // Unique key for this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/orders`, // Base URL for the API
    credentials: "include", // Sends cookies with requests if needed
  }),
  tagTypes: ["Orders"], // Tags for cache management
  endpoints: (builder) => ({
    // Mutation for creating an order
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/", // API endpoint for creating an order
        method: "POST", // HTTP method
        body: newOrder, // Payload
      }),
    }),
    // Query for fetching orders by email
    getOrderByEmail: builder.query({
      query: (email) => `email/${email}`, // API endpoint for fetching orders by email
    }),
  }),
});

// Exporting generated hooks
export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;
