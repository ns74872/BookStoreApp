import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebooks = () => {
 const filterData = list.filter((data)=>data.category === "free");
 const filterData2 = list.filter((data)=>data.category=== "paid");
 
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
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
        <div>
      <h1 className='font-semi-bold text-xl pb-2'>Free Offered Books</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt impedit dolore quaerat, omnis exercitationem fugit nobis illo sunt pariatur consectetur. Quod fuga alias aspernatur excepturi magni maxime libero blanditiis dolores?</p>
        </div>
        <div>
        <Slider {...settings}>
        {filterData.map((item) => (
        <Cards key={item.id} item={item} /> // Assuming item has a unique 'id' property
      ))}
      </Slider>
        </div>
    </div>
    </>
  )
}

export default Freebooks
