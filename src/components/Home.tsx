import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { List } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const Home: FC = () => {
  const { pathname } = useLocation()

  const isRoot = pathname === '/'

  console.log({ pathname })

  return isRoot ? (
    <div>
      <h1>Welcome!</h1>
      <p>Select an option below to continue</p>
      <br />
      <br />
      <List style={{ justifyContent: 'center' }}>
        <List.Item key={'continue'}>
          <Link to={'/matches'}>Continue an existing match</Link>
        </List.Item>
        <List.Item key={'create'}>
          <Link to={'/matches/create'}>Create new match</Link>
        </List.Item>
      </List>
    </div>
  ) : (
    <div style={{ margin: '10px' }}>
      <Link to={'/'}>
        <HomeOutlined style={{ fontSize: '24px' }} />
      </Link>
    </div>
  )
}

export default Home
