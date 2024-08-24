import React, { useEffect, useState } from "react"
import men from "../../img/men.avif"
import { BsSearch } from "react-icons/bs"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { AiOutlineDownCircle } from "react-icons/ai"
import Product from "../../component/Product/Product"
import { useDispatch, useSelector } from "react-redux"
import { getCollectionId } from "../../features/collection/collectionSlice"
import { baseURLImg } from "../../utils/api"
import { useParams } from "react-router-dom"
import { getProductCollection } from "../../features/product/productSlice"

const Collection = () => {
  const [priceRange, setPriceRange] = useState([50, 300])
  const [isOpenPrice, setOpenPrice] = useState(false)
  const [isOpenSort, setOpenSort] = useState(false)

  const [selectedOption, setSelectedOption] = useState("")

  const dispatch = useDispatch()
  const { id } = useParams()

  const currentCollection = useSelector(
    (state) => state?.collection?.currentCollection?.data[0]
  )

  const Collection = useSelector((state) => state?.collection?.collection?.data)
  console.log("Collection", Collection)

  const productCollection = useSelector(
    (state) => state?.product?.productCollection?.data[0]
  )

  const product = productCollection?.attributes?.products?.data

  useEffect(() => {
    dispatch(getCollectionId(id))
    dispatch(getProductCollection(id))
  }, [id])

  const handlePriceRangeChange = (value) => {
    setPriceRange(value)
  }

  const handleClickPrice = () => {
    setOpenPrice(!isOpenPrice)
  }

  const handleClickSort = () => {
    setOpenSort(!isOpenSort)
  }

  const options = ["Volvo", "Saab", "Mercedes", "Audi"]

  const selectOption = (option) => {
    setSelectedOption(option)
    setOpenSort(false)
  }

  return (
    <div className="py-12 px-16 w-[1280px] m-auto">
      <div className="flex justify-end items-center">
        <div className="w-full my-10">
          <h1 className="text-4xl font-bold text-center uppercase">
            {currentCollection?.attributes?.collectionName}
          </h1>
        </div>
      </div>
      <div className="flex justify-between align-center">
        <div className=" w-full m-auto">
          <div className="grid grid-cols-3 gap-12 mt-10">
            {product?.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
