import React, { memo, useEffect } from 'react'
import type { FC } from 'react'
import { useAppDispatch } from '@/store'
import type { IProps } from './types'
import { fetchBannerDataAction } from './store/recommend'
import TopBannder from '@/views/discover/c-views/recommend/c-cpns/top-banner'

const Recommed: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBannder />
      Recommand
    </div>
  )
}

export default memo(Recommed)
