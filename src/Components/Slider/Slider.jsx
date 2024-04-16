import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Slider = () => {
    
    return (
        <div className='h-[400px] '>
            <div className=' w-[80%] mx-auto'>
                <h1 className='text-3xt lg:text-5xl font-semibold lg:w-96 mx-auto  mt-5 mb-5 animate_animated animate__bounceInRight '>Our Some Projact</h1>
                <p className='lg:w-96 mx-auto mb-5 '>We show our some Projact there Have maney <br />   projact. We just show some demo projact </p>
             
            </div>
               <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img className='h-[400px] w-[60%] mx-auto' src="https://i.ibb.co/4gtvJrc/israel-andrade-YI-9-Siv-Vt-s-unsplash.jpg" />
          <img className='h-[400px] w-[60%] mx-auto' src="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto' src="https://i.ibb.co/txMzQmr/alesia-kaz-VWc-Plb-Hgl-Yc-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto'src="https://i.ibb.co/MMsPYgt/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto'  src="https://i.ibb.co/NS6whwv/dev-asangbam-Sj-G7-MA4n8-S0-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto' src="https://i.ibb.co/4gtvJrc/israel-andrade-YI-9-Siv-Vt-s-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto' src="https://i.ibb.co/7bMNSRr/pablo-heimplatz-ZODc-Bk-Eohk8-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto' src="https://i.ibb.co/C2W2C95/redd-f-5-U-28ojjgms-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto' src="https://i.ibb.co/fSxhnBT/srijal-maharjan-Sy-Uir4rmifo-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[400px] h-[250px] w-[60%] mx-auto' src="https://i.ibb.co/Sx9Qrfm/noiseporn-JNu-Ky-KXLh8-U-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;








