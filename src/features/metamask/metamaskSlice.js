import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { metamaskService } from "../metamask/metamaskService"
import { toast } from "react-toastify"

export const connectWallet = createAsyncThunk(
  "metamask/connect",
  async (thunkAPI) => {
    try {
      return await metamaskService.handleConnectWallet()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const checkWalletConnection = createAsyncThunk(
  "metamask/checkConnection",
  async (_, { dispatch }) => {
    const isConnected = await metamaskService.checkConnection()
    if (isConnected) {
      const walletInfo = await metamaskService.handleConnectWallet()
      dispatch(connectWallet(walletInfo))
    }
    return isConnected
  }
)

export const updateWalletAddress = createAsyncThunk(
  "metamask/updateAddress",
  async (address) => {
    return address
  }
)

export const metamaskSlice = createSlice({
  name: "metamask",
  initialState: {
    walletInfo: null,
    isConnect: false
  },
  connectWallet: (state, action) => {
    state.walletInfo = action.payload
    state.isConnect = true
    localStorage.setItem("walletConnected", "true")
  },

  extraReducers: (builder) => {
    builder
      .addCase(connectWallet.pending, (state) => {
        state.isConnect = true
      })
      .addCase(connectWallet.fulfilled, (state, action) => {
        state.isConnect = true
        state.walletInfo = action.payload
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.isConnect = false
        state.walletInfo = null
      })
      .addCase(updateWalletAddress.fulfilled, (state, action) => {
        if (action.payload) {
          state.walletInfo = {
            ...state.walletInfo,
            walletAddress: action.payload
          }
        } else {
          state.walletInfo = null
          state.isConnect = false
        }
      })
  }
})

// Action creators are generated for each case reducer function
export default metamaskSlice.reducer
