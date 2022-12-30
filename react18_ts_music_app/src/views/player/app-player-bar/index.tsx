import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerBarWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      PlayerBarWrapper
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
