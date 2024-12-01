import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import ScorePage from './views/ScorePage';
import GamePage from './views/GamePage';
import UserContextProvider from './context/UserContext';
import { useState } from 'react';

function App() {

  const [computerDeck, setComputerDeck] = useState([])

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<HomePage setComputerDeck={setComputerDeck} />} />
        <Route path='/score-page' element={<ScorePage />} />
        <Route path='/game-page' element={<GamePage computerDeck={computerDeck} setComputerDeck={setComputerDeck}/>} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
