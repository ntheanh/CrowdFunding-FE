import React from "react"

import SimpleImageSlider from "react-simple-image-slider"

import imgOne from "../../img/hoan-canh-gioi-thieu.jpg"
import imgTwo from "../../img/anh1.jpg"
import imgThree from "../../img/slide2.jpg"

const Slide = () => {
  const images = [
    {
      url: imgOne
    },
    {
      url: imgTwo
    },
    {
      url: imgThree
    }
    // Thêm các mục khác (nếu có)
  ]
  return (
    <>
      <div className="relative w-full" style={{ paddingBottom: "30%" }}>
        <SimpleImageSlider
          width="100%"
          height="100%"
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          duration={0.5}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          objectFit="contain"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[##0066CC] bg-opacity-40 "></div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <p className="mx-auto">
            <span className="text-white font-bold text-4xl text-center">
              Nền tảng gây quỹ cộng đồng trực tuyến
            </span>
            Kết nối gây quỹ và ủng hộ trực tuyến tiện lợi, tin cậy và minh bạch
          </p>
        </div> */}
      </div>
    </>
  )
}

export default Slide
