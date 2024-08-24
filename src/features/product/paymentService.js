import axios from "axios"
import { baseURL, config } from "../../utils/api"

const getAllPayment = async (productId) => {
  const response = await axios.get(
    `${baseURL}payments/?filters[product_id][$eq]=${productId}`
  )
  if (response.data) {
    return response.data
  }
}

const addPayment = async ({ paymentName, price, productId }) => {
  const response = await axios.post(
    `${baseURL}payments`,
    {
      data: {
        paymentName,
        price: Number(price),
        product_id: productId
      }
    },
    config
  )
  return response.data
}

export const paymentService = {
  getAllPayment,
  addPayment
}
