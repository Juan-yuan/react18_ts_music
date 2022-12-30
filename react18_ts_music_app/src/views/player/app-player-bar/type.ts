import type { ReactNode } from 'react'

export interface IProps {
  children?: ReactNode
}

export interface BarControlProps {
  readonly isPlaying: boolean
}
