import React, { useEffect, useState } from "react"
import pg from "../../../img/banner.jpg"
import { useDispatch, useSelector } from "react-redux"
import { getDataUser, updateUser } from "../../../features/auth/authSlice"
import { baseURLImg } from "../../../utils/api"
import { getOrderUser } from "../../../features/order/orderSlice"
import { handleSpent } from "../../../utils/utils"

import {
  deleteAddress,
  getAddresShipsUser
} from "../../../features/address/addressSlice"

const ProfileDetail = () => {
  const dispatch = useDispatch()
  const userDataState = useSelector((state) => state?.auth?.dataUser)
  const userData = userDataState?.[0]

  const [editableUserData, setEditableUserData] = useState({
    username: "",
    phone: "",
    email: ""
  })

  useEffect(() => {
    if (userData) {
      setEditableUserData({
        username: userData.username || "",
        phone: userData.phone || "",
        email: userData.email || ""
      })
    }
  }, [userData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditableUserData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSaveChanges = async () => {
    await dispatch(
      updateUser({ userId: userData.id, userData: editableUserData })
    )
    dispatch(getDataUser(userData.id))
  }

  const user = JSON.parse(localStorage.getItem("customer"))
  const userId = user?.user.id

  const [spent, setSpent] = useState()
  const [active, setActive] = useState(1)
  const [showAddShip, setShowAddShip] = useState(false)

  const orderState = useSelector((state) => state?.order?.orderUser?.data)

  const addressUserState = useSelector(
    (state) => state?.address?.addressUser?.data
  )

  useEffect(() => {
    dispatch(getDataUser(userId))
    dispatch(getOrderUser(userId))
    dispatch(getAddresShipsUser(userId))
  }, [])

  useEffect(() => {
    setSpent(handleSpent(orderState))
  }, [orderState])

  const handleDeleAddress = async (id) => {
    await dispatch(deleteAddress(id))
    dispatch(getAddresShipsUser(userId))
  }

  return (
    <div className="w-full  text-gray-600 pb-6">
      <div className="flex">
        <div className="w-7/12 mt-4 mr-2 h-auto">
          <div className="bg-white p-4 rounded-xl h-full">
            <h3 className="font-semibold text-2xl">Thông tin cá nhân </h3>
            <div className="mt-2">
              <div>
                <label className="text-base font-medium">Tên người dùng</label>
                <input
                  name="username"
                  className="text-sm px-2 py-2 w-full border border-text rounded-lg mt-2"
                  value={editableUserData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-3">
                <label className="text-base font-medium">Số điện thoại</label>
                <input
                  type="number"
                  name="phone"
                  className="px-2 py-1 w-full border border-text rounded-lg mt-2"
                  value={editableUserData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-3">
                <label className="text-base font-medium">Email</label>
                <input
                  name="email"
                  className="px-2 py-1 w-full border border-text rounded-lg mt-2"
                  value={editableUserData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 ml-2 bg-white rounded-xl mt-4 pb-4 h-auto">
          <div className="relative h-36 ">
            <img src={pg} alt="" className="rounded-t-xl" />
          </div>
        </div>
      </div>
      <button
        className="block px-5 py-3 mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md"
        onClick={handleSaveChanges}
      >
        Cập nhật
      </button>
    </div>
  )
}

export default ProfileDetail
