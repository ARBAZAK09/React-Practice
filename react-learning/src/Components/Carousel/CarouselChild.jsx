import React, { useState } from "react";

export const CarouselChild = ({itemCurrent}) => {
    
  return (
    <div>
      <h1>{itemCurrent.carouselHeading}</h1>
      <img
        src={itemCurrent.carouselImg}
        alt="myImage"
      />
      <p>
       {itemCurrent.carouselDesc}
      </p>
    </div>
  );
};
