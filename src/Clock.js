import "./styles.css";

const Clock = ({ time }) => {
  const hourStyle = {
    transform: `rotate(${time.timeH * 30}deg)`,
    transitionDuration: "5s"
  };

  const minuteStyle = {
    transform: `rotate(${time.timeM * 6}deg)`,
    transitionDuration: "5s"
  };

  const secondStyle = {
    transform: `rotate(${time.timeS * 6}deg)`,
    transitionDuration: "5s"
  };

  return (
    <div>
      <div className="clock">
        <div className="hand hour" style={hourStyle}></div>
        <div className="hand minute" style={minuteStyle}></div>
        <div className="hand second" style={secondStyle}></div>
        <span className="number number1">1</span>
        <span className="number number2">2</span>
        <span className="number number3">3</span>
        <span className="number number4">4</span>
        <span className="number number5">5</span>
        <span className="number number6">6</span>
        <span className="number number7">7</span>
        <span className="number number8">8</span>
        <span className="number number9">9</span>
        <span className="number number10">10</span>
        <span className="number number11">11</span>
        <span className="number number12">12</span>
      </div>
    </div>
  );
};

export default Clock;
