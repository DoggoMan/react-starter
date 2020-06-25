import React, { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'

interface Props {
  text?: string
}

const Loading: FC<Props> = ({ text }) => {
  return (
    <div>
      <LoadingOutlined />
      {text && `\t${text}`}
    </div>
  )
}

export default Loading
