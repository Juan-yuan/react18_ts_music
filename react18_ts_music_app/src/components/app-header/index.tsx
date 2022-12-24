import React, { memo } from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { IProps } from './types'

const AppHeader: FC<IProps> = () => {
  return (
    <div className="nav">
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>
    </div>
  )
}

export default memo(AppHeader)
