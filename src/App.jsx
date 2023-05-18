import React from 'react';
import './app.scss'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';
import Home from './pages/home/home';
import Add from './pages/add/Add';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/gig';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Orders from './pages/orders/orders';
import MyGigs from './pages/myGigs/myGigs';


import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

function App() {

  const Layout = () =>{
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/gigs",
          element : <Gigs/>
        },
        {
          path : "/gig/:id",
          element : <Gig/>
        },
        {
          path : "/mygigs",
          element : <MyGigs/>
        },
        {
          path : "/orders",
          element : <Orders />
        },
        {
          path : "/messages",
          element : <Messages />
        },
        {
          path : "/add",
          element : <Add />
        },
        {
          path : "/message/:id",
          element : <Message />
        },
      ]
    },
  ]);
  
  return (
    
    <div >
    <RouterProvider router={router} />
      
      </div>
  );
 
}

export default App
