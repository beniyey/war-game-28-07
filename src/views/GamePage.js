import React, { useContext, useState } from 'react'
import Card from '../components/Card'
import { chooseRandom } from '../services/functions'
import { userContext } from '../context/UserContext'

export default function GamePage({ computerDeck, setComputerDeck }) {

    const user = useContext(userContext)

    const [playerCard, setPlayerCard] = useState(() => chooseRandom(user.cardDeck))

    const [computerCard, setComputerCard] = useState(() => chooseRandom(computerDeck))

    const [playerWon, setPlayerWon] = useState(0)

    function nextMove() {
        if (user.cardDeck.length == 0) {
            return alert("game over: " + playerWon > 0)
        }

        if (playerCard > computerCard) {
            setPlayerWon(playerWon + 1)
        } else if (playerCard < computerCard) {
            setPlayerWon(playerWon - 1)
        }

        setComputerCard(chooseRandom(computerDeck))
        setPlayerCard(chooseRandom(user.cardDeck))
    }

    return (
        <div>
            <span>
                <h1>Computer</h1>
                <Card value={computerCard} />
            </span>
            <span>
                <h1>Player</h1>
                <Card value={playerCard} />
            </span>
            <button onClick={nextMove}>Next</button>
        </div>
    )
}
