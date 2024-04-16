import React from 'react';
import Banner from '../Banner/Banner';
import FoodCard from '../Food Card/FoodCard';
import Service from '../Service/Service';
import { InfiniteMovingCards } from '../InfiniteMovingCards/InfiniteMovingCards';
import Revew from '../Revew/Revew';
import Slider from '../Slider/Slider';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
               
                <title>CommercialHub</title>
              
            </Helmet>
           <Banner></Banner>
           <FoodCard></FoodCard>
           <Service></Service>
           <Slider></Slider>
           <Revew></Revew>
           
        </div>
    );
};

export default Home;