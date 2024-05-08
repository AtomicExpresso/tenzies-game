import { useState, useEffect } from "react"

function Dice(){
  const [dice, setDice] = useState(DiceRoll())

  function DiceRoll() {
    const array = [];

    for(let i = 0; i < 10; i++){
      array.push({
        value: Math.ceil(Math.random() * 6),
        isPicked: false,
        id: i + 1
      })
    }

    return array
  }

  const mapDiceArray = dice.map(item => {
    return (
      <div key={item.id} className="die">
        <h1>{item.value}</h1>
      </div>
    )
  })

  return (
    <div className="container">
      {mapDiceArray}
    </div>
  )
}

export default Dice