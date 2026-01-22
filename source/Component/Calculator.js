import { useState } from "react";
import "./Calculator.css";
function Calculator(){
    const[display,setDisplay]=useState("0");
    const handleClick=(value)=>{
        if(value==="C"){
            setDisplay("0");
            return;
        }
        if(value==="="){
            try{
                const result=eval(display.replace(/x/g,"*"));
                setDisplay(result.toString());
            }catch{
                setDisplay("Error");
            }
            return;
        }
        if(display==="0"){
            setDisplay(value);
        }else{
            setDisplay(display+value);
        }
    };
    const buttons=[
        "+","-","x","/",
        "9","8","7","6",
        "5","4","3","2",
        "1","0",".","C",
        "="
    ];
    return(
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
               {buttons.map((btn,index)=>(
                <button key={index}
                className={
                    btn==="C"?"clear":btn==="="?"equal":isNaN(btn)?"operator":"number"
                }
                onClick={()=>handleClick(btn)}>{btn}</button>
               ))} 
            </div>
        </div>
    );
}
export default Calculator;