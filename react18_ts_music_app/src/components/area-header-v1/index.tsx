import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚']
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">热门推荐</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="text link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to="/" className="more">
          更多
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
