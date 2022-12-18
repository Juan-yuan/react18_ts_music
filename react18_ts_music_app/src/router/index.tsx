import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  { path: '/discover', element: <Discover /> },
  { path: '/mine', element: <Mine /> },
  { path: '/focus', element: <Focus /> },
  { path: '/download', element: <Download /> }
]

export default routes
