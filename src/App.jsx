import { useState } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statictics from "./components/Statistics";
import INITIAL_OPTIONS from "./constases/INITIAL_OPTIONS";

function App() {
  const [options, setOptions] = useState(INITIAL_OPTIONS);

  const handleClick = (e) => {
    setOptions((prev) => ({
      ...prev,
      [e.target.name]: prev[e.target.name] + 1,
    }));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          optionsKeys={Object.keys(options)}
          handleClick={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {Object.values(options).every((option) => option === 0) ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statictics options={options} />
        )}
      </Section>
    </>
  );
}

export default App;
