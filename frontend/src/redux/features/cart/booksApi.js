import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/books`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"],
    }),
    fetchSingleBook: builder.query({
      query: (id) => `/${id}`,
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: "/create-book",
        method: "POST",
        body: book,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: book,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetchSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
