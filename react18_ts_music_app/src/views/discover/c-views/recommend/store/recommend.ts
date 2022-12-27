import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IRecommendState } from './types'
import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  return res.banners
})

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log('pending')
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        state.banners = payload
        console.log('fulfilled')
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected')
      })
  }
})

export default recommendSlice.reducer
