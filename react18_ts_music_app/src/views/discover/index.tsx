import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>导航</div>
      <Outlet />
    </div>
  )
}

export default memo(Discover)
