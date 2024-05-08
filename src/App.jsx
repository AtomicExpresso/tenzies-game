import './sass/App.scss'
import Dice from './componet/Dice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(DiceRoll())
  const [tenziesWin, setTenziesWin] = useState(false)

  useEffect(() => {
    const winCondition = dice.every(item => item.isPicked && item.value)

    if(winCondition){
      setTenziesWin(true)
    }

  }, [dice])

  function DiceRoll() {
    const array = [];

    for(let i = 0; i < 10; i++){
      array.push({
        value: Math.ceil(Math.random() * 6),
        isPicked: false,
        id: nanoid()
      })
    }

    return array
  }

  //When button is clicked, rolls the dice
  function GenerateNewRoll() {
    setDice(prevState => prevState.map(item => {
        return item.isPicked ? item : { value: Math.ceil(Math.random() * 6),
          isPicked: false,
          id: nanoid()}
      }
    ))
  }

  function ResetGame() {
    setDice(DiceRoll())
    setTenziesWin(false)
  }

  return (
    <div className='game-container'>
      {tenziesWin && <Confetti/>}
      <h1>Tenzies</h1>
      <p>When all the numbers match you win</p>
      <Dice dice={dice} setDice={setDice}/>
      {tenziesWin ? <button className='btn btn-warning' onClick={ResetGame}>Replay</button> : <button className='btn btn-success' onClick={GenerateNewRoll}>Roll</button>}
    </div>
  )
}

export default App
