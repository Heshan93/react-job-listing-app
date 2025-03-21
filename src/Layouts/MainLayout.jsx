  import { Outlet } from 'react-router-dom';
  import React from 'react';
  import Navbar from "../components/Navbar";
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Footer from "../components/footer";

  const MainLayout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <ToastContainer/>
        <Footer />
      </div>
    );
  };

  export default MainLayout;
