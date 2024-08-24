import React, { useEffect } from "react"
import Slide from "../../component/Slider/Slide"

import Category from "../../component/Category/Category"

import Blogs from "../../component/Blogs/Blogs"
import { useDispatch, useSelector } from "react-redux"
import {
  getCollectionId,
  getCollections
} from "../../features/collection/collectionSlice"
import { getPriceEth } from "../../features/currencyConverter/currencyConverterSlice"

const Home = () => {
  const dispatch = useDispatch()

  const collectionState = useSelector(
    (state) => state?.collection?.collection?.data
  )

  useEffect(() => {
    dispatch(getCollections())
  }, [])

  useEffect(() => {
    dispatch(getPriceEth())
  }, [])

  return (
    <div className="home ">
      <div className="">
        <Slide />
      </div>
      <div className="product-slider ">
        <Category />
      </div>

      <div className=" m-auto p-10 ">
        <Blogs />
      </div>
    </div>
  )
}

export default Home
