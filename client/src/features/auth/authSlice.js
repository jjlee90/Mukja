import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"
// Get user from localStorage. local storage is stored as string so it has to be parsed
const user = JSON.parse(localStorage.getItem("user"))

// setting state for user authentication
const initialState = {
  // is theres a user in local storage, get user, else null
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.reponse.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout()
})

// Register Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.reponse.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // reset to default values
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

// when reducer is inside of slice it has to be exported from actions
export const { reset } = authSlice.actions

export default authSlice.reducer
