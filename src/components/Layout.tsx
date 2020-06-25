import React, { FC } from 'react'

const Layout: FC = ({ children }) => {
  return <div style={{ maxWidth: '80vw', margin: 'auto' }}>{children}</div>
}

export default Layout
