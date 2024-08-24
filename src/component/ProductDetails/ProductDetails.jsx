import React, { useEffect, useState } from "react"
import Description from "./Container/Description"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductDetails } from "../../features/product/productSlice"
import { baseURLImg } from "../../utils/api"
import { toast } from "react-toastify"
import ListDonates from "./Container/ListDonates"
import useModal from "./Container/useModal"
import ModalFund from "./Container/ModalFund"
import DeleteModal from "./Container/DeleteModal"
import { getAllPayment } from "../../features/product/paymentSlice"
import { CiUser } from "react-icons/ci"
import { FcApproval } from "react-icons/fc"
import EditModal from "./Container/EditModal"
import Button from "../Button/Button"

const ProductDetails = () => {
  const [price, setPrice] = useState(0)
  const { isShowing, toggle } = useModal()
  const { isShowingDelete, toggleDelete } = useModal()
  const [isShowingEdit, setIsShowingEdit] = useState(false)
  const [activeComponent, setActiveComponent] = useState(1)

  const toggleEdit = () => {
    setIsShowingEdit(!isShowingEdit)
  }

  const { id } = useParams()
  const dispatch = useDispatch()

  const product = useSelector(
    (state) => state?.product?.productDetails?.data?.[0]
  )
  console.log("product=====>", product)

  const benefacName = useSelector(
    (state) =>
      state?.product?.productDetails?.data?.[0]?.attributes?.benefactors?.data
        ?.attributes?.benefactorsName
  )

  const productPrice = useSelector(
    (state) =>
      state.product?.productDetails?.data?.[0]?.attributes?.productPrice || 0
  )

  const paymentDetail = useSelector(
    (state) => state?.payment?.payment?.data || []
  )

  console.log("paymentDetail", paymentDetail)

  const totalBacker = paymentDetail.length

  const totalAmountDetail = paymentDetail.reduce(
    (total, payment) => total + (payment.attributes?.price || 0),
    0
  )

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id))
      dispatch(getAllPayment(id))
    }
  }, [id, dispatch])

  const donationPercentage = (totalAmountDetail / productPrice) * 100

  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("customer"))
  const userId = user?.user.id

  const handleActiveComponent = (number) => {
    setActiveComponent(number)
  }
  const userDataState = useSelector((state) => state?.auth?.dataUser)
  const userData = userDataState?.[0]
  const userRole = userData?.role?.name

  const imageUrl = product?.attributes?.productImg?.data?.[0]?.attributes?.url

  const categoryState = useSelector((state) => state?.category?.category?.data)
  // console.log("categoryState", categoryState)
  const beneName = categoryState?.attributes?.benefactorsName
  // console.log("beneName", beneName)

  return (
    <div>
      <section class="pt-10 font-poppins">
        <div class="w-10/12 px-4 mx-auto">
          <div class="flex mb-4 justify-center w-full">
            <div class="mb-8 flex-2">
              <div class="sticky top-0">
                <div class="relative flex justify-center">
                  <a
                    class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </a>
                  <img
                    class="object-contain w-10/12 rounded-xl"
                    src={
                      imageUrl
                        ? `${baseURLImg}${imageUrl}`
                        : "placeholder-image-url"
                    }
                    alt={product?.attributes?.productName || "Product Image"}
                  />

                  <a
                    class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex-2 mx-4">
              <div class="">
                <div class="mb-6 ">
                  <h2 class="max-w-xl mb-6 text-xl font-semibold leading-loose text-black md:text-2xl   pb-6 border-gray-300">
                    {product?.attributes?.productName}
                  </h2>
                </div>

                <div>
                  <div className="bg-[#F9F9F9] p-6 rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          class="object-contain w-16 lg:h-16 rounded-full "
                          src="https://givenow.vn/wp-content/uploads/2024/01/z5081997975933_46566dfd6bafcc7d2feb12b58e0d916d.jpg"
                          alt=""
                        />

                        <span className="text-main font-semibold text-lg ml-6">
                          {benefacName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CiUser />
                        <span>{totalBacker} lượt quyên góp</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <span>Mục tiêu dự án</span>
                      </div>
                      <span className="font-bold text-gray-500">
                        {productPrice} BNB
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 mt-4">
                      <div
                        className="bg-main text-xs font-medium text-main text-center p-1 leading-none rounded-full"
                        style={{
                          width: `${Math.min(donationPercentage, 100)}%`
                        }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2">
                        <span>Đã đạt được</span>
                      </div>
                      <span className="font-bold text-main">
                        {totalAmountDetail.toFixed(2)} BNB
                      </span>
                    </div>
                  </div>
                  {totalAmountDetail >= productPrice ? (
                    <div className="flex items-center justify-center p-4 bg-[#F6F8FE] gap-2 mt-6 rounded-md">
                      <FcApproval style={{ fontSize: "1.5rem" }} />
                      <p className="text-lg font-semibold text-[#6D6E8B]">
                        Hoàn thành mục tiêu
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-10 mt-6">
                      <div className="flex items-center">
                        <input
                          type="number"
                          value={price}
                          onChange={(e) => setPrice(parseFloat(e.target.value))}
                          className="bg-[#f0edeb] py-2 w-[50%] text-center outline-none rounded-md mr-2"
                        />
                        <span className="font-semibold text-gray-500">BNB</span>
                      </div>
                      <button
                        className="block px-5 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-red-700"
                        onClick={toggle}
                      >
                        Quyên góp
                      </button>

                      <ModalFund
                        isShowing={isShowing}
                        hide={toggle}
                        productId={id}
                      />
                      {userRole === "super" && (
                        <div className="flex items-center gap-5">
                          <button
                            type="button"
                            className="inline-block px-5 py-3 bg-red-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-red-700"
                            onClick={toggleDelete}
                          >
                            Xoá
                          </button>
                          <DeleteModal
                            isShowingDelete={isShowingDelete}
                            hide={toggleDelete}
                            product={product}
                          />
                          <button
                            type="button"
                            className="inline-block px-5 py-3 bg-gray-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-red-700"
                            onClick={toggleEdit}
                          >
                            Sửa
                          </button>
                          <EditModal
                            isShowingEdit={isShowingEdit}
                            hide={toggleEdit}
                            product={product}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="my-10">
            <div className="border-b pb-2 border-gray-400 w-full">
              <ul className=" flex justify-center">
                <li
                  onClick={() => handleActiveComponent(1)}
                  className={`py-3 font-medium text-xl mx-6 cursor-pointer ${
                    activeComponent === 1
                      ? "text-gray-800 border-b-2 border-main"
                      : "text-gray-400 hover:text-main"
                  }`}
                >
                  Nội dung
                </li>
                <li
                  onClick={() => handleActiveComponent(2)}
                  className={`py-3 font-medium text-xl mx-6 cursor-pointer ${
                    activeComponent === 2
                      ? "text-gray-800 border-b-2 border-main"
                      : "text-gray-400 hover:text-main"
                  }`}
                >
                  Danh sách ủng hộ
                </li>
              </ul>
            </div>

            {activeComponent === 1 && <Description product={product} />}
            {activeComponent === 2 && (
              <ListDonates paymentDetail={paymentDetail} />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
