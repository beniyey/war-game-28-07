export function chooseRandom(arr) {
    const index = Math.floor(Math.random() * arr.length)
    const random = arr[index]
    arr.splice(index, 1)
    return random
}



export function allocateCards() {
    const userArr = []
    const computerArr = createCardDeck()
    shuffleCards({ computerArr, userArr })

    return { computerArr, userArr }
}

function createCardDeck() {
    const arr = []
    for (let i = 1; i <= 13; i++) {
        arr.push(i, i, i, i)
    }
    return arr
}

function shuffleCards({ computerArr, userArr }) {
    for (let index = 1; index <= 26; index++) {
        const random = Math.floor(Math.random() * computerArr.length)
        userArr.push(computerArr[random])
        computerArr.splice(random, 1)
    }
}