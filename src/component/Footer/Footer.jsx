import React from "react"
import { GiLuckyFisherman } from "react-icons/gi"

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center space-x-1 ">
        <div className="border-t-4 border-red-500 flex-1"></div>
        <div className="border-t-4 border-orange-500 flex-1"></div>
        <div className="border-t-4 border-yellow-500 flex-1"></div>
        <div className="border-t-4 border-green-500 flex-1"></div>
        <div className="border-t-4 border-blue-500 flex-1"></div>
        <div className="border-t-4 border-indigo-500 flex-1"></div>
        <div className="border-t-4 border-violet-500 flex-1"></div>
      </div>

      {/* <div className="flex ">
        <div className="w-1/5 flex flex-col justify-center items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 inline-block text-transparent bg-clip-text">
            HopeFund
          </span>
          <div className="rounded-full h-full w-12">
            <GiLuckyFisherman className="rounded-full m-auto h-full  w-12 cursor-pointer text-main " />
          </div>
        </div>
        <h2 className="text-xl font-semibold">
          Nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch.
        </h2>
      </div> */}

      <footer class="w-full text-white bg-[#2A4772] body-font py-5">
        <div class="container flex flex-col flex-wrap px-5 pb-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap m-auto w-10/12">
          <div className="w-1/5 flex flex-col justify-center items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 inline-block text-transparent bg-clip-text">
              HopeFund
            </span>
            <div className="rounded-full h-full w-12">
              <GiLuckyFisherman className="rounded-full m-auto h-full  w-12 cursor-pointer text-main " />
            </div>
          </div>
          <h2 className="text-xl font-semibold">
            Nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh
            bạch.
          </h2>

          <div class=" flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <ul className="flex justify-center gap-6 text-base font-semibold">
              <li>
                <a href="">Giới thiệu</a>
              </li>
              <li>
                <a href="">Điều khoản và điều kiện</a>
              </li>
              <li>
                <a href="">Tin tức</a>
              </li>
              <li>
                <a href="">Báo chí</a>
              </li>
            </ul>
            <div className="flex flex-col text-left items-start pl-[426px] mx-auto mt-5">
              <p>Hotline: 0865492101 </p>
              <p>Email: nvanh@gmail.com</p>
              <p>Địa chỉ: Thạnh Mỹ, Nam Giang, Quảng Nam</p>
            </div>
          </div>
        </div>
        <div class="container  mx-auto mt-5">
          <p class="text-sm text-white capitalize xl:text-center">
            © 2024 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
