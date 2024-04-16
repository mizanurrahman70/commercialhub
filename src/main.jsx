import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Error from './Components/Error Massege/Error';
import Home from './Components/Home/Home';
import Login from './Components/Login page/Login';
import Regester from './Components/Regester/Regester';
import CardDtls from './Components/Card Dateils/CardDtls';
import Athintication from './Components/Athintication/Athintication';
import Profile from './Components/profile/Profile';
import UpdateProfile from './Components/Update Profile/UpdateProfile';
import Companey from './Components/Companey Info/Companey';
import PrivetRout from './Components/Privete Router/PrivetRout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
       path:'/updateprofile',
       element:<UpdateProfile></UpdateProfile>
      },{
        path:'/companey',
        element:<PrivetRout><Companey> </Companey></PrivetRout>
      }
      ,
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singup',
        element:<Regester></Regester>
      },
      {
        path:`/:id`,
        loader:()=>fetch('../Food.json'),
        element:<PrivetRout><CardDtls></CardDtls></PrivetRout>
      },
      
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Athintication>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </Athintication>
  </React.StrictMode>,
)
