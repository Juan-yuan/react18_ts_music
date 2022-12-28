import React, { memo, useEffect } from 'react'
import type { FC } from 'react'
import { useAppDispatch } from '@/store'
import type { IProps } from './types'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction
} from './store/recommend'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

const Recommed: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommed)
