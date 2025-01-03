import React, { useContext } from 'react';
import { TextContext } from '../Athintication/Athintication';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const UpdateProfile = () => {
    const {setUserInfo}=useContext(TextContext)
    const update=(e)=>{
        e.preventDefault()
      
      
        const name=e.target.name.value
        const imgurl =e.target.imgurl.value
       
        setUserInfo(name,imgurl)
        // toast.success("Profile updated successfully")
      

    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto ">
              <ToastContainer />
            <Helmet>

               
               <title>Update  Profile</title>
             
           </Helmet>
        <h1 className="text-3xl font-bold text-center text-indigo-600">Update Profile</h1>
        {/* Input fields and the form started */}
        <form onSubmit={update} className="space-y-6">
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                    Your name
                </label>
                <input type="text" name="name" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="password" className="block ">
                   Photo Url
                </label>
                <input type="text" name="imgurl" id="password" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
               
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                Submit
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                    Let&apos;s go
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            </button>
        </form>
    
       
       
    </div>
    );
};

export default UpdateProfile;