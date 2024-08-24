import axios from "axios"
import { baseURL, config } from "../../utils/api"

// "data": {
//   "productName": "hi",
//   "productDesc": "hi",
//   "productPrice": 1,
//   "productHeart": 1,
//   "category": 1,
//   "collection": 1,
//   "benefactors" : 1,
//   "productImg":
// }
const addProject = async ({
  productName,
  productDesc,
  productPrice,
  productHeart,
  category,
  collection,
  benefactors,
  productImg
}) => {
  const response = await axios.post(
    `${baseURL}products/?populate=*`,
    {
      data: {
        productName: productName,
        productDesc: productDesc,
        productPrice: Number(productPrice),
        productHeart: productHeart,
        category: category,
        collection: Number(collection),
        benefactors: benefactors,
        productImg: productImg
      }
    },
    config
  )
  if (response.data) {
    return response.data
  }
}
const deleteProject = async (productId) => {
  const response = await axios.delete(`${baseURL}products/${productId}`, config)
  if (response.data) {
    return response.data
  }
}
const updateProject = async (data) => {
  const { id, ...updateData } = data
  const response = await axios.put(
    `${baseURL}/products/${id}`,
    { data: updateData },
    config
  )
  if (response.data) {
    return response.data
  }
}

export const projectService = {
  addProject,
  deleteProject,
  updateProject
}
