import styles from "./labels.module.scss"

function Labels(props) {
  const {counterName, counter, breakTime, sessionTime} = props;

  const displayMinutes = counter/60 >= 1? Math.floor(counter/60) >= 10? Math.floor(counter/60) :`0${Math.floor(counter/60)}` : "00";

  const displaySeconds = counter % 60 >= 10 ? counter % 60 : counter%60 > 0? `0${counter%60}` : "00";
  

  return (
    <div className={styles.root}>
      <div id="timer">
        <span id="time-left">{displayMinutes}:{displaySeconds}</span>
        <span id="timer-label">{counterName}</span>
      </div>

      <div>
        <label id="break-label" htmlFor="">
          Break Length: <span id="break-length">{breakTime}</span>
        </label>
        <label id="session-label" htmlFor="">
          Session Length: <span id="session-length">{sessionTime}</span>
        </label>
      </div>
    </div>
  )
}

export default Labels
