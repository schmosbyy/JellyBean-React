import { useState } from 'react'

function App() {
  const JELLY_COUNT = 100;//Playes guess this, wins!
  const [userName, setuserName] = useState('')
  const [jellyCount, setjellyCount] = useState(0)
  
  const [guesses,setGuesses] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    setGuesses(guessArr=>{
      return [...guessArr,{userName,jellyCount}]
    })
    console.log(JSON.stringify(guesses))
  }
  function checkGuess(){
    const winner = guesses.filter(guess=>Number(guess.jellyCount)===JELLY_COUNT)
    console.log(winner)
    if(winner !==null){
      alert("winner is! "+JSON.stringify(winner))
    }
  }
  return (
    <>
      <h1>Jelly Bean Game</h1>
      <form className='jellyBeanForm'>
      <label htmlFor='user-name'> Name of Guesser</label>
      <input type='text' value={userName} onChange={(e)=>setuserName(e.target.value)} id='user-name' placeholder='YourName'></input>
       <br></br>
      <label htmlFor='jelly-input'> No of Jelly Beans</label>
      <input type='text' value={jellyCount} onChange={(e)=>setjellyCount(e.target.value)} id='jelly-input' placeholder='0'></input>
       <br/><button className='btnSubmit' onClick={handleSubmit}>Add Guess</button>
      </form>
      <ul>
        {guesses.map(guess=>{
          return(
            <li>{guess.userName} & {guess.jellyCount}</li>
          )
        })}
        
      </ul>
      <button className='btnGuess' onClick={()=>checkGuess()}>Check Guess!</button>
    </>
  )
}

export default App
