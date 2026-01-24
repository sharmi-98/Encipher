import { useState } from "react"

function Task7(){
    const[username,setUsername]=useState("");
    const[error,setError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username===""){
            setError("username is required");
        }
        else{
            setError("");
            alert("Form Submitted");
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={username} placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
        <button type="submit">Submit</button>
        {error&&<p>{error}</p>}
        </form>
        </>
    );
}export default Task7;