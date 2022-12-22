import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppDispatch, useAppSelector, shallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()
  const handldChangeMessage = () => {
    dispatch(changeMessageAction('hahaha'))
  }
  return (
    <div className="App">
      <button onClick={handldChangeMessage}>{message}</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
