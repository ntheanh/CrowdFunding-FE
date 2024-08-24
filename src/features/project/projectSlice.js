import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { projectService } from "./projectService"
import { toast } from "react-toastify"
import axios from "axios"
import { baseURL } from "../../utils/api"

export const addProjectSlice = createAsyncThunk(
  "project/add",
  async (data, thunkAPI) => {
    try {
      return await projectService.addProject(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const deleteProjectSlice = createAsyncThunk(
  "project/delete",
  async (productId, thunkAPI) => {
    try {
      return await projectService.deleteProject(productId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const updateProjectSlice = createAsyncThunk(
  "project/updateProject",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${baseURL}products/${projectData.id}`, {
        data: {
          productName: projectData.productName,
          productDesc: projectData.productDesc,
          productPrice: projectData.productPrice,
          collection: projectData.collection,
          productImg: projectData.productImg
        }
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
const ProjectSlice = createSlice({
  name: "project",
  initialState: {
    isConnect: false,
    project: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    productDetails: null,
    loading: false,
    error: null,
    message: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProjectSlice.pending, (state) => {
        state.isConnect = true
      })
      .addCase(addProjectSlice.fulfilled, (state, action) => {
        state.isSuccessCart = true
        state.isError = false
        state.project = action.payload
        if (state.isSuccessCart) {
          toast.success("Project Success")
        }
      })
      .addCase(addProjectSlice.rejected, (state, action) => {
        state.isConnect = false
      })
      .addCase(deleteProjectSlice.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProjectSlice.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.project = null
        toast.success("Project deleted successfully")
      })
      .addCase(deleteProjectSlice.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error("Failed to delete project")
      })
      .addCase(updateProjectSlice.pending, (state) => {
        state.loading = true
      })
      .addCase(updateProjectSlice.fulfilled, (state, action) => {
        state.loading = false
        state.productDetails = action.payload
      })
      .addCase(updateProjectSlice.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default ProjectSlice.reducer
