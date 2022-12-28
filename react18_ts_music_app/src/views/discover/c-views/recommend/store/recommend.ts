import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IRecommendState } from './types'
import { getBanners, getHotRecommend } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    try {
      const res = await getBanners()
      dispatch(changeBannersAction(res.banners))
    } catch (e) {
      console.log('error', e)
    }
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    try {
      const res = await getHotRecommend(8)
      dispatch(changeHotRecommendsAction(res.result))
    } catch (e) {
      console.log('error', e)
    }
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
})

export const { changeBannersAction, changeHotRecommendsAction } =
  recommendSlice.actions
export default recommendSlice.reducer
