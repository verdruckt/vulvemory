import React, { useEffect } from "react";

const Timer = ({ seconds, handleSeconds, isActive, startTime }) => {
  const timeGone = seconds - startTime;

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        handleSeconds(new Date().getTime());
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, handleSeconds]);

  return (
    <div className="app">
      <div className="time">{timeGone}s</div>
    </div>
  );
};

export default Timer;
