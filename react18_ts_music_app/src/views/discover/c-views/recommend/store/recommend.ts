import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IRecommendState } from './types'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     try {
//       const res = await getBanners()
//       dispatch(changeBannersAction(res.banners))
//     } catch (e) {
//       console.log('error', e)
//     }
//   }
// )

// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     try {
//       const res = await getHotRecommend(8)
//       dispatch(changeHotRecommendsAction(res.result))
//     } catch (e) {
//       console.log('error', e)
//     }
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (arg, { dispatch }) => {
//     try {
//       const res = await getNewAlbum()
//       dispatch(changeNewAlbumsAction(res.albums))
//     } catch (e) {
//       console.log('error', e)
//     }
//   }
// )

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendsAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  async (_, { dispatch }) => {
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜的数据', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜数据', res)
    //         break
    //       default:
    //         console.log('原创榜数据', res)
    //     }
    //   })
    // }
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
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
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingersAction
} = recommendSlice.actions

export default recommendSlice.reducer
