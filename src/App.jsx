import { useState } from 'react'
import './App.css'
import Controls from './components/Controls/Controls'
import Labels from './components/Labels/Labels'
import useInterval from './hooks/useInterval'

function App() {
  const [counter, setCounter] = useState(25*60);
  const [status, setStatus] = useState("paused")
  const [sessionTime, setSessionTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [counterName, setCounterName] = useState("session")
  const beep = document.querySelector("#beep");

  useInterval(() => {
    if (status == "counting"){
      if (counter>0){
        setCounter(counter-1)
        if (counter <= 1){
          console.log("beep")
          beep.play();
        }
      } else if (counter == 0){
        console.log("done")
        switch (counterName){
          case "session":
            setCounter(breakTime*60);
            setCounterName("break")
            break
          case "break":
            setCounter(sessionTime*60);
            setCounterName("session")
            break
          default:
            console.log("an error occurred")
            break
        }
      }
    }
  }, 1000)

  return (
    <>
      <header>
        <h1>Pomodoro Productivity Clock</h1>
        <p>Break up your work sessions with short breaks to increase concentration!</p>
      </header>
      <Labels
        counterName={counterName}
        counter={counter}
        breakTime={breakTime}
        sessionTime={sessionTime}
      />

      <Controls
        setCounter={setCounter}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        counterName={counterName}
        setCounterName={setCounterName}
        status={status}
        setStatus={setStatus}
        beep={beep}
      />

      <audio id="beep" src="./assets/renatalmar_SFX-Magic.mp3" alt="SFX Magic by renatalmar https://freesound.org/people/renatalmar/sounds/264981/"/>
    </>
  )
}

export default App