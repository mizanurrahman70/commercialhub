import React from 'react';
import Navber from './Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Root = () => {
    return (
       <>
       <Navber></Navber>
       <div className='min-h-[calc(100vh-274px)]'>
       <Outlet></Outlet>
       </div>
       <Footer></Footer>
       </>
    );
};

export default Root;
