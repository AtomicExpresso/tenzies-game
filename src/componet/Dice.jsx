function Dice(props){

  const mapDiceArray = props.dice.map((item, index) => {

    const dieStyle = {
      backgroundColor: item.isPicked ? '#58e390' : 'white'
    }

    function changeHeld(index) {
      const newarr = [...props.dice]
      newarr[index] = {...newarr[index], isPicked: !newarr[index].isPicked}
      props.setDice(newarr)
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