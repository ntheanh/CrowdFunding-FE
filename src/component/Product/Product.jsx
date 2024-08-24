import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { baseURL, baseURLImg, config } from "../../utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getAllPayment } from "../../features/product/paymentSlice"
import axios from "axios"

const Product = (props) => {
  const [data, setData] = useState({
    products: [],
    productsStats: {}
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get(
          `${baseURL}products?populate=*`,
          config
        )
        console.log("Products Response:", productsResponse.data.data)

        const products = productsResponse.data.data
        const productsStats = {}

        for (const product of products) {
          const productId = product.id

          const paymentsResponse = await axios.get(
            `${baseURL}payments/?filters[product_id][$eq]=${productId}`,
            config
          )
          console.log(
            `Payments Response for Product ID ${productId}:`,
            paymentsResponse.data.data
          )

          const payments = paymentsResponse.data.data
          const totalDonate = payments.reduce(
            (acc, payment) => acc + payment.attributes.price,
            0
          )
          const invoiceCount = payments.length

          console.log(`Total for Product ID ${productId}:`, totalDonate)
          console.log(
            `Invoice Count for Product ID ${productId}:`,
            invoiceCount
          )

          productsStats[productId] = {
            totalDonate,
            invoiceCount
          }
        }

        setData({
          products,
          productsStats
        })

        console.log("Final Data:", {
          products,
          productsStats
        })
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const navigate = useNavigate()
  const product = props.product
  console.log("Product", product)

  const product2 = useSelector((state) => state?.product?.products?.data)
  console.log("product222", product2)

  const payments = useSelector(
    (state) => state.payment?.payments?.[product.id] || []
  )
  console.log("payments", payments)

  const imageUrl = product?.attributes?.productImg?.data?.[0]?.attributes?.url

  const { id } = useParams()
  const dispatch = useDispatch()

  const categoryState = useSelector((state) => state?.category?.category?.data)
  console.log("categoryState", categoryState)
  useEffect(() => {
    if (product.id) {
      dispatch(getAllPayment(product.id))
    }
  }, [dispatch, product.id])
  // const payments = useSelector((state) => state?.payment?.payment?.data || [])

  // const totalAmount = payments.reduce(
  //   (total, payment) => total + (payment.attributes?.price || 0),
  //   0
  // )
  const totalAmount = payments.reduce(
    (total, payment) => total + (payment.attributes?.price || 0),
    0
  )
  console.log("totalAmount", totalAmount)

  const totalBacker = Array.isArray(payments) ? payments.length : 0
  const price = product.attributes?.productPrice || 0
  const donationPercentage = (totalAmount / price) * 100

  const handleClick = () => {
    navigate(`/product-details/${product.id}`)
  }
  if (!product || !product.attributes) {
    return null // or a placeholder component
  }

  return (
    <div className="container h-full">
      <div className="max-w-md w-full rounded-md h-full bg-white shadow-md">
        <Link to={`/product-details/${product.id}`}>
          <div className="flex flex-col ">
            <div className="">
              <div className=" h-62 w-full mb-3">
                <img
                  src={
                    imageUrl
                      ? `${baseURLImg}${imageUrl}`
                      : "placeholder-image-url"
                  }
                  alt={product?.attributes?.productName || "Product Image"}
                  className=" object-fill rounded-xl w-full h-full"
                />
              </div>
              <div className="px-4 py-2 text-[#7A7A7A] text-lg font-semibold">
                <p>
                  {
                    product?.attributes?.benefactors?.data?.attributes
                      ?.benefactorsName
                  }
                </p>
              </div>
              <div className="flex-auto justify-evenly px-4">
                <div className="flex flex-wrap ">
                  <div className="flex items-center w-full justify-between min-w-0">
                    <h2 className="text-lg mr-auto cursor-pointer line-clamp-2 font-bold text-[#42454B] hover:text-main">
                      {product?.attributes?.productName}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="flex flex-col p-4">
          <div className="flex mt-2">
            <span className="text-main font-semibold">
              {data?.productsStats[product.id]?.totalDonate}
            </span>
            / 
            <span className="text-base text-text font-semibold ">
              {price ? price.toFixed(2) : "0.00"} BNB
            </span>
          </div>
          <div className=" flex flex-row mt-2"></div>

          <div className="w-full bg-gray-300 mt-4">
            <div
              className="bg-main text-xs font-medium text-main text-center p-1 leading-none rounded-full"
              style={{
                width: `${Math.min(
                  (data?.productsStats[product.id]?.totalDonate / price) *
                    100 || 0,
                  100
                )}%`
              }}
            ></div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="flex flex-col">
              <span className=" font-normal text-[#7a7a7a]">Đạt được</span>
              <span className="font-bold">{`${Math.min(
                (data?.productsStats[product.id]?.totalDonate / price) * 100 ||
                  0,
                100
              ).toFixed(1)}%`}</span>
            </div>
            <div className="flex flex-col">
              <span className=" font-normal text-[#7a7a7a]">
                Luợt quyên góp
              </span>
              <span className="font-bold">
                {data?.productsStats[product.id]?.invoiceCount || 0}
              </span>
            </div>
            <button
              className=" px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md "
              onClick={handleClick}
            >
              Quyên góp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
