import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hehe'
  },
  reducers: {}
})

export default counterSlice.reducer
