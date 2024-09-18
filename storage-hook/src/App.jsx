import { useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [value, setValue] = useState("");
  useLocalStorage("value", "/login")

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => {
          localStorage.setItem("value", JSON.stringify(value))
        }}>Set</button>
      </div>
    </>
  );
}

export default App;
