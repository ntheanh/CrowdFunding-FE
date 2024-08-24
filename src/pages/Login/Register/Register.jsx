import React, { useState } from "react"
import { GrSecure } from "react-icons/gr"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../../component/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../features/auth/authSlice"

// import { TiTick } from "react-icons/ti"
// import { loginUser } from "../../../features/auth/authSlice"
// import { getProductCart } from "../../../features/cart/cartSlice"

const Register = () => {
  const initialUser = { username: "", email: "", password: "", phone: null }
  const [user, setUser] = useState(initialUser)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/sign-in")
  }

  const handleRegister = async () => {
    // e.preventDefault();
    await dispatch(registerUser(user))
    navigate("/sign-in")
  }

  const handleUserChange = ({ target }) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
  }
  console.log(user)

  // return (
  //   <div className="py-16 w-10/12 m-auto">
  //     <div className="w-8/12 m-auto mt-16">
  //       <div className="text-center">
  //         <h1 className="text-4xl font-bold">Create my account</h1>
  //         <p className="text-sm my-3">
  //           Longines gives you an extraordinary access to a world of products,
  //           experts and services. Don't wait any longer and create your account
  //           to take advantage of these many advantages.
  //         </p>
  //         <h3 className="text-sm border p-3 border-text rounded-full">
  //           For any assistance, please contact +84 393 053 290 or
  //           junxi050801@gmail.com
  //         </h3>
  //       </div>

  //       <div className="mt-8">
  //         <form>
  //           <div className="flex justify-around">
  //             <div className="w-1/2 mr-3">
  //               <div className="mb-4">
  //                 <label className="text-sm text-text mt-4 ml-4">
  //                   FullName
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="username"
  //                   value={user.username}
  //                   onChange={handleUserChange}
  //                   className="border border-text w-full p-3 px-4 my-2 rounded-full"
  //                   placeholder="John One"
  //                 ></input>
  //               </div>

  //               <div className="mb-4">
  //                 <label className="text-sm text-text mt-4 ml-4">
  //                   PhoneNumber
  //                 </label>
  //                 <input
  //                   type="number"
  //                   name="phone"
  //                   value={user.phone}
  //                   onChange={handleUserChange}
  //                   className="border border-text w-full p-3 px-4 my-2 rounded-full"
  //                   placeholder="0909***999"
  //                 ></input>
  //               </div>
  //             </div>

  //             <div className="w-1/2 ml-3">
  //               <div className="mb-4">
  //                 <label className="text-sm text-text mt-4 ml-4">
  //                   Email address
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="email"
  //                   value={user.email}
  //                   onChange={handleUserChange}
  //                   className="border border-text w-full p-3 px-4 my-2 rounded-full"
  //                   placeholder="example@gmail.com"
  //                 ></input>
  //               </div>

  //               <div className="mb-4">
  //                 <label className="text-sm text-text mt-4 ml-4">
  //                   Password
  //                 </label>
  //                 <input
  //                   type="password"
  //                   name="password"
  //                   value={user.password}
  //                   onChange={handleUserChange}
  //                   className="border border-text w-full p-3 px-4 my-2 rounded-full"
  //                   placeholder="........"
  //                 ></input>
  //               </div>
  //             </div>
  //           </div>
  //         </form>
  //       </div>

  //       <div className="flex items-center">
  //         <span>
  //           <GrSecure className="w-8 h-8 mr-2" />
  //         </span>
  //         <div>
  //           <h3 className="text-sm">Anti-Robot Verification</h3>
  //           <Link>
  //             <h3 className="text-sm font-semibold">
  //               Click to start verification
  //             </h3>
  //           </Link>
  //         </div>
  //       </div>

  //       <div className="mt-6">
  //         <div className="flex items-center">
  //           <input type="checkbox" className="w-4 h-4 mx-2 mr-4"></input>
  //           <h3 className="text-sm">
  //             I want to create an account with Longines and accept Terms and
  //             Conditions
  //           </h3>
  //         </div>
  //         <div className="flex items-center">
  //           <input type="checkbox" className="w-4 h-4 mx-2 mr-4"></input>
  //           <h3 className="text-sm">
  //             I have read and understood the Privacy Policy
  //           </h3>
  //         </div>

  //         <div className="flex justify-between items-center">
  //           <div className="w-1/5 h-12 mt-4" onClick={() => handleRegister()}>
  //             <Button name="Create account" />
  //           </div>
  //           <Link to="/sign-in">
  //             <ins>
  //               <h3>I already have an account</h3>
  //             </ins>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="py-12 m-auto">
      <div className="text-center mt-10 pb-14">
        <h1 className="text-4xl font-bold">Đăng ký tài khoản HopeFund</h1>
      </div>
      <div className="flex w-9/12 m-auto flex-row-reverse">
        <div className="flex-3 mx-2 m-auto rounded-xl relative overflow-hidden">
          <div className="relative">
            <div className="blurBg">
              <img
                className="object-cover w-"
                src="https://givenow.vn/wp-content/themes/funlin-progression-child/images/login-default.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[40%] left-[18%]">
              <h2 className="font-bold text-white text-3xl mb-2">
                Chào mừng bạn quay lại
              </h2>
              <h3 className="font-semibold text-white text-lg">
                Bạn đã đăng ký tài khoản? Đăng nhập để trải nghiệm nhé
              </h3>
              <div className="w-1/2 h-12 mt-8" onClick={() => handleClick()}>
                <Button name="Đăng nhập" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white mx-3 rounded-xl p-5">
          <form>
            <div className="flex flex-col ">
              <div className="mb-4">
                <label className="text-sm text-text mt-4 ml-4">
                  Tên tài khoản
                </label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleUserChange}
                  className="border border-text w-full p-3 px-4 my-2 rounded-full"
                  placeholder="Nhập tên tài khoản "
                ></input>
              </div>

              <div className="mb-4">
                <label className="text-sm text-text mt-4 ml-4">
                  Số điện thoại
                </label>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleUserChange}
                  className="border border-text w-full p-3 px-4 my-2 rounded-full"
                  placeholder="0909***999"
                ></input>
              </div>

              <div className="mb-4">
                <label className="text-sm text-text mt-4 ml-4">Email</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleUserChange}
                  className="border border-text w-full p-3 px-4 my-2 rounded-full"
                  placeholder="example@gmail.com"
                ></input>
              </div>

              <div className="mb-4">
                <label className="text-sm text-text mt-4 ml-4">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleUserChange}
                  className="border border-text w-full p-3 px-4 my-2 rounded-full"
                  placeholder="********"
                ></input>
              </div>
            </div>
          </form>

          <div className="flex items-center justify-center ">
            <div className="w-1/3 h-12 mt-4" onClick={() => handleRegister()}>
              <Button name="Đăng ký" />
            </div>
          </div>
          <h4 className="text-sm mt-4 text-center">
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <span>
              <a href="" className="text-main">
                điều khoản HopeFund
              </a>
            </span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Register
