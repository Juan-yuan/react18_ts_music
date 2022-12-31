import type { IRootState } from '@/store'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

interface IThunkState {
  state: IRootState
}
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id: number, { dispatch, getState }) => {
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    // 获取歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]

      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))

      dispatch(changeCurrentSongAction(song))
    })
  } else {
    // 如果歌曲已经存在列表里
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }

  getSongLyric(id).then((res) => {
    const lyricString = res.lrc.lyric
    const lyrics = parseLyric(lyricString)

    dispatch(changeLyricsAction(lyrics))
  })
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changemusic',
  (isNext, { dispatch, getState }) => {
    const player = getState().player
    const playMode = player.playMode
    const songIndex = player.playSongIndex
    const songList = player.playSongList

    let newIndex = songIndex
    if (playMode === 1) {
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > songList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = songList.length - 1
    }

    // 获取当前的歌曲
    const song = songList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))

    // 请求新的歌词
    getSongLyric(song.id).then((res) => {
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
  playSongList: any[]
  playSongIndex: number
  playMode: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1,
  playMode: 0 // 0:顺序播放  1:随机播放  2: 单曲播放
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
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricsIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer
