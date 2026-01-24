function Task5(){
    const student=[
        {id:1,name:"sharmi"},
        {id:2,name:"praba"},
        {id:3,name:"mathi"}
    ];
    return(
        <ul>
            {student.map((student)=>(
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    );
}export default Task5;