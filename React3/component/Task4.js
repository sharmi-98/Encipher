function Task4(){
    const fruit=["Apple","Banana","Orange"];
    return(
        <ul>
            {fruit.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}export default Task4;