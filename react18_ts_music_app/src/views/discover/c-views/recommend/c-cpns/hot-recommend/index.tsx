import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )

  return (
    <HotWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="hot-recommend">
        {hotRecommends.map((item, index) => {
          return (
            <div className="item" key={`${item}-${index}`}>
              {item.name}
            </div>
          )
        })}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)
