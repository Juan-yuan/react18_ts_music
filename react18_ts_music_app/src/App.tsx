import React, { Suspense } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector } from './store'
import { changeMessage } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const handldClick = () => {
    dispatch(changeMessage('hahaha'))
  }
  return (
    <div className="App">
      <button onClick={handldClick}>{message}</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
