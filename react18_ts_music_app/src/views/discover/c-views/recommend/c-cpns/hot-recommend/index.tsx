import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return (
    <HotWrapper>
      <AreaHeaderV1 />
      HotRecommend
    </HotWrapper>
  )
}

export default memo(HotRecommend)
