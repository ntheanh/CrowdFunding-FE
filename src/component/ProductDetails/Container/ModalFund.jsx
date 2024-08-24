import React, { useState } from "react"
import ReactDOM from "react-dom"
import { sendTransaction } from "../../../utils/utils"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { paymentService } from "../../../features/product/paymentService"

const ModalFund = ({ isShowing, hide, productId }) => {
  const [price, setPrice] = useState(0)
  const [paymentName, setPaymentName] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const product = useSelector(
  //   (state) => state?.product?.productDetails?.data?.[0]?.id
  // )
  // console.log("product", product)
  const handlePaymentMetamask = async (amount) => {
    try {
      const transactionHash = await sendTransaction(amount)
      console.log(transactionHash, paymentName, price, productId)
      if (transactionHash) {
        await dispatch(
          paymentService.addPayment({
            paymentName,
            price,
            productId
          })
        )
      }
    } catch (error) {
      console.error("Error during payment:", error)
    }
  }

  const handleSubmit = () => {
    handlePaymentMetamask(price)
  }

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            id="default-modal"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex   bg-black bg-opacity-50"
          >
            <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow-md ">
                <div class="flex items-center justify-between p-4 md:p-5 ">
                  <h3 class="text-xl font-semibold text-black ">
                    Thông tin quyên góp
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={hide}
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <div class="p-4 md:p-5">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-black "
                      >
                        Họ tên người quyên góp
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Tên người quyên góp"
                        required=""
                        value={paymentName}
                        onChange={(e) => setPaymentName(e.target.value)}
                      />
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="number"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Số điện thoại"
                        required=""
                      />
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Đại chỉ
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Địa chỉ"
                        required=""
                      />
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div class="col-span-2 flex justify-between items-center">
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Số tiền quyên góp (BNB)
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="text-white flex w-full justify-center items-center bg-main  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl  px-5 py-2.5 text-center "
                    onClick={() => handleSubmit()}
                  >
                    <svg
                      class="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Quyên góp
                  </button>
                  <p className="flex justify-center pt-5">
                    Chúng tôi xác nhận là bạn đã đồng ý với&nbsp;
                    <a href="" className="text-main">
                      điều khoản
                    </a>
                    &nbsp; của chúng tôi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export default ModalFund
