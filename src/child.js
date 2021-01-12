import React, {useContext} from "react";
import countercontext from "./countercontext";



const Child=() =>
{
    let countervalue=useContext(countercontext);


    return(

        <div>
            <h2> Hello World</h2>
            <h4> value of counter is {countervalue}</h4>

            <button onClick={()=>countervalue[1](++countervalue[0])} >Increment</button>
        </div>
    )


}


export default Child;
