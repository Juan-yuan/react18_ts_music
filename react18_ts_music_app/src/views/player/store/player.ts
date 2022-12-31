import { ILyric, parseLyric } from '@/utils/parse-lyric'
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
      const lyricString = res.lrc.lyric
      const lyrics = parseLyric(lyricString)

      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: []
  playSongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricsIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricsIndexAction
} = playerSlice.actions
export default playerSlice.reducer
