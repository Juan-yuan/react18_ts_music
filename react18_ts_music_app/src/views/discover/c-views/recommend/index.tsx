import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'
import type { IProps, IBannerData } from './types'

const Recommed: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((banner, index) => {
        return <div key={`banner-${index}`}>{banner.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommed)
