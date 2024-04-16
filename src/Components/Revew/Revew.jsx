import React from 'react';

const Revew = () => {
    return (
        <section className="my-8 mt-40">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 md:w-[80%]">
            <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            <div data-aos="flip-left" className="flex flex-col items-center mx-12 lg:mx-0">
                <div className="relative text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    <p className="px-6 py-1 text-lg italic">I've been a customer of <span className='text-green-500'>CommercialHub</span> Company for over two years now, and I continue to be impressed with their exceptional service. The staff is always friendly and knowledgeable, and they go above and beyond to ensure customer satisfaction. I recently had an issue with my order, and they resolved it swiftly and courteously. Highly recommend this company for their reliability and professionalism!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-violet-400"></span>
                <p>Leroy Jenkins</p>
            </div>
            <div data-aos="flip-left" className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                <div className="relative text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                        <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    <p className="px-6 py-1 text-lg italic"><span className='text-green-500'>CommercialHub</span> Company truly sets the bar high when it comes to quality products and customer care. I've made multiple purchases from them, ranging from small items to larger investments, and each time I've been met with prompt delivery and excellent communication. Their attention to detail and commitment to customer service are commendable. I wouldn't hesitate to endorse them to anyone looking for a trustworthy and dependable business.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                        <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-violet-400"></span>
                <p>John Abraham</p>
            </div>
        </div>
    </section>
    );
};

export default Revew;