import React, { memo } from 'react'
import type { FC } from 'react'
import { RankingWrapper } from './style'
import { IProps } from './types'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking">
        TopRanking
      </AreaHeaderV1>
      <div className="content">
        {rankings.map((item, index) => {
          return <TopRankingItem key={`${item}-${index}`} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
