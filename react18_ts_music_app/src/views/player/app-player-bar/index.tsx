import React, { memo, useState, useRef, useEffect } from 'react'
import type { FC } from 'react'
import { Slider, message } from 'antd'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatTime, getImageSize } from '@/utils/format'
import { getPlaySong } from '@/utils/handle-player'
import { IProps } from './type'
import {
  changeLyricsIndexAction,
  changeMusicAction,
  changePlayModeAction
} from '../store/player'

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    audioRef.current!.src = currentSong && getPlaySong(currentSong.id)
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlaying(true)
      })
      .catch((err) => {
        setIsPlaying(false)
      })
    // 获取歌曲总时间
    setDuration(currentSong.dt)
  }, [currentSong])

  function handlePlayBtnClick() {
    setIsPlaying(!isPlaying)
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricsIndexAction(index))

    // 展示message
    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0
    })
  }

  function handleSliderChanging(value: number) {
    setIsSliding(true)
    setProgress(value)

    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  function handleSliderChanged(value: number) {
    const currentTime = (value / 100) * duration
    audioRef.current!.currentTime = currentTime / 1000
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic(true)}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span>{currentSong.name}</span>
              <span className="song-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderChanged}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
