import React from 'react';

const Banner = () => {
    return (
  <div className='w-[85%] mx-auto'>
          <div className="carousel w-full container lg:ml-12 rounded-lg mt-5 ">
        <div id="slide1" className="carousel-item relative w-full h-80">
          <img src="https://i.ibb.co/MD4FK17/janis-rozenfelds-GJcp-M6q-NU0c-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-80">
          <img src="https://i.ibb.co/zZ3307Y/noiseporn-JNu-Ky-KXLh8-U-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-80">
          <img src="https://i.ibb.co/4jxng4p/redd-f-5-U-28ojjgms-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
      
      </div>
  </div>
    );
};

export default Banner;