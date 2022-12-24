import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'

const initialState: IState = {
  count: 100,
  message: 'hehe',
  address: 'China',
  height: 1.88
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
