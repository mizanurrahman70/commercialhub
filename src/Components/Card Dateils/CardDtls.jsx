import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams,useLoaderData, Link } from 'react-router-dom';

const CardDtls = () => {
    let {id}=useParams()
    const data= useLoaderData()
 
   const persIn=parseInt(id)
   const singleData=data.find(dt=>dt.id===persIn)
   
   const {
    image,
    name,
    description,
    location,
    price,
    area,
    status,
    facilities,
    type
    
    }=singleData
   
    return (
        <div data-aos="fade-down" className="md:w-[50%] gap-10 bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md mt-5 mb-5 md:flex border-green-400">
        {/* Card Image */}
        <Helmet>
               
                <title>Card Detals</title>
              
            </Helmet>
          <div>
          <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={image} alt="card navigate ui" />
          </div>
            {/* Card Heading */}
            <div>
            <div className="space-y-2">
            <h2 className="text-slate-800 font-medium ">Chatagory : <span className='text-orange-300'>{type}</span></h2>
                <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">{name}</h2>
                <h2 className="text-slate-800 ">{description}</h2>
                <p className='text-neutral-400  font-medium'>Location :<span className='bg-green-300 p-1 rounded-3xl ml-2 text-slate-700'>{location}</span></p>
                {/* rating  */}
                <p className='text-neutral-400  font-medium'>Area : <span className='text-slate-700'>{area}</span></p>
                <p className='text-neutral-400  font-medium'>status : <span className='text-slate-700'>{status}</span></p>
                <div className=''>
                    <p className='text-neutral-400  font-medium'>Facilities :</p>
                    {
                        facilities.map(ft=><div className=''><p className='p-1 bg-green-300 rounded-3xl mb-2  font-semibold text-gray-700'># {ft}</p> </div>)
                    }
                </div>
               
                <div className="flex gap-1">
                 
                </div>
                
                
            </div>
            {/* Price and action button */}
            <div className="mt-5 flex justify-around items-center font-medium">
                <h2 className="md:text-xl text-gray-800">{price}</h2>
               <Link to='/'> <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Back</button></Link>
                <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Buy Now</button>
            </div>
            </div>
        </div>
    );
};

export default CardDtls;