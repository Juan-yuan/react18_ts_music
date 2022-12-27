import React, { memo, useEffect } from 'react'
import type { FC } from 'react'
import { useAppDispatch } from '@/store'
import type { IProps } from './types'
import { fetchBannerDataAction } from './store/recommend'

const Recommed: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return <div>Recommand</div>
}

export default memo(Recommed)
