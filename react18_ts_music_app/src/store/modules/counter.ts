import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hehe'
  },
  reducers: {
    changeMessage(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessage } = counterSlice.actions
export default counterSlice.reducer
