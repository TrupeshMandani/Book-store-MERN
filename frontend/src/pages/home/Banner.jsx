import React from "react";
import "../../App.css";
import bannerIMG from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex justify-between md:justify-end">
        <img src={bannerIMG} alt="" />
      </div>
      <div>
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New releases This Week
        </h1>
        <p className="mb-10">
          {" "}
          It's time to update your reading list with some of the latest and
          greatest release in the literary world. From heart-pumping thrillers
          to captivating memories, this week's new releases offer something for
          everyone.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
