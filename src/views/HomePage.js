import React, { useContext, useState } from 'react'
import { setUserContext, userContext } from '../context/UserContext'
import { allocateCards } from '../services/functions'
import { useNavigate } from 'react-router-dom'

export default function HomePage({ setComputerDeck }) {

    const navigate = useNavigate()

    const user = useContext(userContext)

    const setUser = useContext(setUserContext)

    const [userName, setUserName] = useState(user.fullName)

    function start() {
        if (userName.length === 0) {
            return alert("You must enter a name!")
        }

        const { computerArr, userArr } = allocateCards()

        setUser({ ...user, fullName: userName, cardDeck: userArr })

        setComputerDeck(computerArr)

        navigate("/game-page")
    }

    return (
        <div>
            <h1>Ready For War</h1>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter you name:' />
            <button onClick={start}>התחל</button>
        </div>
    )
}
