import { useEffect, useState } from "react";

function Apifetch(){
    const [num,setNum]=useState([]);
    const [count,setCount]=useState(0)
    const getApiData=async()=>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const res = await response.json();
            setNum(res);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        if(count>0){
            getApiData();
        }
    },[count]);
return(
    <div className="App">
        <h1>Hello</h1>
       <button onClick={() => setCount(count + 1)}>
        Click ({count})
      </button>
      <ul>
        {num.map((item) => (
          <li key={item.id}>
            {item.id} - {item.title}
          </li>
        ))}
      </ul>
    </div>
);
}export default Apifetch;