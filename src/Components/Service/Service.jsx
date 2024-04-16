import React from 'react';
import 'animate.css';


const Service = () => {
    return (
   <div className='md:w-[80%] mx-auto'>
    <div   className='w-[60%] mx-auto mt-10 mb-5'>
        <h1 className='text-3xl font-extrabold md:w-[60%] mx-auto animate__animated animate__backInUp'>See How We can Help</h1>
    </div>
       <div className='grid grid-cols-1 gap-5 md:grid-cols- lg:grid-cols-3 '>
        {/* first card  */}
        <div data-aos="flip-up" className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/YBNJ53V/BuyAHome.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" card-title animate__animated animate__bounceInDown">Buy a Resturent</h2>
    <p>IWith stunning views over the Bosphorus, a roof that can be fully opened when the weather is fine, and a terrace that turns into a DJs' playground at ...
Review by Michelin Inspector.</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full animate_animated animate__bounceInRight">Find A resturent</button>
    </div>
  </div>
</div>
        {/* scend card  */}
        <div data-aos="flip-up" className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/jvvBTGr/download.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title animate__animated animate__bounceInDown">Buy a Office Bulding</h2>
    <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full animate_animated animate__bounceInRight">Find A resturent</button>
    </div>
  </div>
</div>
        {/* thread */}
        <div data-aos="flip-up" className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src="https://i.ibb.co/8mWLvXK/download1.jpg" alt="Shoes" className="rounded-xl -mt-10" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title animate__animated animate__bounceInDown">Buy a industrial facilities</h2>
    <p>With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full animate_animated animate__bounceInRight ">Find A Industrial</button>
    </div>
  </div>
</div>
      </div>
   </div>
    );
};

export default Service;