function Head({head}){
    return(
        <h1>{head}</h1>
    );
}
function Content({content}){
    return(
        <p>{content}</p>
    );
}
function Footer({footer}){
    return(
        <div>{footer}</div>
    );
}
function Task20(){
    return(
        <div>
        <Head head="Task20 Header" />
        <Content content="Task20 Content" />
        <Footer footer="&copy; All Right Reversed." />
        </div>
    );
}export default Task20;