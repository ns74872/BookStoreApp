import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Course = () => {
  const filterData = list.filter((data)=>data.category=== "paid");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4 h-14 dark:bg-slate-900 dark:text-white">
        <div className=" items-center flex-cols justify-center text-center ">
          <h1 className=" mt-14  text-2xl font-semibold md:4xl">
            We're delight to have you{" "}
            <span className=" text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab velit
            quasi est vel, iste necessitatibus aspernatur, quae laborum
            perferendis omnis minima! Ut quisquam eos voluptates harum. Delectus
            rerum nemo quia ea dignissimos. Corporis dicta neque, placeat unde
            vel ipsum nam.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div>
        <Slider {...settings}>
        {filterData.map((item) => (
        <Cards key={item.id} item={item} /> // Assuming item has a unique 'id' property
      ))}
      </Slider>
        </div>

        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Course;
