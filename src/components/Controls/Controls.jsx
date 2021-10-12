import { useRef } from "react";
import styles from "./controls.module.scss"

function Controls(props) {
  const {counter, setCounter} = props;
  const timer = useRef(null);

  const handleReset = () =>{
    // any running timer should be stopped
    // value withing #break-length should return to 5
    // value withing #session-length should return to 25
    // #time-left should reset to default

    // audio element #beep must stop playing and be rewound to beginning
  }

  const handleDecrement = () => {
    // break decrement: value in #break-length decreases by 1
    // session decrement: value in #session-length decreases by 1

    // cannot set to <= 0
  }

  const handleIncrement = () => {
    // break increment: value in #break-length increases by 1
    // session increment: value in #session-length increases by 1

    // cannot set > 60
  }

  const handleStartStop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      console.log("pause!")
    } else if (!counter){
      resetTimer();
    } else {
      loopTimer();
      console.log("start!")
    }
    // the first click plays the timer from #session-length
    // if timer is running, the timer pauses
    // if paused, the timer resumes from where it left off
  }

  const loopTimer = () => {
    timer.current = setInterval(() => {
      console.log("counter", counter)
      setCounter(prev => prev-1);
      if (0 >= counter) {
        //pause
        console.log("pause?")
        return
      }
    }, 1000)
  }

  const resetTimer = () => {
    console.log("reset to session length I think")
    setCounter(25);
    loopTimer();
  }

  return (
    <div className={styles.root}>
      <button id="break-decrement" onClick={handleDecrement}>break decrement</button>
      <button id="session-decrement" onClick={handleDecrement}>session decrement</button>
      <button id="break-increment" onClick={handleIncrement}>break increment</button>
      <button id="session-increment" onClick={handleIncrement}>session increment</button>

      <p>{counter}</p>

      <button id="start_stop" onClick={handleStartStop}>{"start / stop"}</button>
      <button id="reset" onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Controls
