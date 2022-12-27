import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  return (
    <BannerWrapper>
      {banners.map((item, index) => {
        return <div key={`${item}-${index}`}>{item.imageUrl}</div>
      })}
    </BannerWrapper>
  )
}

export default memo(TopBanner)
