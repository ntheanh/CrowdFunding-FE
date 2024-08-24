import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSupportedProjects } from "../../../features/product/productSlice"
import Product from "../../../component/Product/Product"

const SupportedProjects = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("customer"))
  const userId = user?.user.id
  console.log("userId", userId)
  const supportedProjects = useSelector(
    (state) => state.product.supportedProjects
  )
  console.log("supportedProjects", supportedProjects)

  const isLoading = useSelector((state) => state.product.isLoading)

  useEffect(() => {
    if (userId) {
      dispatch(getSupportedProjects(userId))
    }
  }, [dispatch, userId])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>Supported Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {supportedProjects?.map((project) => {
          const productData = project.attributes?.product?.data
          return productData ? (
            <Product
              key={project.id}
              product={productData}
              isSupported={true}
            />
          ) : null
        })}
      </div>
    </div>
  )
}

export default SupportedProjects
