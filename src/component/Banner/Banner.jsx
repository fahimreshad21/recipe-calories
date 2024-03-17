import React from "react";

const Banner = () => {
  return (
    <div className="banner h-[650px] container mx-auto rounded-xl flex flex-col items-center justify-center space-y-8">
      <h1 className="text-5xl text-center text-white lexend-font font-bold leading-tight">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className="fira-font font-medium text-white text-center">
        Our recipes section is a treasure trove of culinary delights, offering a
        diverse <br /> range of dishes to suit every taste and occasion.
      </p>
      <div className="flex gap-4">
        <button className="bg-green-500 hover:bg-green-400 rounded-3xl p-3 font-semibold lexend-font">
          Explore Now
        </button>
        <button className=" rounded-3xl p-2 font-semibold lexend-font border border-dashed text-white">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
