import React from "react";
import "./App.css";

const NUMBERS = 45;

function App() {
  const numbers = Array.from({ length: NUMBERS }, (_, i) => i + 1);

  return (
    <div className="App">
      <main>
        <section>
          {numbers.map((number) => (
            <div style={{ width: "25%" }} key={number}>
              {number}
            </div>
          ))}
          <button type="button"></button>
        </section>
        <section>
          {numbers.map((number) => (
            <div style={{ width: "25%" }} key={number}>
              {number}
            </div>
          ))}
        </section>
        <section>
          {numbers.map((number) => (
            <div style={{ width: "25%" }} key={number}>
              {number}
            </div>
          ))}
        </section>
        <section>
          {numbers.map((number) => (
            <div style={{ width: "25%" }} key={number}>
              {number}
            </div>
          ))}
        </section>
        <section>
          {numbers.map((number) => (
            <div style={{ width: "25%" }} key={number}>
              {number}
            </div>
          ))}
        </section>
        <section>
          {numbers.map((number) => (
            <div style={{ width: "25%" }} key={number}>
              {number}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
