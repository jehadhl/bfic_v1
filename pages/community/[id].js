import DetailsBlogs from "@/components/Blogs/DetailsBlogs/DetailsBlogs";
import Media from "@/shared/Media";
import React from "react";

const details = () => {
  return (
    <>
      <DetailsBlogs />

      <div className="max-w-[1600px] mx-auto pb-8">
        <h1 className="text-4xl text-white ">
          stay updated with{" "}
          <span className="font-semibold text-clr-yellow-normal">
            {" "}
            the latest events{" "}
          </span>
        </h1>
        <div className="flex gap-10 my-6">
          <Media />
        </div>
      </div>
    </>
  );
};

export default details;
