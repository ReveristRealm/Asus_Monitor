import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Gauge
        width={100}
        height={100}
        value={86}
        startAngle={-110}
        endAngle={110}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 41,
            transform: "translate(0px, -7px)",
          },
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
    </>
  );
}

export default App;
