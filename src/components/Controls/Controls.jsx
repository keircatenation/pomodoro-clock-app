import styles from "./controls.module.scss"

function Controls(props) {
  const {counter, setCounter, currentTime, setCurrentTime, sessionTime, setSessionTime, breakTime, setBreakTime, counterName, setCounterName, setStatus, status} = props;

  const handleReset = () =>{
    console.log("reset")
    setCounter(0);
    setCurrentTime(25*60);
    setSessionTime(25);
    setBreakTime(5);
    setCounterName("session");
    setStatus("paused")

    // audio element #beep must stop playing and be rewound to beginning
  }

  const handleBreakDecrement = () => {
    if (breakTime - 1 > 0){
      if (counterName == "break"){
        setBreakTime(breakTime - 1);
        setCurrentTime((breakTime - 1) * 60)
        setCounter((breakTime - 1) * 60)
      } else {
        setBreakTime(breakTime - 1)
      }
    } else {
      console.log("can't decrement")
    }
  }
  const handleSessionDecrement = () => {
    if (sessionTime - 1 > 0){
      if (counterName == "session"){
        setSessionTime(sessionTime - 1);
        setCurrentTime((sessionTime - 1) * 60)
        setCounter((sessionTime - 1) * 60)
      } else {
        setSessionTime(sessionTime - 1)
      }
    } else {
      console.log("can't decrement")
    }
  }
  const handleSessionIncrement = () => {
    if (sessionTime + 1 <= 60){
      if (counterName == "session"){
        setSessionTime(sessionTime + 1);
        setCurrentTime((sessionTime + 1) * 60)
        setCounter((sessionTime + 1) * 60)
      } else {
        setSessionTime(sessionTime + 1)
      }
    }
  }
  const handleBreakIncrement = () => {
    if (breakTime + 1 <= 60){
      if (counterName == "break"){
        setBreakTime(breakTime + 1);
        setCurrentTime((breakTime + 1) * 60)
        setCounter((breakTime + 1) * 60)
      } else {
        setBreakTime(breakTime + 1)
      }
    }
  }

  const handleStartStop = () => {
    if (counter > 0) {
      console.log("pause!")
      setCounter(0);
      setStatus("paused")
    } else {
      console.log("resume!")
      setCounter(currentTime)
      setStatus("counting")
    }
  }

  return (
    <div className={styles.root}>
      <div>
        <button id="break-decrement" onClick={handleBreakDecrement}>▼ break decrement</button>
        <button id="break-increment" onClick={handleBreakIncrement}>▲ break increment</button>
      </div>
      <div>
        <button id="session-decrement" onClick={handleSessionDecrement}>▼ session decrement</button>
        <button id="session-increment" onClick={handleSessionIncrement}>▲ session increment</button>
      </div>
      <div>
        <button id="start_stop" onClick={handleStartStop}>{status == "paused" ? "Start" : "Pause"}</button>
        <button id="reset" onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  )
}

export default Controls
