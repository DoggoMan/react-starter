import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const Match: FC = () => {
  let { matchId } = useParams()

  return <div>Match: {matchId}</div>
}
export default Match
