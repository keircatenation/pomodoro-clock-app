import { useState } from 'react'
import './App.css'
import Controls from './components/Controls/Controls'
import Labels from './components/Labels/Labels'
import useInterval from './hooks/useInterval'

function App() {
  const [counter, setCounter] = useState(0);
  const [currentTime, setCurrentTime] = useState(25*60);
  const [status, setStatus] = useState("paused")
  const [sessionTime, setSessionTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [counterName, setCounterName] = useState("session")



  useInterval(() => {
    if (counter>0){
      setCurrentTime(counter-1)
      setCounter(counter-1)
    } else if (counter == 0 && status == "counting"){
      //play the beep and reset to the next thing
      console.log("done")
      switch (counterName){
        case "session":
          setCounter(breakTime*60);
          setCurrentTime(breakTime*60);
          setCounterName("break")
          break
        case "break":
          setCounter(sessionTime*60);
          setCurrentTime(sessionTime*60);
          setCounterName("session")
          break
        default:
          console.log("an error occurred")
          break
      }
    }
  }, 1000)

  // when any countdown reaches 00:00, a sound indicating time up plays, using a HTML5 sudio element and a "beep" id, which must be 1 second or longer



  return (
    <>
      <header>
        <h1>Pomodoro Productivity Clock</h1>
        <p>Break up your work sessions with short breaks to increase concentration!</p>
      </header>
      <Labels
        counterName={counterName}
        currentTime={currentTime}
        breakTime={breakTime}
        sessionTime={sessionTime}
      />

      <Controls
        counter={counter}
        setCounter={setCounter}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        counterName={counterName}
        setCounterName={setCounterName}
        status={status}
        setStatus={setStatus}
      />
    </>
  )
}

export default App