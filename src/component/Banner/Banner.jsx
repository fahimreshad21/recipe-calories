const Banner = () => {
  return (
    <div className="px-2">
      <div className="banner py-4 lg:h-[650px] container mx-auto rounded-xl flex flex-col items-center justify-center space-y-3 lg:space-y-8">
      <h1 className="text-xl lg:text-5xl text-center text-white lexend-font font-bold leading-tight">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className="fira-font font-medium w-2/3 lg:w-full text-white text-center">
        Our recipes section is a treasure trove of culinary delights, offering a <br /> diverse range of dishes to suit every taste and occasion.
      </p>
      <div className="flex gap-4">
        <button className="bg-green-500 hover:bg-green-400 rounded-3xl p-2 lg:p-3 lg:font-semibold lexend-font">
          Explore Now
        </button>
        <button className="rounded-3xl p-1 lg:p-2 lg:font-semibold lexend-font border border-dashed text-white">
          Our Feedback
        </button>
      </div>
    </div>
    </div>
  );
};

export default Banner;
