import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import "./Calculator.css";
const Calculator = () => {
    const { getValue, clearDisplay, handleSign, evaluate } =
      useContext(GlobalContext);
  return (
    <div className="calculator">
      <div className="calulator_face"></div>
      <div className="calculator_keys">
        <button onClick={clearDisplay} value="A/C" className="btn" id="clear">
          A/C
        </button>
        <button value="/" onClick={handleSign} className="btn" id="divide">
          /
        </button>
        <button value="*" onClick={handleSign} className="btn" id="multiply">
          X
        </button>
        <button value="7" onClick={getValue} className="btn" id="seven">
          7
        </button>
        <button value="8" onClick={getValue} className="btn" id="eight">
          8
        </button>
        <button value="9" onClick={getValue} className="btn" id="nine">
          9
        </button>
        <button value="-" onClick={handleSign} className="btn" id="subtract">
          -
        </button>
        <button value="4" onClick={getValue} className="btn" id="four">
          4
        </button>
        <button value="5" onClick={getValue} className="btn" id="five">
          5
        </button>
        <button value="6" onClick={getValue} className="btn" id="six">
          6
        </button>
        <button value="+" onClick={handleSign} className="btn" id="add">
          +
        </button>
        <button value="1" onClick={getValue} className="btn" id="one">
          1
        </button>
        <button value="2" onClick={getValue} className="btn" id="two">
          2
        </button>
        <button value="3" onClick={getValue} className="btn" id="three">
          3
        </button>
        <button value="0" onClick={getValue} className="btn" id="zero">
          0
        </button>
        <button value="." onClick={getValue} className="btn" id="decimal">
          .
        </button>
        <button value="=" onClick={evaluate} className="btn" id="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
