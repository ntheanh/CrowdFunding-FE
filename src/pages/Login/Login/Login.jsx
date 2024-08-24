import React, { useEffect, useState } from "react"
import { TiTick } from "react-icons/ti"
import Button from "../../../component/Button/Button"
import { GrSecure } from "react-icons/gr"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getDataUser, loginUser } from "../../../features/auth/authSlice"
import { getProductCart } from "../../../features/cart/cartSlice"

const Login = () => {
  const [user, setUser] = useState({ identifier: "", password: "" })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLocal = JSON.parse(localStorage.getItem("customer"))
  const userId = userLocal?.user.id

  const handleClick = () => {
    navigate("/sign-up")
  }
  // const userData = useSelector((state) => state.user.userData)
  // const userData = useSelector((state) => state?.auth?.dataUser)

  const handleLogin = async () => {
    await dispatch(loginUser(user))
    await dispatch(getDataUser(userId))
    navigate("/")
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
  }

  return (
    <div className="py-12 m-auto">
      <div className="text-center mt-10 pb-14">
        <h1 className="text-4xl font-bold">Đăng nhập vào HopeFund</h1>
      </div>
      <div className="flex w-9/12 m-auto">
        <div className="flex-3 mx-2 rounded-xl relative overflow-hidden">
          <div className="relative">
            <div className="blurBg">
              <img
                className="object-cover w-"
                src="https://givenow.vn/wp-content/themes/funlin-progression-child/images/login-registration.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[40%] left-[18%]">
              <h3 className="font-semibold text-white text-xl">
                Bạn chưa có tài khoản? Tham gia ngày với chúng tôi
              </h3>
              <div className="w-1/2 h-12 mt-8" onClick={() => handleClick()}>
                <Button name="Đăng ký" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1  bg-white mx-3 rounded-xl p-10">
          <h3 className="font-semibold ">Tôi đã có tài khoản</h3>
          <div className="mt-4">
            <form>
              <div className="mb-4">
                <label className="text-sm text-text mt-4 ml-4">Email</label>
                <input
                  className="border border-text w-full p-3 px-4 my-2 rounded-full"
                  placeholder="example@gmail.com"
                  type="email"
                  name="identifier"
                  value={user.identifier}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mb-4">
                <label className="text-sm text-text mt-4 ml-4">Mật khẩu</label>
                <input
                  type="password"
                  className="border border-text w-full p-3 px-4 my-2 rounded-full"
                  placeholder="**********"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                ></input>
              </div>
            </form>
          </div>
          <h4 className="text-sm mt-4 text-center">
            <ins>Quên mật khẩu?</ins>
          </h4>
          <div className="flex justify-center ">
            <div className="w-1/3 h-12 mt-8" onClick={() => handleLogin()}>
              <Button name="Đăng nhập" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
