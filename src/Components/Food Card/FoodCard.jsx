import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleCard from '../Singlecard/SingleCard';



const FoodCard = () => {
    const [food,setFood]=useState([])
    useEffect(()=>{
        fetch('Food.json')
        .then(res=>res.json())
        .then(data=>{
            setFood(data)
        })
    },[])
   


    
    return (
        <>
       <div className='grid md:grid-cols lg:grid-cols-3  gap-5 mb-5 mt-10'>
       {
            food.map((food)=><SingleCard Food={food}></SingleCard>)
        }
       </div>
        </>
    );
};

export default FoodCard;