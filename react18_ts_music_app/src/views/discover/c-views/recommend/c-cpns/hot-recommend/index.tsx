import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return <HotWrapper>HotRecommend</HotWrapper>
}

export default memo(HotRecommend)
