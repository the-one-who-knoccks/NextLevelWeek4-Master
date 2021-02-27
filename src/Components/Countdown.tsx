import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext'; 

//Pure Javascript that stops the setTimeout function
let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const {  startNewchallenge  } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  //Function to start the countdown
  function startCountdown() {
    setIsActive(true);
  }

  //Function to reset the countdown
  function resetCountDown() {
    //Function to clear the setTimeout
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (
      isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewchallenge();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado!
        </button>
      ) : (
          <>
            { isActive ? (<button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>) :
              <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
              >
                Iniciar um ciclo
            </button>}
          </>
        )}
    </div>
  );
}