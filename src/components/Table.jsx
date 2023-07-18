import React from "react";

function Table({ data }) {
  return (
    <>
      <table
        className="items-center justify-center w-[80%]"
        border="1"
        cellpadding="3"
        cellspacing="3"
      >
        <tr className="text-white">
          <td className="text-center">Year</td>
          <td className="text-center">Total Savings</td>
          <td className="text-center">Interest</td>
          <td className="text-center">Total Interest</td>
          <td className="text-center">Invested Capital</td>
        </tr>

        {data.map((item, index) => (
          <tr key={index} className="text-white">
            <td className="text-center">{item.year}</td>
            <td className="text-center">{item.totalSavings}</td>
            <td className="text-center">{item.interest}</td>
            <td className="text-center">{item.totalInterest}</td>
            <td className="text-center">{item.investedCapital}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Table;
