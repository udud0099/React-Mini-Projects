import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm";
    // only add A-Z and a - z
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.ceil(Math.random() * str.length);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // console.log(password);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {password}
      <div>
        <div>
          <input type="text" value={password} placeholder="password" readOnly />
          <button>Copy</button>
        </div>
        <div>
          <input
            onChange={(e) => {
              setLength(e.target.value);
            }}
            type="range"
            min={6}
            max={100}
            value={length}
          />
          <label>Length {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>setCharAllowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
