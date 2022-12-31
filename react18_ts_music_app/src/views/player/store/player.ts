import type { IRootState } from '@/store'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
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

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '下一个天亮',
      id: 1967771949,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 14116394,
          name: '鲁怀德',
          tns: [],
          alias: []
        }
      ],
      alia: ['你的肩膀是我豁达的天堂'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 17,
      crbt: null,
      cf: '',
      al: {
        id: 148822149,
        name: '下一个天亮',
        picUrl:
          'https://p1.music.126.net/8HM4gQ4XFncUkBi_mHlMqQ==/109951167725056534.jpg',
        tns: ['（热门版）'],
        pic_str: '109951167725056534',
        pic: 109951167725056530
      },
      dt: 245581,
      h: {
        br: 320000,
        fid: 0,
        size: 9825645,
        vd: -46311,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5895405,
        vd: -43712,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3930285,
        vd: -42048,
        sr: 48000
      },
      sq: {
        br: 946971,
        fid: 0,
        size: 29069829,
        vd: -46305,
        sr: 48000
      },
      hr: {
        br: 1716507,
        fid: 0,
        size: 52692795,
        vd: -46305,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 233882,
        name: '下一个天亮',
        artists: [
          {
            id: 7760,
            name: '郭静'
          }
        ],
        albumMeta: {
          id: 23492,
          name: '下一个天亮'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 17,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 0,
      tns: ['热门版']
    },
    {
      name: '下一个天亮',
      id: 1967771949,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 14116394,
          name: '鲁怀德',
          tns: [],
          alias: []
        }
      ],
      alia: ['你的肩膀是我豁达的天堂'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 17,
      crbt: null,
      cf: '',
      al: {
        id: 148822149,
        name: '下一个天亮',
        picUrl:
          'https://p1.music.126.net/8HM4gQ4XFncUkBi_mHlMqQ==/109951167725056534.jpg',
        tns: ['（热门版）'],
        pic_str: '109951167725056534',
        pic: 109951167725056530
      },
      dt: 245581,
      h: {
        br: 320000,
        fid: 0,
        size: 9825645,
        vd: -46311,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5895405,
        vd: -43712,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3930285,
        vd: -42048,
        sr: 48000
      },
      sq: {
        br: 946971,
        fid: 0,
        size: 29069829,
        vd: -46305,
        sr: 48000
      },
      hr: {
        br: 1716507,
        fid: 0,
        size: 52692795,
        vd: -46305,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 233882,
        name: '下一个天亮',
        artists: [
          {
            id: 7760,
            name: '郭静'
          }
        ],
        albumMeta: {
          id: 23492,
          name: '下一个天亮'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 17,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 0,
      tns: ['热门版']
    }
  ],
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
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricsIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction
} = playerSlice.actions
export default playerSlice.reducer
