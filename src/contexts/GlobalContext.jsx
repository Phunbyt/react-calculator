import React, { createContext, useState, useEffect } from "react";

 export const GlobalContext = createContext() 
export const GlobalContextProvider = ({ children }) => {
    const [input, setInput] = useState(0)
    const [output, setOutput] = useState(0)
    const [evaluated, setEvaluated] = useState(false)
    const [holder, setHolder] = useState(0)
    const getValue = (e) => {

        setInput(state => {
            if (state === 0 && e.target.value == "0") return state = 0;
              if (state === 0) state = e.target.value;
              else state += e.target.value;
if (state.includes('.')) {
    return '';
}
            //  const firstIndex = `${input}`.split("").indexOf(".");

            //  const result =
            //    firstIndex != `${input}`.lastIndexOf(".") && firstIndex != -1;
            // if (result) {
                 
            //  }
            return state
        })
        setOutput((state) => {
         if (state === 0 && e.target.value == "0") return (state = 0);
         if (state === 0) state = e.target.value;
         else state += e.target.value;
            
         return state;
        });
    }
    const clearDisplay = () => {
        setInput(0);
        setOutput('');
    }

    const handleSign = (e) => {
        if (evaluated) {
            console.log(holder, 'first');
            console.log(output, 'first');
            // setOutput(0)
            // setOutput(holder)
            console.log(holder, 'sec');
            console.log(output, 'sec');
        }
        setInput(e.target.value);
        setOutput((state) => {
          state += e.target.value;
          return state;
        });
    
    }

    const evaluate = () => {
        try {
            const result = eval(output);
            setInput(result);
            setOutput(`${output} = ${result}`);
            setEvaluated(true);
            setHolder(result)
        } catch (error) {
        }
    }

    const watchDecimal = () => {
        const firstIndex = `${input}`.split("").indexOf(".");

const result = firstIndex != `${input}`.lastIndexOf(".") && firstIndex != -1;
        if (result) {

        }
       
    }

useEffect(() => {
    watchDecimal();
   
}, [input])
    
    const state = {
      input,
      setInput,
      output,
      setOutput,
      getValue,
      clearDisplay,
      handleSign,
      evaluate,
      watchDecimal,
    };
    return (
        <GlobalContext.Provider value={state}>
        
            { children }
        </GlobalContext.Provider>
    )
}


