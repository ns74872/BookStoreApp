import React from "react";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 pt-14 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <h1 className="text-9xl font-bold text-lime-600">BOOK STORE</h1>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">
              Your Literary Journey Begins Here,
              <span className="text-amber-600"> Explore Our Shelves!</span>
            </h1>
            <p>
              Immerse yourself in the magic of books; each story offers a unique
              journey, expanding your horizons and enriching your mind
            </p>
            <label className="py-2 px-2 border rounded-md flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-3">Secondary</button>
        </div>

        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="h-82 w-82" alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
