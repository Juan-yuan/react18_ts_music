import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 获取歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]

      dispatch(changeCurrentSongAction(song))
    })

    getSongLyric(id).then((res) => {
      console.log('res', res)
    })
  }
)

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {}
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrentSongAction } = playerSlice.actions
export default playerSlice.reducer
