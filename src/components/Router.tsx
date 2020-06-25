import React, { Suspense, FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Loading from './Loading'
import Home from './Home'
import MatchList from './matches'
import Layout from './Layout'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Route path="/" component={Home} />
          <Route path="/matches" component={MatchList} />
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
