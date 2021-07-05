import React, { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext'
import './Display.css'
const Display = () => {
const {input,output} = useContext(GlobalContext)
    return (
      <div className="display">
        <div className="output">{output}</div>
        <div id="display" className="input">
          {input}
        </div>
      </div>
    );
}

export default Display
