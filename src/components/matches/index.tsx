import React, { useState, useCallback, FC } from 'react'
import { Card, Empty, Button } from 'antd'
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom'

import Match from './Match'
import Create from './Create'

interface MatchData {
  id: string
  name: string
  // Note this should be the player names, for convenience
  players: string[]
  lastMoveTime: Date
  lastMovePlayer: string
}

const testMatches: MatchData[] = [
  {
    id: 'fe==',
    name: 'Frenzied Skidaddle',
    players: ['Crill Wipes', 'Sob Ringo'],
    lastMovePlayer: 'Crill Wipes',
    lastMoveTime: new Date('2020-06-25 10:00+10:00'),
  },
]

const MatchList: FC = () => {
  let { path, url } = useRouteMatch()

  // TODO: extract the user from authentication
  const user = { name: 'Sob Ringo' }

  const [matches, setMatches] = useState<MatchData[]>(testMatches)

  // TODO: load user's matches from firebase

  const renderMatchSummary = useCallback(
    (match: MatchData) => {
      const awaitingOurMove = match.lastMovePlayer !== user.name

      return (
        <Card key={match.id} title={`${match.name} (${match.id})`}>
          <p>{match.players.join(' and ')}</p>
          <p>
            <i>
              Last move by {match.lastMovePlayer} at{' '}
              {/* TODO: use a nicer date format (library!) */}
              {match.lastMoveTime?.toLocaleString()}
            </i>
          </p>
          <Button type="primary">
            {awaitingOurMove ? 'Open Match' : 'Remind Opponent'}
          </Button>
        </Card>
      )
    },
    [user]
  )

  return (
    <Switch>
      <Route exact path={path}>
        {matches.length ? (
          matches.map(renderMatchSummary)
        ) : (
          <Empty
            image={
              // <FrownOutlined style={{ fontSize: '32px' }} />
              Empty.PRESENTED_IMAGE_SIMPLE
            }
            description={
              <span>
                No active matches - <Link to={`${url}/create`}>create one</Link>
              </span>
            }
          />
        )}
      </Route>
      <Route exact path={`${path}/create`} component={Create} />
      <Route path={`${path}/:matchId`} component={Match} />
    </Switch>
  )
}

export default MatchList
