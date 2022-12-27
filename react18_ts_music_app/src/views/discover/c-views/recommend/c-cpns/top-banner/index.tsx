import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBannder: FC<IProps> = () => {
  return <BannerWrapper>TopBannder</BannerWrapper>
}

export default memo(TopBannder)
