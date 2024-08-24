import React, { useEffect, useState } from "react"
import "rc-slider/assets/index.css"
import Product from "../../component/Product/Product"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../features/product/productSlice"
import { getCollections } from "../../features/collection/collectionSlice"
import { getAllCategory } from "../../features/category/categorySlice"
import { getPriceEth } from "../../features/currencyConverter/currencyConverterSlice"

import { Link, useNavigate } from "react-router-dom"

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(9)
  const [dataProduct, setDataProduct] = useState()

  const products = useSelector((state) => state?.product?.products?.data)
  console.log("products", products)

  const dispatch = useDispatch()

  useEffect(() => {
    if (Array.isArray(products)) {
      const sortedOrders = products.slice().sort((a, b) => b.id - a.id)
      setDataProduct(sortedOrders)
    } else {
      console.error("orderState không phải là một mảng hoặc không tồn tại.")
    }
  }, [products])

  useEffect(() => {
    dispatch(getProduct())
    dispatch(getCollections())
    dispatch(getAllCategory())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPriceEth())
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const collection = useSelector((state) => state?.collection?.collection?.data)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const payments = useSelector((state) => state?.payment?.payment?.data || [])

  return (
    <div className="py-12 px-16 w-[1280px] mx-auto">
      <div className=" text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-main">
          Các hoàn cảnh gây quỹ
        </h1>
        <span className="text-[#8A797E] font-medium">
          Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.
        </span>
        <div className="flex items-center justify-center my-10 gap-4 ">
          {collection &&
            collection.map((item) => (
              <Link
                to={`/collection/${item.id}`}
                className="text-main font-bold p-1 bg-gray-200 rounded-md"
                key={item.id}
              >
                {item?.attributes?.collectionName}
              </Link>
            ))}
        </div>
      </div>
      <div className="flex mt-6 justify-between align-center">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-12">
            {currentProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}
const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className="mt-8">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 border rounded ${
                currentPage === number
                  ? "bg-main text-white"
                  : "bg-white text-main"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Shop
