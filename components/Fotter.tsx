import React from "react";

const Fotter = () => {
  return (
    <div className="px-10 py-6 bg-purple-800 text-white shadow">
      <div className="max-w-[1370px] mx-auto flex items-center justify-between ">
        <div>
          <h1 className="text-xl font-semibold">FM</h1>
        </div>
        {/* right */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/faysaldev"
            target="_blank"
            className="no-underline"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
