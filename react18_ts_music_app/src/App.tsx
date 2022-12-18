import React, { Suspense } from 'react'
import { shallowEqual } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector } from './store'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
