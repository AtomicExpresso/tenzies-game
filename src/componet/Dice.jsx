function Dice(props){

  const mapDiceArray = props.dice.map((item, index) => {

    //Dice styles
    const dieStyle = {
      backgroundColor: item.isPicked ? '#58e390' : 'white',
      boxShadow: item.isPicked ? "inset rgba(0, 0, 0, 0.06) 0px 2px 4px 0px" : "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
    }

    //If win condition hasent been met yet, this allows the player to select and deselect dice to hold
    function changeHeld(index) {
      if(!props.tenziesWin){
        const newarr = [...props.dice]
        newarr[index] = {...newarr[index], isPicked: !newarr[index].isPicked}
        props.setDice(newarr)
      }
    }
  

    return (
      <div key={index} className="die" style={dieStyle} onClick={() => changeHeld(index)}>
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