import { useState } from 'react'
import './App.css'
import Controls from './components/Controls/Controls'
import Labels from './components/Labels/Labels'
import useInterval from './hooks/useInterval'

function App() {
  const [counter, setCounter] = useState(0);
  const [sessionTime, setSessionTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [counterName, setCounterName] = useState("session")



  // useInterval(() => {
  //   if (counter>0){
  //     setCounter(counter-1)
  //   }
  // }, 1000)

  // when a session countdown reaches 00:00, the break timer immediately begins, counting from value displayed in #break-length, and the #timer-label updates

  // when a break countdown reaches 00:00, the session timer immediately begins, counting from th value currently displayed in #session-length, and #timer-label updates

  // when any countdown reaches 00:00, a sound indicating time up plays, using a HTML5 sudio element and a "beep" id, which must be 1 second or longer



  return (
    <>
      <header>
        <h1>Pomodoro Productivity Clock</h1>
        <p>Break up your work sessions with short breaks to increase concentration!</p>
        <p>counter: {counter}</p>
      </header>
      <Labels counterName={counterName} />

      <Controls counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default App