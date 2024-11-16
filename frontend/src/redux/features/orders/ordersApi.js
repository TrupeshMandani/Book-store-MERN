import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getBaseURL } from "../../../utils/baseURL";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/orders`,
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: `/`,
        method: "POST",
        body: newOrder,
        credentials: "include",
      }),
      invalidatesTags: [" Orders "],
    }),
  }),
});
export const { useCreateOrderMutation } = ordersApi;
