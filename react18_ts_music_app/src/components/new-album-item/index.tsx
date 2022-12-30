import React, { memo } from 'react'
import type { FC } from 'react'
import { IProps } from './types'
import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

const NewAlbumItem: FC<IProps> = ({ itemData }) => {
  return (
    <AlbumItemWrapper>
      <div className="album-image">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="/" className="sprite_cover cover"></a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
