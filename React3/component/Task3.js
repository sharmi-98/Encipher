import { useState } from "react"

function Task3(){
    const[isLoggedIn,setisLoggedIn]=useState(false);
    return(
        <div>
            <button onClick={()=>setisLoggedIn(!isLoggedIn)}>
                {isLoggedIn?"Logout":"Login"}
            </button>
            {isLoggedIn&&<h3>Dashboard</h3>}
        </div>
    );
}export default Task3;