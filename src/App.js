import React, { useState } from "react";
import Form from "./compontents/form/form";
import Table from "./compontents/table/table";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  //when there is no user input we get an error
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  console.log({yearlyData});

  return (
    <div>
      {/* lifting props oncalculate is the name of the function in the form file
    and calculateHandler the function in the parent file where you want to store the props */}
      <Form onCalculate={calculateHandler} />
      {/* fallback text for no user input */}
      {!userInput && <p> no user input</p>}
      {userInput && <Table data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
