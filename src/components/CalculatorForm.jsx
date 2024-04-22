import { useState } from 'react';

const CalculatorForm = () => {
  const [inputState, setInputState] = useState({});

  const handleInlutChanges = (e) => {
    setInputState({
      ...inputState,
      [e.target.id]: e.target.value,
    });
  };

  const handleReset = () => {};

  const handleSubmit = (e) => {
    e.preventDefault(); //submit 버튼을 눌렀을때 페이지가 리로드 되는 것을 멈추기
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={handleInlutChanges}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={handleInlutChanges}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={handleInlutChanges}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={handleInlutChanges} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default CalculatorForm;
