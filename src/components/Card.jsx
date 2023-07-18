import React, { useState } from "react";

function Card({ updateTableData }) {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedInterest, setExpectedInterest] = useState(0);
  const [years, setYears] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setYears("");

    // Calculate and set data
    let investedCapital = currentSavings;
    let interest = (expectedInterest / 100) * currentSavings;
    let totalInterest = 0;
    let totalSavings = 0;
    const calculatedData = [];

    for (let i = 0; i <= years; i++) {
      investedCapital += yearlySavings;
      totalInterest += interest;
      totalSavings = investedCapital + totalInterest;
      interest = (expectedInterest / 100) * totalSavings;

      calculatedData.push({
        year: i + 1,
        investedCapital: investedCapital.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalSavings: totalSavings.toFixed(2),
        interest: interest.toFixed(2),
      });
    }

    // Pass the data to App.jsx using the callback function
    updateTableData(calculatedData);
  }

  function onChangeCurrentSavings(e) {
    setCurrentSavings(parseFloat(e.target.value));
  }

  function onChangeYearlySavings(e) {
    setYearlySavings(parseFloat(e.target.value));
  }

  function onChangeExpectedInterest(e) {
    setExpectedInterest(parseFloat(e.target.value));
  }

  function onChangeYears(e) {
    setYears(parseInt(e.target.value, 10));
  }

  function handleReset() {
    setCurrentSavings(0);
    setYearlySavings(0);
    setExpectedInterest(0);
    setYears(0);
    window.location.reload();
  }

  return (
    <div className="bg-[#EEEEEE] m-14 p-12 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col space-y-2 md:space-x-5 pt-5">
          <label htmlFor="input1">Current Savings</label>
          <input
            id="input1"
            className="rounded-sm w-[75%]"
            type="number"
            value={currentSavings}
            onChange={onChangeCurrentSavings}
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-x-5 pt-5">
          <label htmlFor="input2">Yearly Savings</label>
          <input
            id="input2"
            type="number"
            className="rounded-sm w-[75%]"
            value={yearlySavings}
            onChange={onChangeYearlySavings}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col space-y-2 md:space-x-5 pt-5">
          <label htmlFor="input3">Expected Interest (Per Year)</label>
          <input
            id="input3"
            type="number"
            value={expectedInterest}
            onChange={onChangeExpectedInterest}
            className="rounded-sm w-[75%]"
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-x-5 pt-5">
          <label htmlFor="input4">Investment Duration</label>
          <input
            id="input4"
            type="number"
            className="rounded-sm w-[75%]"
            value={years}
            onChange={onChangeYears}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-5 mt-8">
        <button
          className="px-5 py-3 border-white border w-full md:w-auto rounded-lg"
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>

        {/* Submit Button Code */}
        <button
          className="px-5 py-3 border-white border w-full md:w-auto rounded-lg"
          type="submit"
          onClick={handleClick}
        >
          Calculate
        </button>
      </div>

      {/* Render the Table component here */}
    </div>
  );
}

export default Card;
