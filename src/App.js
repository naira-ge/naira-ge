import Form from "./Form.js";
import Clock from "./Clock.js";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);

  return (
    <div className="main">
      <Form setClockTime={(time) => setTime(time)} />
      <Clock time={time} />
    </div>
  );
};

export default App;
