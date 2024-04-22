"use client"
import React from "react";
import Image from "next/image";
import jsonData from "../data/gospel.json"; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IDataItem {
  id: number;
  topic: string;
  image: string;
  speaker: string;
}

const Gospel_messages: React.FC = () => {
    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },

          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
    };  

    return (
      <div className="bg-white xl:px-8 px-8 pb-20">
        <p className="flex-col text-black text-center p-2 text-4xl font-medium">Gospel Messages</p>
        <p className="text-sm flex-col text-black text-center p-2">Drag left or right</p>
       
        <Slider {...settings}>
         
          {jsonData.map((item: IDataItem) => (
                
                <div key={item.id} className="w-[320px] h-[373px] rounded-3xl bg-black p-4 mr-8 border border-white  border-8">
                    <div className="">
                        <img src={item.image} alt={item.topic} className="rounded-2xl w-full h-[172px]" />

                        <div className="">
                            <div className="mt-4">
                            <p className="text-sm xl:text-base text:font-semibold text-white inline-block ">{item.topic}</p>
                            </div>
                        </div>
                        <div className="bg-white text-sm rounded-3xl py-2 px-4 xl:px-6 xl:mt-8 mt-6 xl:w-[250px]">
                            {item.speaker}
                        </div>
                    </div>
                </div>
          ))}  
          
        </Slider>
        </div>
      
    );
};

export default Gospel_messages;
