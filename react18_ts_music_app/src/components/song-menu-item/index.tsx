import React, { memo } from 'react'
import type { FC } from 'react'
import { MenuItemWrapper } from './style'
import { IProps } from './types'
import { formatCount, getImageSize } from '@/utils/format'

const SongMenuItem: FC<IProps> = ({ itemData }) => {
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
