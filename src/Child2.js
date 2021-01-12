import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";




const Child2=()=>{

    let [state,dispatch] =useReducer(counterReducer,20);
    console.log(state);
return (
    <div>
     <h4> Value of reducer is {state}  </h4>
     <button onClick={()=> dispatch("INCREMENT")}>Increment Reducer</button>
      
    </div>
)



}

export default Child2;
