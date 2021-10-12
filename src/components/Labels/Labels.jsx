import styles from "./labels.module.scss"

function Labels(props) {
  const {counterName} = props;
  

  return (
    <div className={styles.root}>
      <label id="break-label" htmlFor="">Break Length</label>
      <label id="session-label" htmlFor="">Session Length</label>

      <span id="break-length">{"break length var here!"}</span>
      <span id="session-length">{"session length var here!"}</span>

      <div id="timer">
        <span id="time-left">{"MM:SS: how much time is left"}</span>
        <span id="timer-label">{counterName}</span>
      </div>
      
    </div>
  )
}

export default Labels
