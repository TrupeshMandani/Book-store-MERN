/* This code snippet is a React component named `Recommended` that displays a list of recommended books
using the Swiper library for a carousel/slider effect. Here's a breakdown of what the code is doing: */
import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Add this line
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const Recommended = () => {
  const { data: books = [] } = useFetchAllBooksQuery();

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Recommended Books For you</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]} // Include Navigation module
        className="mySwiper"
      >
        {books.slice(8, 16).map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
