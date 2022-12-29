import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = ({ itemData }) => {
  return (
    <RankingItemWrapper>
      <h2>TopRankingItem</h2>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
