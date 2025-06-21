import { useState } from "react";
import { FaBackspace } from "react-icons/fa";

export default function Normal(){
    const [value,setvalue] = useState("");
    const handleClick = (e) => {
        const val = e.target.value;
        const lastChar = value.slice(-1);
        const operators = ["+","-","/","*"]

        if (operators.includes(val)){
            if(value === "" || operators.includes(lastChar)) return;

        }
        if (val==="." && lastChar === ".") return;
        setvalue((prev) => prev + val);

    }
    const handleClear =() =>{
        setvalue("");
    }
    const handleBack = () =>{
        setvalue((prev)=> prev.slice(0,-1));
    }
    const handleEqual = () =>{
        try{
         setvalue(eval(value).toString());
        }catch{
            setvalue("Error");
        }
    }

    return(
        <section className="normal-calculator">
           <h1>Simple calculator</h1>
           <div className="calculator-basic">
            <input value={value} className="calculator-screen" placeholder="0"  />
             <button value="7" onClick={handleClick} className="border">7</button>
             <button value="8" onClick={handleClick} className="border">8</button>
             <button value="9" onClick={handleClick} className="border">9</button>
             <button value="" onClick={handleClear}>AC</button>
             <button value="" onClick={handleBack} className="back shade"><FaBackspace  /></button>
             <button value="4" onClick={handleClick} className="border">4</button>
             <button value="5" onClick={handleClick} className="border">5</button>
             <button value="6" onClick={handleClick} className="border">6</button>
             <button value="+" onClick={handleClick} className="shade">+</button>
             <button value="-" onClick={handleClick} className="shade">-</button>
             <button value="1" onClick={handleClick} className="border">1</button>
             <button value="2" onClick={handleClick} className="border">2</button>
             <button value="3" onClick={handleClick} className="border">3</button>
             <button value="/" onClick={handleClick} className="shade">/</button>
             <button value="*" onClick={handleClick} className="shade">*</button>
             <button value="0" onClick={handleClick} className="zero border">0</button>
             <button value="." onClick={handleClick} className="shade">.</button>
             <button value="=" onClick={handleEqual} className="equal shade">=</button>
 

           </div>


        </section>
    )
}