import React, { memo } from 'react'
import type { FC } from 'react'
import { MenuItemWrapper } from './style'
import { IProps } from './types'
import { formatCount } from '@/utils/format'

const SongMenuItem: FC<IProps> = ({ itemData }) => {
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={itemData.picUrl + '?param=140x140'} alt="" />
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