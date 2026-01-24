import { useState } from "react"

function Task2(){
    const[show,setShow]=useState(false);
    return(
        <div>
            <button onClick={()=>{setShow(!show)}}>
                Show/Hide
            </button>
            {show&&<h3>Hello React</h3>}
        </div>
    );
}export default Task2;