import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  checkWalletConnection,
  connectWallet
} from "../../features/metamask/metamaskSlice"
import { Link, useNavigate } from "react-router-dom"
import { CgProfile } from "react-icons/cg"
import { FiSearch } from "react-icons/fi"
import { GiLuckyFisherman } from "react-icons/gi"
import Button from "../Button/Button"
import "./Header.scss"
import { toast } from "react-toastify"
import { RiBnbLine } from "react-icons/ri"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { getCollections } from "../../features/collection/collectionSlice"
import { getAllCategory } from "../../features/category/categorySlice"
import { IoLogInOutline } from "react-icons/io5"
import { getDataUser } from "../../features/auth/authSlice"
import { baseURLImg } from "../../utils/api"

const Headder = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCollections())
    dispatch(getAllCategory())
  }, [])

  useEffect(() => {
    const checkConnection = async () => {
      const isConnected = await dispatch(checkWalletConnection()).unwrap()
      if (isConnected) {
        // Update UI or state to reflect connected status
      }
    }
    checkConnection()
  }, [dispatch])

  const userDataState = useSelector((state) => state?.auth?.dataUser)
  const userData = userDataState?.[0]
  // console.log("userDataState", userDataState)

  const userRole = userData?.role?.name
  const userName = userData?.username
  const userEmail = userData?.email
  const userAvatarUrl = userData?.avatar?.[0]?.url

  useEffect(() => {
    dispatch(getDataUser(userId))
  }, [])

  const user = JSON.parse(localStorage.getItem("customer"))
  const userId = user?.user.id
  // console.log(userId)

  const walletInfo = useSelector((state) => state.metamask.walletInfo)
  const walletAddress = walletInfo?.walletAddress
  const balance = walletInfo?.balance
  const collections = useSelector(
    (state) => state?.collection?.collection?.data
  )
  const categories = useSelector((state) => state?.category?.category?.data)

  const handleMouseEnter = () => {
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setDropdownOpen(false)
  }

  const handleConnect = () => {
    if (token) {
      dispatch(connectWallet())
    } else {
      toast.info("Please log in to connect your wallet!")
    }
  }

  const handleLogout = async () => {
    await localStorage.clear()
    await navigate("/")
    toast.success("Đăng xuất thành công")
  }

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between w-full mb-2 px-32 shadow-lg h-20 bg-white">
        <div className="w-1/5 flex flex-col justify-center items-center mb-2">
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 inline-block text-transparent bg-clip-text">
            HopeFund
          </span>
          <div className="rounded-full ">
            <GiLuckyFisherman className="rounded-full m-auto h-1/2  w-10 cursor-pointer text-main " />
          </div>
        </div>
        <div>
          <ul className="flex justify-center gap-6 text-[#7a7a7a] text-lg font-semibold ">
            <li className="m-auto hover:text-main ">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="m-auto hover:text-main">
              <Link to="/du-an">Dự án</Link>
            </li>
            <li className="m-auto hover:text-main">
              <Link to="/ve-chung-toi">Về chúng tôi</Link>
            </li>
            <li className="m-auto hover:text-main">
              <Link to="/ung-ho-hopefund">Ủng hộ HopeFund</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/4 py-1 flex items-center gap-6 justify-between text-center text-sm font-semibold">
          {walletAddress ? (
            <div className="rounded-3xl shadow-lg h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
              <div className="rounded-full shadow-lg m-auto h-full px-5 text-white w-full">
                <div className="flex items-center">
                  <RiBnbLine className="w-5 h-5 mr-2" />
                  <h3 className="text-base">{balance.slice(0, 3)} BNB</h3>
                </div>
                <h4>
                  {walletAddress.slice(0, 7) + "..." + walletAddress.slice(-4)}
                </h4>
              </div>
            </div>
          ) : (
            <>
              <div onClick={handleConnect} className="h-10 m-auto w-5/12 ">
                <Button name="Kết nối ví" onClick={handleConnect} />
              </div>
            </>
          )}
          {userRole === "super" && (
            <div
              onClick={() => setShowCart(true)}
              className="h-10 m-auto w-5/12 "
            >
              <Button name="Thêm dự án" />
            </div>
          )}
          {token ? (
            <div
              className="icon-dropdown m-auto cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                <CgProfile className="h-6 w-6 m-auto" />
                {isDropdownOpen && (
                  <div className="m-auto">
                    <div className="dropdown-content pt-9 bg-none">
                      <div className="shadow-md bg-gray-100 rounded-lg p-4 w-56">
                        <div className="flex items-center border-b pb-4 border-text">
                          <div>
                            <img
                              src={`${baseURLImg}` + `${userAvatarUrl}`}
                              className="w-10 h-10 rounded-full"
                            ></img>
                          </div>
                          <div className="text-left ml-4">
                            <h3 className="font-bold text-base">{userName}</h3>
                            <h3 className="text-xs">{userEmail}</h3>
                          </div>
                        </div>
                        <div className="text-gray-600 py-2 border-b border-text">
                          <Link to="/user/profile">
                            <div className="flex items-center py-2">
                              <span>
                                <CgProfile className="w-5 h-auto mr-4" />
                              </span>
                              <h3>Xem trang cá nhân</h3>
                            </div>
                          </Link>
                        </div>

                        <div className="mt-2 text-gray-600">
                          <Link>
                            <div
                              className="flex items-center py-2"
                              onClick={() => handleLogout()}
                            >
                              <span>
                                <IoLogInOutline className="w-5 h-auto mr-4" />
                              </span>
                              <h3>Đăng xuất</h3>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </span>
            </div>
          ) : (
            <div
              className="icon-dropdown m-auto cursor-pointer relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                <CgProfile className="h-8 w-8 m-auto " />
                {isDropdownOpen && (
                  <div className="dropdown-content ">
                    <ul className="flex flex-col justify-center items-center p-3 absolute top-8 right-[-44px] bg-white shadow-lg rounded-md w-[208px] ">
                      <li>
                        <Link to="sign-in">Đăng nhập</Link>
                      </li>
                      <li>
                        <Link to="sign-up">Đăng ký</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>
      </div>
      {showCart && (
        <ShoppingCart setShowCart={setShowCart} showCart={showCart} />
      )}
    </>
  )
}

export default Headder
