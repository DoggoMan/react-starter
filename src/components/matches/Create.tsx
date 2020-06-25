import React, { FC, useState, useCallback } from 'react'
import { Card, Button } from 'antd'
import Loading from '../Loading'
import { toPercent } from '../../helpers/math'

interface Player {
  id: string
  name: string
  meta: {
    rank: number
    gamesPlayed: number
    winRate: number
  }
}

const testPlayers: Player[] = [
  {
    id: 'a',
    name: 'Crill Wipes',
    meta: {
      rank: 1,
      gamesPlayed: 5,
      winRate: 0.6,
    },
  },
  {
    id: 'b',
    name: 'Sob Ringo',
    meta: {
      rank: 2,
      gamesPlayed: 5,
      winRate: 0.4,
    },
  },
]

const Create: FC = () => {
  // TODO: extract the user from authentication
  const user = { name: 'Sob Ringo' }

  const [players, setPlayers] = useState<Player[]>(
    // Don't let the user make a game against themself... duh
    testPlayers.filter((p) => p.name !== user.name)
  )

  // TODO: Preferably, this would simply be whether a create request is in flight
  const [creatingMatch, setCreatingMatch] = useState(false)

  /**
   * Creates a match between the current user and the specified player
   */
  const createMatch = useCallback(async (playerId: string) => {
    setCreatingMatch(true)

    // TODO: implement creating a match on DB
    await alert(`Sorry, creating matches isn't ready yet!`)

    setCreatingMatch(false)
  }, [])

  const renderPlayerSummary = useCallback(
    (player: Player) => {
      const { id, name, meta } = player

      return (
        <Card key={id} title={`${name} (#${meta.rank})`}>
          <p>
            Won {toPercent(meta.winRate)} of {meta.gamesPlayed} games played
          </p>
          {/* <p>You have (0) active games against this player</p> */}
          <Button
            type="primary"
            loading={creatingMatch}
            onClick={() => createMatch(id)}
          >
            Create Match
          </Button>
        </Card>
      )
    },
    [createMatch, creatingMatch]
  )

  return (
    <div>
      <p>Let's go! Who's next...</p>
      {/* TODO: render list of players to choose from */}
      {players.length ? (
        players.map(renderPlayerSummary)
      ) : (
        <Loading text={'Loading players'} />
      )}
    </div>
  )
}
export default Create
