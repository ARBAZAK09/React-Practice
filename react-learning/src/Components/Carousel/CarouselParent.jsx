import React from 'react';
import {CarouselChild} from './CarouselChild';
import { carouselReducer } from '../Reducers/CarouselReducer';
export const CarouselParent = () => {
    
   
    return (
        <div>
            <h1>This is Parent Component</h1>

     {carouselReducer.carouselData.map((data)=>{
        return <CarouselChild itemCurrent={data}/>
    })}
    
        </div>
    );
};

