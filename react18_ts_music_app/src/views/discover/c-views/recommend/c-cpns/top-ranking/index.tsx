import React, { memo } from 'react'
import type { FC } from 'react'
import { RankingWrapper } from './style'
import { IProps } from './types'
import AreaHeaderV1 from '@/components/area-header-v1'

const TopRanking: FC<IProps> = () => {
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking">
        TopRanking
      </AreaHeaderV1>
      <div className="content">aaaaa</div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
