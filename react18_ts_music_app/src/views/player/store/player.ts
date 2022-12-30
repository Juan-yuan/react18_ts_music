import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
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
    cp: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    mv: 0,
    publishTime: 0,
    tns: ['热门版']
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
