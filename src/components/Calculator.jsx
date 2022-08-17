import { useState } from "react";
import * as math from "mathjs";
import "./calculator.css";
import DisplayScreen from "./DisplayScreen";
const Calculator = () => {
    let [result, setResult] = useState(0);
    let [expression, setExpresstion] = useState("");

    const keyList = ["C","AC","%","/","7","8","9","*","4","5","6","+","1","2","3","-","0",".","="];

    function handleClick(e){

        if(e.target.innerHTML === "C"){
            setExpresstion('');
            setResult(0);
            return;
        }

        if(e.target.innerHTML === "AC"){ 
            setExpresstion(expression.slice(0,-1));
            if(!expression){
                setExpresstion('');
            }
            return;
        }

        if(e.target.innerHTML === "="){ 
            setResult(math.evaluate(expression))
            return;
        }

        setExpresstion(expression + e.target.innerHTML)
    }    

    return ( 
        <div className="calculator">
            <DisplayScreen result={result} expression={expression}/>
            <div className="calculator__keyboard">
                {keyList.map((item,index)=>( 
                    item !== "0" ? 
                    <div className="calculator__key" 
                    onClick={handleClick} 
                    key={index}>
                        {item}
                    </div> : 
                    <div className="calculator__key key-zero" 
                    onClick={handleClick} 
                    key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Calculator;