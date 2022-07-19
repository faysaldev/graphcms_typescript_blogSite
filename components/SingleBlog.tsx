import { useRouter } from "next/router";
import React from "react";

const SingleBlog = ({ data }: any) => {
  const router = useRouter();

  return (
    <div
      className="bg-white border-b pr-8 py-10 cursor-pointer"
      onClick={() => router.push(`/blog/${data.slug}`)}
    >
      {/* wrapper */}
      <div className="space-y-3">
        {/* time */}
        <p className="text-gray-500 font-semibold text-base">{data?.date}</p>
        {/* headline */}
        <h2 className="text-black text-2xl font-semibold pb-2">
          {data?.title}
        </h2>
        {/* p */}
        <p className="text-gray-500 pb-3">{data?.excerpt}</p>
        {/*  */}
        <a className="group relative text-purple-500 group-hover:text-purple-700 group-hover:font-semibold cursor-pointer">
          <span>Read more</span>
          <span className="group-hover:ml-4 ml-2 transition-all ease-in-out">
            {"->"}
          </span>
        </a>
      </div>
    </div>
  );
};

export default SingleBlog;
