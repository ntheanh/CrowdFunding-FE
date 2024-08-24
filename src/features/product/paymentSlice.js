// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { paymentService } from "./paymentService"
import { toast } from "react-toastify"
// import { baseURL, config } from "../../utils/api"

// // export const getAllPayment = createAsyncThunk(
// //   "payments/get",
// //   async (productId, thunkAPI) => {
// //     try {
// //       const response = await paymentService.getAllPayment(productId)
// //       return response
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message)
// //     }
// //   }
// // )
// export const { setPayments } = paymentSlice.actions
// export const getAllPayment = (productId) => async (dispatch) => {
//   try {
//     const response = await fetch(
//       `${baseURL}/payments?filters[product][id][$eq]=${productId}`,
//       config
//     )
//     const data = await response.json()

//     dispatch(setPayments({ productId, payments: response.data.data }))
//   } catch (error) {
//     console.error("Error fetching payments:", error)
//   }
// }

// export const addPaymentUser = createAsyncThunk(
//   "payments/add",
//   async (data, thunkAPI) => {
//     try {
//       return await paymentService.addPaymentUser(data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// const PaymentSlice = createSlice({
//   name: "payment",
//   initialState: {
//     payments: {},
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: ""
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     setPayments: (state, action) => {
//       const { productId, payments } = action.payload
//       state.payments[productId] = payments
//     },
//       builder
//         .addCase(getAllPayment.pending, (state) => {
//           state.isLoading = true
//           state.isError = null
//         })
//         .addCase(getAllPayment.fulfilled, (state, action) => {
//           state.isLoading = false
//           state.isSuccess = true
//           state.isError = false
//           state.payment = action.payload
//         })
//         .addCase(getAllPayment.rejected, (state, action) => {
//           state.isLoading = false
//           state.isSuccess = false
//           state.isError = false
//           state.message = action.payload
//         })
//         .addCase(addPaymentUser.pending, (state) => {
//           state.isConnect = true
//         })
//         .addCase(addPaymentUser.fulfilled, (state, action) => {
//           state.isSuccessPayment = true
//           state.isError = false
//           if (state.isSuccessCart) {
//             toast.success("Payment Success")
//           }
//         })
//         .addCase(addPaymentUser.rejected, (state, action) => {
//           state.isConnect = false
//         })
//   }
// })

// export default PaymentSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { paymentService } from "./paymentService"
import { getSupportedProjects } from "./productSlice"

const initialState = {
  payment: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

export const getAllPayment = createAsyncThunk(
  "payment/getAll",
  async (id, thunkAPI) => {
    try {
      return await paymentService.getAllPayment(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// export const addPaymentUser = createAsyncThunk(
//   "payment/create",
//   async (paymentData, thunkAPI) => {
//     try {
//       return await paymentService.createPayment(paymentData)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )
export const addPaymentUser = createAsyncThunk(
  "payment/create",
  async (paymentData, thunkAPI) => {
    try {
      const response = await paymentService.createPayment(paymentData)
      thunkAPI.dispatch(getSupportedProjects(paymentData.userId))
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setPayments: (state, action) => {
      const { productId, payments } = action.payload
      state.payments[productId] = payments
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPayment.pending, (state) => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(getAllPayment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.payment = action.payload
      })
      .addCase(getAllPayment.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = action.payload
      })
      .addCase(addPaymentUser.pending, (state) => {
        state.isConnect = true
      })
      .addCase(addPaymentUser.fulfilled, (state, action) => {
        state.isSuccessPayment = true
        state.isError = false
        if (state.isSuccessCart) {
          toast.success("Payment Success")
        }
      })
      .addCase(addPaymentUser.rejected, (state, action) => {
        state.isConnect = false
      })
  }
})

export const { reset, setPayments } = paymentSlice.actions
export default paymentSlice.reducer
