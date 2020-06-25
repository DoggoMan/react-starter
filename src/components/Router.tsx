import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Loading from './Loading'
import Home from './Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Route path="/" exact component={Home} />
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
