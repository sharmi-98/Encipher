import { useState } from "react"

function Task6(){
    const[text,setText]=useState("");
    return(
        <>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <p>Input text:{text}</p>
        </>
    );
}export default Task6;