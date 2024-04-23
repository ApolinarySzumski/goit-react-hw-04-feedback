import PropTypes from "prop-types";

const FeedbackOptions = ({ optionsKeys, handleClick }) => {
  return (
    <div>
      {optionsKeys.map((option) => (
        <button name={option} key={option} onClick={handleClick}>
          {option.slice(0, 1).toUpperCase()}
          {option.slice(1, option.length)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  optionsKeys: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};
