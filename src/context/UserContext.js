import { createContext, useState } from "react";

export const userContext = createContext()

export const setUserContext = createContext()

export default function UserContextProvider({ children }) {

    const [user, setUser] = useState(
        {
            fullName: "Ben Spector",
            wins: 0,
            losses: 0,
            gamesPlayed: 0,
            cardDeck: []
        }
    )

    return (
        <setUserContext.Provider value={setUser}>
            <userContext.Provider value={user}>
                {children}
            </userContext.Provider>
        </setUserContext.Provider>
    )
}