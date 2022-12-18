import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommed: FC<IProps> = () => {
  return <div>Recommed</div>
}

export default memo(Recommed)
