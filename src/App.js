import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Header from './components/Header';
import ResultTable from './components/ResultTable';

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    setResults(userInput);
  };

  const yearlyData = [];

  if (results) {
    let currentSavings = +results['current-savings'];
    const yearlyContribution = +results['yearly-contribution'];
    const expectedReturn = +results['expected-return'] / 100;
    const duration = +results['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <CalculatorForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable />
    </div>
  );
}

export default App;
