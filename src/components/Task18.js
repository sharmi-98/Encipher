function One({data}){
    return(
        <p>ChildOne:{data}</p>
    )
}
function Two({data}){
    return(
        <p>ChildTwo:{data}</p>
    )
}
function Task18(){
    return(
        <div>
            <One data="ChildOne" />
            <Two data="ChildTwo" />
        </div>
    );
}export default Task18;

