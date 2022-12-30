import React, { memo, useState, useRef, useEffect } from 'react'
import type { FC } from 'react'
import { Slider } from 'antd'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { shallowEqualApp, useAppSelector } from '@/store'
import { formatTime, getImageSize } from '@/utils/format'
import { getPlaySong } from '@/utils/handle-player'
import { IProps } from './type'

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  )

  useEffect(() => {
    // audioRef.current!.src = currentSong && getPlaySong(1967771949)
    audioRef.current!.src = currentSong && getPlaySong(0)
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
      : audioRef.current?.play().catch(() => setIsPlaying(!isPlaying))
  }

  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000
    const progress = ((currentTime * 1000) / duration) * 100
    setProgress(progress)
    setCurrentTime(currentTime)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
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
              <span className="song-name">{currentSong.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
