import React, { useState } from "react"
import ReactDOM from "react-dom"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { deleteProjectSlice } from "../../../features/project/projectSlice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const DeleteModal = ({ isShowingDelete, hide }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const product = useSelector(
    (state) => state?.product?.productDetails?.data?.[0]
  )
  console.log("product", product)

  const handleDelete = async () => {
    if (product?.id) {
      await dispatch(deleteProjectSlice(product.id))
      await hide()
      await toast.success("Xoá dự án thành công")
      await navigate("/du-an")
    }
  }
  return isShowingDelete
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
                    {product?.attributes?.productName}
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
                <div class="flex flex-col p-4 md:p-5">
                  <p class="text-center my-3">
                    Bạn có chắc chắn muốn xoá dự án này không?
                  </p>
                  <button
                    type="submit"
                    onClick={handleDelete}
                    class="text-white flex w-full justify-center items-center bg-main  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl  px-5 py-2.5 text-center "
                  >
                    <MdDelete />
                    Xoá dự án
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export default DeleteModal
