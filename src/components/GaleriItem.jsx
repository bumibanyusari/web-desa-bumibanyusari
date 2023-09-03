import { Carousel } from 'antd';
import React from 'react';

const GaleriItem = ({ galleryData }) => {
  console.log(galleryData);
  return (
    <div className="container mx-auto flex justify-center ">
      <div className="lg:w-[900px] w-10/12">
        <Carousel autoplay effect="fade" autoplaySpeed={1350}>
          {galleryData?.map((item, index) => (
            <div key={index}>
              <img
                alt={`Slide ${index + 1}`}
                src={item.imgUrl}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GaleriItem;
