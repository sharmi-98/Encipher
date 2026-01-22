function Child({onClick}){
    return(
        <button onClick={onClick}>Click</button>
    );
}
function Task19(){
    const message=()=>{
        alert("Button Clicked");
    };
    return(
        <Child onClick={message} />
    );
}
export default Task19;