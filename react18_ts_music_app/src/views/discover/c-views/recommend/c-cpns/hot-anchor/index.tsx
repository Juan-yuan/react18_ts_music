import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { hotRadios } from '@/assets/data/local-data'
import { AnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={`${item}-${index}`}>
              <div className="image">
                <img src={item.picUrl} alt="" />
              </div>

              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
