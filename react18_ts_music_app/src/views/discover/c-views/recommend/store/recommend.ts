import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IRecommendState } from './types'
import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log('res', res)
  return res.data
})

const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
})

export default recommendSlice.reducer
