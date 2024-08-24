import React, { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import axios from "axios"
import { baseURL, baseURLImg } from "../../../utils/api"
import { updateProjectSlice } from "../../../features/project/projectSlice"

const EditModal = ({ isShowingEdit, hide, product }) => {
  const dispatch = useDispatch()

  const collection = useSelector((state) => state?.collection?.collection?.data)


  const imageUrl = product?.attributes?.productImg?.data?.[0]?.attributes?.url

  const [projectName, setProjectName] = useState(
    product?.attributes?.productName
  )
  const [projectPrice, setProjectPrice] = useState(
    product?.attributes?.productPrice
  )
  const [projectCollection, setProjectCollection] = useState(product.collection)
  const [projectDesc, setProjectDesc] = useState(
    product?.attributes?.productDesc
  )
  const [selectedImage, setSelectedImage] = useState(
    product?.attributes?.productImg?.data[0]?.attributes?.url
  )

  const [imageFile, setImageFile] = useState(null)

  useEffect(() => {
    if (isShowingEdit) {
      setProjectName(product.attributes.productName)
      setProjectDesc(product.attributes.productDesc)
      setProjectPrice(product.attributes.productPrice)
      setProjectCollection(product.attributes.collection)
      setSelectedImage(product.attributes.productImg.data[0].attributes.url)
    }
  }, [isShowingEdit, product])

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImageFile(file)
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let imageId = product?.attributes?.productImg?.data[0]?.id

    if (imageFile) {
      const formData = new FormData()
      formData.append("files", imageFile)

      try {
        const uploadResponse = await axios.post(`${baseURL}upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        imageId = uploadResponse.data[0].id
      } catch (error) {
        console.error("Error uploading image:", error)
        return
      }
    }

    const projectData = {
      id: product.id,
      productName: projectName,
      productDesc: projectDesc,
      productPrice: projectPrice,
      collection: projectCollection,
      productImg: imageId
    }

    try {
      await dispatch(updateProjectSlice(projectData))
      toast.success("Cập nhật dự án thành công")
      hide()
      window.location.reload()
    } catch (error) {
      console.error("Error updating project:", error)
      toast.error("Cập nhật dự án thất bại")
    }
  }

  if (!isShowingEdit) return null
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="flex flex-col bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 max-h-full overflow-y-auto  p-6 ">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-black">
              Sửa dự án
            </h2>
            <span onClick={hide}>
              <AiOutlineClose className="w-6 h-auto ml-3 cursor-pointer" />
            </span>
          </div>

          <form action="#" onSubmit={handleSubmit}>
            <div className="bg-white p-2 rounded shadow-md w-[50%] max-w-sm mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Hình ảnh dự án
              </h2>
              <div className="mb-4 flex justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {selectedImage && (
                <div className="mb-4 flex justify-center">
                  <img
                    src={
                      selectedImage instanceof Blob
                        ? selectedImage
                        : `${baseURLImg}${selectedImage}`
                    }
                    alt="Selected"
                    className="w-1/2 h-auto rounded"
                  />
                </div>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mt-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Tên dự án
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nhập tên dự án"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Mục tiêu dự án (BNB)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="2999"
                  required
                  value={projectPrice}
                  onChange={(e) => setProjectPrice(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Danh mục
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={projectCollection}
                  onChange={(e) => setProjectCollection(e.target.value)}
                >
                  {collection.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item?.attributes?.collectionName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nội dung
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nội dung dự án"
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-xl  font-bold text-center text-white bg-main rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Cập nhật dự án
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditModal
