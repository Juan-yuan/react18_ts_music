import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return <NavWrapper>NavBar</NavWrapper>
}

export default memo(NavBar)
