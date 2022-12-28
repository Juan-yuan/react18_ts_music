import React, { memo, useRef } from 'react'
import type { FC, ElementRef } from 'react'
import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import { IProps } from './types'
import AreaHeaderV1 from '@/components/area-header-v1'

const NewAlbum: FC<IProps> = () => {
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="arrow sprite_02 arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel autoplay ref={bannerRef} dots={false} speed={2000}>
            {[1, 2].map((item, index) => {
              return <h1 key={index}>{item}</h1>
            })}
          </Carousel>
        </div>

        <button
          className="arrow sprite_02 arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
