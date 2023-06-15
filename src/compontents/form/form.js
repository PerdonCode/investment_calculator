import React, { useState } from "react";

const initialUserInput = {
    "current-savings": 1000,
    "yearly-contribution": 250,
    "expected-return": 5,
    "duration": 10,
  }

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const handleOnChange = (input, value) => {
    setUserInput((prevInput) => {
        return{
            ...prevInput,
            // dynamically acces prop name
            [input]: value,
        }
    })
  };

  const submitHandler = (event) => {
    // we dont want ro reload / restart the application
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const handleResetButton = () => {
    setUserInput(initialUserInput);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              handleOnChange("current-savings", event.target.value)
            }
            // two way binding
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              handleOnChange("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              handleOnChange("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => handleOnChange("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleResetButton}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
