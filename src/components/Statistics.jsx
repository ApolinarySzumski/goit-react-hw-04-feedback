import PropTypes from "prop-types";

const Statictics = ({ options }) => {
  const calculateStatistics = () => {
    const total = Object.values(options).reduce(
      (acc, optionValue) => acc + optionValue,
      0,
    );

    const positivePercentage =
      // *100 to get value in percent then *10 with Mathround ending with /10 to get one decimal place
      Math.round((options.good / total) * 100 * 10) / 10;

    return { total, positivePercentage };
  };

  return (
    <div>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total: {calculateStatistics().total}</p>
      <p>Positive Feedback:{calculateStatistics().positivePercentage}%</p>
    </div>
  );
};

export default Statictics;

Statictics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
};
