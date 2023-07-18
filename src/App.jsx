import "./App.css";
import Card from "./components/Card";
import Table from "./components/Table";
import { useState } from "react";
import investmentIcon from "./assets/icons8-investment-100.png";

function App() {
  const [tableData, setTableData] = useState([]);

  function updateTableData(data) {
    setTableData(data);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center w-[100%] pt-10">
        <h1 className="font-semibold text-4xl text-white ">
          Investment Calculator
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center w-[100%] pt-5">
        <img
          src={investmentIcon}
          alt="Investment Icon"
          style={{ height: "75px", width: "75px" }}
        />
      </div>

      <Card updateTableData={updateTableData} />
      <div className="flex flex-row items-center justify-center w-full">
        <Table data={tableData} />
      </div>
      {/* Render the Table component here */}
    </>
  );
}

export default App;
