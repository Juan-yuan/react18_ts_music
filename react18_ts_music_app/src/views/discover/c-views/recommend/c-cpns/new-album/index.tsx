import React, { memo, useRef } from 'react'
import type { FC, ElementRef } from 'react'
import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import { IProps } from './types'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

const NewAlbum: FC<IProps> = () => {
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums
  }))
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
        <div className="album">
          <Carousel autoplay ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item, index) => {
              return (
                <div key={`${item}-${index}`}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
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
