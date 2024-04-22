"use client"
import React from "react";
import jsonData from "../data/data.json"; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IDataItem {
  id: number;
  topic: string;
  topic2:string;
  image: string;
  description: string;
}

const FeatureList: React.FC = () => {

  const NextArrow: React.FC =() => {
    return (
      <div>
      </div>
    );
  };

  const PrevArrow: React.FC =() => {
    return (
      <div>
      </div>
    );
  };

    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow/>,
    
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };  

    return (
      <div className="bg-black px-8 pb-8">
        <p className="text-sm flex-col text-white text-center p-8">Drag left or right</p>
       
        <Slider {...settings}>
         
          {jsonData.map((item: IDataItem) => (

                <div key={item.id} className="relative flex-shrink-0 w-[323px] h-[350px] rounded-2xl">
                <img src={item.image} alt={item.topic} className="absolute rounded-2xl inset-0 w-[97%] h-full object-cover z-0"/>
                <div className="absolute inset-0 flex flex-col px-4 z-1">
                    <div className="bg-black w-min rounded-2xl p-2 mt-4 opacity-80">
                      <p className="text-lg font-semibold text-white inline-block ">{item.topic}</p>
                      <h3 className="text-lg font-semibold text-white inline-block">{item.topic2}</h3>
                    </div>
                    <div className="bg-white rounded-2xl h-[102px] py-4 px-4 mx-2 mt-36 ">
                       <p className="text-sm text-black">{item.description}</p>
                    </div>
                </div>
                </div>
            
          ))}  
          
        </Slider>
        </div>
      
    );
};

export default FeatureList;
