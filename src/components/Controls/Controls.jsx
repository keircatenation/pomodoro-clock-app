import styles from "./controls.module.scss"

function Controls(props) {
  const {setCounter, sessionTime, setSessionTime, breakTime, setBreakTime, counterName, setCounterName, setStatus, status, beep} = props;

  const handleReset = () =>{
    console.log("reset")
    setCounter(25*60);
    setSessionTime(25);
    setBreakTime(5);
    setCounterName("session");
    setStatus("paused")
    beep.pause();
    beep.currentTime = 0;
  }

  const handleStartStop = () => {
    if (status=="counting") {
      console.log("pause!")
      setStatus("paused")
    } else {
      console.log("resume!")
      setStatus("counting")
    }
  }

  const handleBreak = (e) => {
    if (counterName == "break"){
      switch (e.target.id){
        case "break-increment":
          if (breakTime + 1 <= 60){
            setBreakTime(breakTime + 1);
            setCounter((breakTime + 1) * 60);
          }
          break
        case "break-decrement":
          if (breakTime - 1 > 0){
            setBreakTime(breakTime - 1);
            setCounter((breakTime - 1) * 60)
          }
          break
        default:
          console.log("error whoops")
          break
      }
    } else {
      switch (e.target.id){
        case "break-increment":
          if (breakTime + 1 <= 60){
            setBreakTime(breakTime + 1);
          }
          break
        case "break-decrement":
          if (breakTime - 1 > 0){
            setBreakTime(breakTime - 1);
          }
          break
        default:
          console.log("whoops, error")
      }
    }
  }
  const handleSession = (e) => {
    if (counterName == "session"){
      switch (e.target.id){
        case "session-increment":
          if (sessionTime + 1 <= 60){
            setSessionTime(sessionTime + 1);
            setCounter((sessionTime + 1) * 60);
          }
          break
        case "session-decrement":
          if (sessionTime - 1 > 0){
            setSessionTime(sessionTime - 1);
            setCounter((sessionTime - 1) * 60)
          }
          break
        default:
          console.log("error whoops")
          break
      }
    } else {
      switch (e.target.id){
        case "session-increment":
          if (sessionTime + 1 <= 60){
            setSessionTime(sessionTime + 1);
          }
          break
        case "session-decrement":
          if (sessionTime - 1 > 0){
            setSessionTime(sessionTime - 1);
          }
          break
        default:
          console.log("whoops, error")
      }
    }
  }

  return (
    <div className={styles.root}>
      <div>
        <button id="start_stop" onClick={handleStartStop}>{status == "paused" ? "Start" : "Pause"}</button>
        <button id="reset" onClick={handleReset}>Reset</button>
      </div>
      <div>
        <button id="break-decrement" onClick={handleBreak}>▼ break decrement</button>
        <button id="break-increment" onClick={handleBreak}>▲ break increment</button>
        <button id="session-decrement" onClick={handleSession}>▼ session decrement</button>
        <button id="session-increment" onClick={handleSession}>▲ session increment</button>
      </div>
      
      
    </div>
  )
}

export default Controls
