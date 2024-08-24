import React, { useState, useEffect } from "react"
import Header from "../component/Header/Header"
import { Outlet, useLocation } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bgSlide from "../../src/img/project_cover_with_overlay.png"
import Footer from "../component/Footer/Footer"
import Breadcrumb from "./Breadcrumb"

const Layout = () => {
  const location = useLocation()
  const showSlide = ["/du-an", "/ve-chung-toi", "/ung-ho-hopefund"].includes(
    location.pathname
  )

  return (
    <div className="font-sans w-full ">
      <Header />
      {showSlide && (
        <>
          <div className="w-full relative">
            <img src={bgSlide} alt="" className="w-full" />
            <Breadcrumb path={location.pathname} />
          </div>
        </>
      )}

      <Outlet />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Layout
