import "./styles.css";
import { useState } from "react";

const Form = ({ setClockTime }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const setTime = (e) => {
    const value = e.target.value;
    e.target.name === "hours" && setHours(value);
    e.target.name === "minutes" && setMinutes(value);
    e.target.name === "seconds" && setSeconds(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      isNaN(seconds) ||
      (hours === "" && minutes === "")
    ) {
      setHours("");
      setMinutes("");
      setSeconds("");
      return;
    }

    let timeH = +hours;
    let timeM = +minutes;
    let timeS = +seconds;

    if (timeH >= 24) {
      timeH %= 24;
    }
    if (timeM >= 60 || timeS >= 60) {
      timeM %= 60;
      timeS %= 60;
    }

    setClockTime({ timeH, timeM, timeS });
  };

  return (
    <form className="time-form" onSubmit={handleSubmit}>
      <input
        onChange={setTime}
        type="text"
        placeholder="Hours"
        name="hours"
        value={hours}
        className="time-input"
      />
      <input
        onChange={setTime}
        type="text"
        placeholder="Minutes"
        name="minutes"
        value={minutes}
        className="time-input"
      />
      <input
        onChange={setTime}
        type="text"
        placeholder="Seconds"
        name="seconds"
        value={seconds}
        className="time-input"
      />
      <button onClick={handleSubmit} className="time-input btn">
        Apply
      </button>
    </form>
  );
};

export default Form;
