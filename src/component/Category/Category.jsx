import React, { useEffect, useState } from "react"
import ProductSlider from "../ProductSlider/ProductSlider"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../features/category/categorySlice"
import { getProductCategory } from "../../features/product/productSlice"
import { useNavigate } from "react-router-dom"

const Category = () => {
  const navigate = useNavigate()
  const [activeComponent, setActiveComponent] = useState(1)

  const dispatch = useDispatch()

  const categoryState = useSelector((state) => state?.category?.category?.data)
  console.log("categoryState", categoryState)

  const productCate = useSelector(
    (state) => state?.product?.productCate?.data[0]
  )

  const products = productCate?.attributes?.products?.data
  console.log("productsss", products)

  useEffect(() => {
    dispatch(getAllCategory())
    dispatch(getProductCategory(1))
  }, [dispatch])

  const handleClickCategory = (id) => {
    setActiveComponent(id)
    dispatch(getProductCategory(id))
  }
  const handleClick = () => {
    navigate("/du-an")
  }
  return (
    <div className="py-10">
      <div className="pt-6">
        <ul className="flex items-center justify-center">
          {categoryState?.map((brand) => (
            <li
              key={brand.id}
              className={`font-medium text-2xl mx-3 py-1 cursor-pointer hover:text-main ${
                activeComponent === brand.id ? " border-main border-b-4 " : ""
              }`}
              onClick={() => handleClickCategory(brand.id)}
            >
              {brand.attributes.benefactorsName}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full px-28 m-auto py-10 border-b-2 border-text">
        <ProductSlider products={products} />
        <div className="flex justify-center text-lg items-center mt-12">
          <a
            href=""
            className="text-main font-semibold text-lg"
            onClick={() => handleClick()}
          >
            Xem tất cả
          </a>
        </div>
      </div>
    </div>
  )
}

export default Category
