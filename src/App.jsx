import './sass/App.scss'
import Dice from './componet/Dice'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='game-container'>
      <h1>Tenzies</h1>
      <p>Match all the numbers, once the numbers and value are the same you win</p>
      <Dice/>
      <button className='btn btn-primary'>Roll</button>
    </div>
  )
}

export default App
