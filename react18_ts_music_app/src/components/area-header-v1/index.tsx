import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = () => {
  return <HeaderV1Wrapper>AreaHeaderV1</HeaderV1Wrapper>
}

export default memo(AreaHeaderV1)
